# 🐛 sonar-qa-demo — Proyecto de Pruebas QA / ISTQB

Proyecto demo con **HTML, CSS y JavaScript básico** que contiene bugs intencionales
para practicar análisis estático con **SonarCloud** en el contexto del curso ISTQB.

---

## 📁 Estructura del proyecto

```
sonar-qa-demo/
├── index.html                  ← Interfaz principal (11 bugs HTML)
├── src/
│   ├── css/styles.css          ← Estilos (9 bugs CSS)
│   └── js/
│       ├── utils.js            ← Utilidades (12 bugs JS)
│       ├── users.js            ← Módulo usuarios (8 bugs JS)
│       └── app.js              ← Lógica principal (10 bugs JS)
├── tests/
│   └── utils.test.js           ← Pruebas Jest (7 bugs de prueba)
├── sonar-project.properties    ← Configuración SonarCloud
└── package.json
```

---

## 🚀 Configuración rápida

### 1. Instalar dependencias
```bash
npm install
```

### 2. Ejecutar pruebas con cobertura
```bash
npm test
```

### 3. Conectar con SonarCloud
1. Ir a https://sonarcloud.io → Iniciar sesión con GitHub
2. Crear una nueva organización o usar la existente
3. Importar este repositorio (debes subirlo a GitHub primero)
4. Editar `sonar-project.properties` con tu `projectKey` y `organization`
5. Obtener el token en: My Account → Security → Generate Token
6. Ejecutar el escáner:

```bash
# Con SonarScanner CLI
sonar-scanner -Dsonar.login=TU_TOKEN_AQUI
```

---

## 🐛 Catálogo de Bugs intencionales

### 🔴 CRÍTICOS (Security Hotspots)

| # | Archivo | Línea | Regla Sonar | Descripción |
|---|---------|-------|-------------|-------------|
| BUG-21 | utils.js | 4-6 | S2068 | Credenciales hardcodeadas en código fuente |
| BUG-24 | utils.js | 21 | S1523 | Uso de `eval()` con input del usuario |
| BUG-38 | users.js | 62 | S5247 | `innerHTML` con datos sin sanitizar → XSS |
| BUG-34 | users.js | 19 | S2076 | Construcción de query por concatenación → SQLi |

### 🟠 MAYORES (Bugs / Code Smells)

| # | Archivo | Línea | Regla Sonar | Descripción |
|---|---------|-------|-------------|-------------|
| BUG-27 | utils.js | 37 | S3923 | Ambas ramas del if retornan lo mismo |
| BUG-28 | utils.js | 43 | S108 | Bloque catch vacío — error ignorado |
| BUG-29 | utils.js | 48 | S2583 | Condición siempre verdadera |
| BUG-37 | users.js | 38 | S3776 | Complejidad cognitiva muy alta (>15) |
| BUG-39 | users.js | 67 | S3801 | Función sin return en todas las ramas |
| BUG-51 | app.js | 57 | S2259 | División posible por cero sin validación |
| BUG-52 | app.js | 59 | S2688 | Sin validación de NaN |
| BUG-54 | app.js | 72 | S4123 | Async/await sin manejo de errores |
| BUG-55 | app.js | 78 | S2688 | Comparación con NaN usando == |
| BUG-56 | app.js | 83 | S131 | Switch sin cláusula default |

### 🟡 MENORES (Code Smells)

| # | Archivo | Línea | Regla Sonar | Descripción |
|---|---------|-------|-------------|-------------|
| BUG-22 | utils.js | 8-9 | S3504 | Uso de `var` en lugar de `let`/`const` |
| BUG-23 | utils.js | 12 | S107 | Función con más de 4 parámetros |
| BUG-25 | utils.js | 25-30 | S1939 | Uso de `==` en lugar de `===` |
| BUG-26 | utils.js | 34 | S1481 | Variables declaradas pero no usadas |
| BUG-30 | utils.js | 54 | S109 | Número mágico sin constante nombrada |
| BUG-31 | utils.js | 58 | S2228 | `console.log` en código de producción |
| BUG-47 | app.js | 39 | S6586 | `setInterval` sin `clearInterval` |
| BUG-58 | app.js | 87 | S125 | Código comentado en producción |

### 🔵 HTML / CSS

| # | Archivo | Descripción |
|---|---------|-------------|
| BUG-01 | index.html | Falta `lang` en `<html>` |
| BUG-04 | index.html | `<img>` sin atributo `alt` |
| BUG-05 | index.html | `<form>` sin `action`/`method` |
| BUG-09 | index.html | Atributo `border` deprecated en HTML5 |
| BUG-11 | index.html | Tag `<center>` deprecated en HTML5 |
| BUG-13 | styles.css | Abuso de `!important` |
| BUG-14 | styles.css | Propiedad CSS duplicada |
| BUG-15 | styles.css | Contraste insuficiente (WCAG) |
| BUG-19 | styles.css | Regla CSS vacía |

### 🧪 Bugs en las propias pruebas

| # | Archivo | Descripción |
|---|---------|-------------|
| BUG-TEST-02 | utils.test.js | Test sin assertion → siempre pasa |
| BUG-TEST-05 | utils.test.js | Test que pasa pero encubre un bug lógico |
| BUG-TEST-06 | utils.test.js | Caso borde negativo no probado |
| BUG-TEST-07 | utils.test.js | catch vacío retorna undefined silenciosamente |

---

## 📚 Conexión con conceptos ISTQB

| Bug | Concepto ISTQB |
|-----|----------------|
| BUG-21, BUG-34, BUG-38 | Principio 1: Las pruebas muestran presencia de defectos |
| BUG-27, BUG-29, BUG-55 | Error → Defecto → Falla |
| BUG-28, BUG-TEST-02 | Falso negativo: el test pasa pero el código está mal |
| Todos los bugs | Pruebas estáticas: detección sin ejecutar el código |
| Análisis SonarCloud | Herramientas de análisis estático automatizado (Cap. 3) |

---

## 🎯 Ejercicio propuesto

1. Correr SonarCloud y documentar cada issue encontrado
2. Clasificar por: Bug / Code Smell / Vulnerability / Security Hotspot
3. Priorizar usando criterios de riesgo (severidad × probabilidad)
4. Corregir al menos los 4 bugs Críticos y volver a analizar
5. Verificar que los tests de regresión siguen pasando
