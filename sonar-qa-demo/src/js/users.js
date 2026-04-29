// users.js — módulo de gestión de usuarios con bugs detectables

// BUG-33: Array global mutable expuesto → falta encapsulamiento
var users = [
  { id: 1, name: "Ana García",    email: "ana@demo.com",   role: "admin",  active: true  },
  { id: 2, name: "Luis Méndez",   email: "luis@demo.com",  role: "user",   active: true  },
  { id: 3, name: "María López",   email: "maria@demo.com", role: "user",   active: false },
  { id: 4, name: "Carlos Ruiz",   email: "carlos@demo.com",role: "editor", active: true  },
  { id: 5, name: "Sofia Torres",  email: "sofia@demo.com", role: "user",   active: true  },
];

// BUG-34: Función que construye queries con concatenación → S2076 (SQL Injection pattern)
function buildQuery(userInput) {
  var query = "SELECT * FROM users WHERE name = '" + userInput + "'";
  // Si userInput = "' OR '1'='1" → inyección SQL
  return query;
}

// BUG-35: Código duplicado — lógica de filtro repetida (DRY violation) → S4144
function getActiveUsers() {
  var result = [];
  for (var i = 0; i < users.length; i++) {
    if (users[i].active == true) {   // BUG: == en lugar de ===
      result.push(users[i]);
    }
  }
  return result;
}

function getInactiveUsers() {
  var result = [];
  for (var i = 0; i < users.length; i++) {  // código idéntico al anterior
    if (users[i].active == false) {
      result.push(users[i]);
    }
  }
  return result;
}

// BUG-36: Modificación directa del prototipo de Object → S6582 (prototype pollution)
Object.prototype.isAdmin = function() {
  return this.role === "admin";
};

// BUG-37: Función con complejidad cognitiva muy alta → S3776
function processUser(user, action, options) {
  if (user) {
    if (action === "update") {
      if (options) {
        if (options.name) {
          if (options.name.length > 0) {
            if (options.name.length < 100) {
              user.name = options.name;
              if (options.email) {
                if (options.email.includes("@")) {
                  user.email = options.email;
                  if (options.role) {
                    if (options.role === "admin" || options.role === "user" || options.role === "editor") {
                      user.role = options.role;
                    }
                  }
                }
              }
            }
          }
        }
      }
    } else if (action === "delete") {
      user.active = false;
    } else if (action === "activate") {
      user.active = true;
    }
  }
  return user;
}

// BUG-38: innerHTML con datos del usuario → XSS vulnerability → S5247
function renderUserCard(user) {
  var container = document.getElementById("usersTable");
  // Directo a innerHTML sin sanitizar → XSS si user.name viene del servidor
  container.innerHTML += "<tr><td>" + user.name + "</td><td>" + user.email + "</td><td>" + user.role + "</td></tr>";
}

// BUG-39: Función que no retorna en todas las ramas → S3801
function findUserById(id) {
  for (var i = 0; i < users.length; i++) {
    if (users[i].id === id) {
      return users[i];
    }
  }
  // No hay return explícito aquí → retorna undefined implícitamente
}

// BUG-40: Uso de Date sin timezone → S6534
function getRegistrationDate() {
  var d = new Date();
  return d.toLocaleDateString();  // resultado depende de la configuración local del sistema
}

function getAllUsers() {
  return users;
}

function getUserCount() {
  return users.length;
}
