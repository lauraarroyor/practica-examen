// utils.js — funciones utilitarias con bugs detectables por SonarCloud

// BUG-21: Credenciales hardcodeadas en el código fuente → S2068 (Critical)
const ADMIN_USER = "admin";
const ADMIN_PASS = "admin123";         // contraseña en texto plano
const DB_CONNECTION = "mysql://root:password123@localhost:3306/usersdb"; // S2068

// BUG-22: Uso de var en lugar de let/const → S3504
var globalCounter = 0;
var tempData = null;

// BUG-23: Función con demasiados parámetros → S107 (máximo recomendado: 4)
function createUserRecord(name, age, email, phone, address, city, country, zipCode, role) {
  return { name, age, email, phone, address, city, country, zipCode, role };
}

// BUG-24: Uso de eval() → S1523 (Critical — riesgo de inyección de código)
function executeExpression(input) {
  return eval(input);  // NUNCA usar eval con input del usuario
}

// BUG-25: Comparación con == en lugar de === → S1939
function checkAge(age) {
  if (age == "18") {     // comparación débil: "18" == 18 → true
    return true;
  }
  if (age == null) {     // debería ser === null
    return false;
  }
  return age > 18;
}

// BUG-26: Variable declarada pero nunca usada → S1481
function formatCurrency(amount) {
  var unusedVariable = "this is never used";  // dead code
  var anotherUnused = 42;
  return "$" + amount.toFixed(2);
}

// BUG-27: Función que siempre retorna el mismo valor → S3923
function getUserStatus(isActive) {
  if (isActive) {
    return "active";
  } else {
    return "active";  // ambas ramas retornan lo mismo → bug lógico
  }
}

// BUG-28: Bloque catch vacío → S108 (traga errores silenciosamente)
function parseJSON(data) {
  try {
    return JSON.parse(data);
  } catch (e) {
    // silently ignored — el error desaparece sin trazabilidad
  }
}

// BUG-29: Condición siempre verdadera → S2583
function validateInput(value) {
  var x = 5;
  if (x > 0 || x < 10) {  // siempre true → código muerto implícito
    return value !== "";
  }
  return false;  // código inalcanzable → S2737
}

// BUG-30: Número mágico sin constante con nombre → S109
function calculateTax(price) {
  return price * 0.15;   // ¿qué es 0.15? debería ser una constante TAX_RATE
}

// BUG-31: console.log dejado en producción → S2228
function debugHelper(msg) {
  console.log("DEBUG:", msg);      // S2228: no usar console en producción
  console.log("Timestamp:", Date.now());
}

// BUG-32: Función recursiva sin caso base explícito visible (riesgo de stack overflow)
function sumRecursive(n) {
  if (n == 0) return 0;    // usa == en lugar de ===
  return n + sumRecursive(n - 1);  // sin límite de profundidad → riesgo
}
