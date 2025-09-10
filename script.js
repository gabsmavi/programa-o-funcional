// Código Fonte em Javascript
// Usuários são criados e armazenados no lolcalStorage do navegador.
// by: Gabriel Viana

function getUsers() {
  return JSON.parse(localStorage.getItem("users")) || [];
}

function saveUsers(users) {
  localStorage.setItem("users", JSON.stringify(users));
}

function registerUser(name, email, password) {
  const users = getUsers();

    // Função de alta ordem: "some" 
    // Função lambda: "u => u.email === email" 

  if (users.some(u => u.email === email)) {
    alert("E-mail já registrado!");
    return false;
  }
  users.push({ name, email, password });
  saveUsers(users);
  alert("Usuário registrado com sucesso!");
  return true;
}

function loginUser(email, password) {
  const users = getUsers();

  // Função de alta ordem

  const user = users.find(u => u.email === email && u.password === password);
  if (user) {
    localStorage.setItem("loggedUser", JSON.stringify(user));
    return true;
  }
  return false;
}

function getLoggedUser() {
  return JSON.parse(localStorage.getItem("loggedUser"));
}

function logoutUser() {
  localStorage.removeItem("loggedUser");
  window.location.href = "login.html";
}

// Função Closure

function createIdGenerator() {
  let currentId = 1;
  return function () {
    return currentId++; 
  };
}
const generateId = createIdGenerator();

// List comprehension (map)

function getAllEmails() {
  const users = getUsers();
  return users.map(u => u.email); 
}