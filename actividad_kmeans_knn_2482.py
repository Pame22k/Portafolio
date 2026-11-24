# AI Challenge - K-Means y KNN
# Equipo: (poner nombres aqui)

import numpy as np
import pandas as pd
import matplotlib.pyplot as plt
from sklearn.preprocessing import StandardScaler
from sklearn.cluster import KMeans
from sklearn.model_selection import train_test_split
from sklearn.neighbors import KNeighborsClassifier
from sklearn.metrics import accuracy_score

# ------------------------------------------------
# 1. CREAR LOS DATOS DE 500 ESTUDIANTES
# ------------------------------------------------

# la semilla es para que salgan siempre los mismos numeros
np.random.seed(42)

# cantidad de estudiantes
n = 500

# horas de estudio, asistencia y tareas con numeros al azar
horas = np.random.uniform(0, 20, n)
asistencia = np.random.uniform(40, 100, n)
tareas = np.random.uniform(20, 100, n)

# un poco de azar para la nota
azar = np.random.normal(0, 5, n)

# la nota depende de las horas, la asistencia y las tareas
nota = 15 + 2 * horas + 0.2 * asistencia + 0.2 * tareas + azar
nota = np.clip(nota, 0, 100)

# juntamos todo en una tabla
df = pd.DataFrame({
    "horas": horas.round(1),
    "asistencia": asistencia.round(1),
    "tareas": tareas.round(1),
    "nota": nota.round(1)
})

# aprobo = 1 si la nota es 60 o mas, si no es 0
df["aprobo"] = (df["nota"] >= 60).astype(int)

print("Primeros 5 estudiantes:")
print(df.head())
print("Aprobados:", df["aprobo"].sum())
print("Reprobados:", (df["aprobo"] == 0).sum())

# ------------------------------------------------
# 2. K-MEANS
# ------------------------------------------------

# solo usamos las 3 columnas de habitos
X = df[["horas", "asistencia", "tareas"]]

# normalizamos para que todas tengan la misma escala
escalador = StandardScaler()
X_normalizado = escalador.fit_transform(X)

# K-Means con 3 grupos
modelo3 = KMeans(n_clusters=3, n_init=10, random_state=42)
df["grupo3"] = modelo3.fit_predict(X_normalizado)

print("\nK-Means con 3 grupos (promedio de cada grupo):")
print(df.groupby("grupo3")[["horas", "asistencia", "tareas", "nota"]].mean().round(1))

# grafica de 3 grupos
plt.figure()
plt.scatter(df["horas"], df["asistencia"], c=df["grupo3"])
plt.xlabel("Horas de estudio")
plt.ylabel("Asistencia")
plt.title("K-Means con 3 grupos")
plt.show()

# K-Means con 4 grupos
modelo4 = KMeans(n_clusters=4, n_init=10, random_state=42)
df["grupo4"] = modelo4.fit_predict(X_normalizado)

print("\nK-Means con 4 grupos (promedio de cada grupo):")
print(df.groupby("grupo4")[["horas", "asistencia", "tareas", "nota"]].mean().round(1))

# grafica de 4 grupos
plt.figure()
plt.scatter(df["horas"], df["asistencia"], c=df["grupo4"])
plt.xlabel("Horas de estudio")
plt.ylabel("Asistencia")
plt.title("K-Means con 4 grupos")
plt.show()

# ------------------------------------------------
# 3. KNN
# ------------------------------------------------

# X son los habitos y y es lo que queremos adivinar (aprobo)
# no usamos la nota porque aprobo sale de la nota
X = df[["horas", "asistencia", "tareas"]]
y = df["aprobo"]

# dividimos 75% para entrenar y 25% para probar
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.25, random_state=42)

print("\nDatos de entrenamiento:", len(X_train))
print("Datos de prueba:", len(X_test))

# normalizamos (el escalador aprende solo con los de entrenamiento)
escalador = StandardScaler()
X_train_norm = escalador.fit_transform(X_train)
X_test_norm = escalador.transform(X_test)

# ------------------------------------------------
# 4. PROBAR DIFERENTES VALORES DE K
# ------------------------------------------------

valores_k = [1, 3, 5, 7, 11, 15, 21]
exactitud_con = []
exactitud_sin = []

print("\nResultados de KNN:")
for k in valores_k:
    # con datos normalizados
    knn = KNeighborsClassifier(n_neighbors=k)
    knn.fit(X_train_norm, y_train)
    pred = knn.predict(X_test_norm)
    exactitud_con.append(accuracy_score(y_test, pred))

    # sin normalizar
    knn2 = KNeighborsClassifier(n_neighbors=k)
    knn2.fit(X_train, y_train)
    pred2 = knn2.predict(X_test)
    exactitud_sin.append(accuracy_score(y_test, pred2))

    print("k =", k, "| con normalizar:", round(exactitud_con[-1] * 100, 1), "% | sin normalizar:", round(exactitud_sin[-1] * 100, 1), "%")

# grafica para comparar
plt.figure()
plt.plot(valores_k, exactitud_con, marker="o", label="Con normalizar")
plt.plot(valores_k, exactitud_sin, marker="s", label="Sin normalizar")
plt.xlabel("k")
plt.ylabel("Exactitud")
plt.title("Exactitud de KNN segun k")
plt.legend()
plt.show()

# el mejor k es el que tiene mas exactitud
mejor_k = valores_k[exactitud_con.index(max(exactitud_con))]
print("\nEl mejor k es:", mejor_k)

# ------------------------------------------------
# 5. DESAFIO FINAL
# ------------------------------------------------

# estudiante nuevo: 4 horas, 55% asistencia, 50% tareas
knn_final = KNeighborsClassifier(n_neighbors=mejor_k)
knn_final.fit(X_train_norm, y_train)

nuevo = pd.DataFrame([[4, 55, 50]], columns=["horas", "asistencia", "tareas"])
nuevo_norm = escalador.transform(nuevo)

resultado = knn_final.predict(nuevo_norm)[0]
probabilidad = knn_final.predict_proba(nuevo_norm)[0]

print("\nDesafio final: 4 horas, 55% asistencia, 50% tareas")
if resultado == 1:
    print("Prediccion: APRUEBA")
else:
    print("Prediccion: REPRUEBA")
print("Probabilidad de reprobar:", round(probabilidad[0] * 100), "%")
print("Probabilidad de aprobar:", round(probabilidad[1] * 100), "%")
