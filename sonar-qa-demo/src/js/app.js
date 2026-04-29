// app.js — lógica principal de la aplicación con bugs detectables

// BUG-41: Variable global innecesaria → S2699
var isLoggedIn = false;
var currentUser = null;
var intervalId;   // referencia al intervalo pero puede filtrarse

// BUG-42: Función de login con comparación insegura → S2068 + S1116
function login() {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  // BUG-43: Validación del lado del cliente como única capa → sin validación del servidor
  // BUG-44: Comparación directa con credenciales hardcodeadas desde utils.js
  if (username == ADMIN_USER && password == ADMIN_PASS) {
    isLoggedIn = true;
    currentUser = username;
    showUsersSection();
  } else {
    // BUG-45: Alert() en lugar de UI feedback → S6853 mala UX y bloquea el hilo
    alert("Credenciales incorrectas");
  }
}

// BUG-46: Event listener agregado múltiples veces si se llama más de una vez → memory leak
function initApp() {
  document.getElementById("loginForm").addEventListener("submit", function(e) {
    e.preventDefault();
    login();
  });
  // Si initApp() se llama varias veces, se acumulan listeners
}

function showUsersSection() {
  document.getElementById("login-section").style.display = "none";
  document.getElementById("users-section").style.display = "block";
  loadUsersTable();
  startAutoRefresh();
}

// BUG-47: Intervalo que nunca se limpia → memory leak → S6586
function startAutoRefresh() {
  intervalId = setInterval(function() {
    debugHelper("Auto-refresh ejecutado");  // console.log en producción
    loadUsersTable();
  }, 5000);
  // No hay clearInterval en ningún lado del ciclo de vida
}

function loadUsersTable() {
  var tableBody = document.getElementById("tableBody");
  // BUG-48: innerHTML = "" en lugar de removeChild → puede causar listeners huérfanos
  tableBody.innerHTML = "";

  var allUsers = getAllUsers();
  var total = getUserCount();

  // BUG-49: Código duplicado — el bucle for podría usar forEach → S1994
  for (var i = 0; i < allUsers.length; i++) {
    renderUserCard(allUsers[i]);   // BUG-38: XSS en renderUserCard
  }

  // BUG-50: Concatenación de strings en lugar de template literals → S3512
  document.getElementById("totalMsg").textContent = "Total de usuarios: " + total + " | Activos: " + getActiveUsers().length;
}

// BUG-51: División sin verificar que el divisor no es cero → S2259
function calculateDiscount() {
  var price    = parseFloat(document.getElementById("price").value);
  var discount = parseFloat(document.getElementById("discount").value);

  // BUG-52: Sin validación de NaN → S2688
  var discountAmount = price * (discount / 100);
  var finalPrice     = price - discountAmount;

  // Si discount = 0 y price = 0: 0/0 = NaN → no se valida
  var percentage = (discountAmount / price) * 100;   // división posible por cero

  // BUG-53: Resultado con demasiados decimales → sin redondeo
  document.getElementById("result").innerHTML =
    "Precio original: $" + price +
    " | Descuento: $" + discountAmount +
    " | Precio final: $" + finalPrice;  // innerHTML con datos del input → XSS
}

// BUG-54: Función async sin manejo de errores → S4123
async function fetchExternalData(url) {
  var response = await fetch(url);  // sin try/catch
  var data = await response.json(); // si falla → unhandled promise rejection
  return data;
}

// BUG-55: Comparación con NaN usando == → S2688 (NaN nunca es igual a sí mismo)
function isValidNumber(value) {
  return value == NaN;   // SIEMPRE false → debería ser isNaN(value) o Number.isNaN()
}

// BUG-56: Switch sin default → S131
function getRoleLabel(role) {
  switch(role) {
    case "admin":  return "Administrador";
    case "user":   return "Usuario";
    case "editor": return "Editor";
    // Falta default → si role es desconocido, retorna undefined
  }
}

// BUG-57: Función declarada después de ser usada sin hoisting claro → confusión
initApp();   // llamada aquí — funciona por hoisting pero es mala práctica de legibilidad

// BUG-58: Código comentado en producción → S125 (dead code)
// function oldLogin() {
//   var u = document.getElementById("user").value;
//   var p = document.getElementById("pass").value;
//   if (u === "root" && p === "toor") { window.location = "/admin"; }
// }
