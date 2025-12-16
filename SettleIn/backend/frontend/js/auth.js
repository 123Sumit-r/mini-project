const BASE_URL = "http://localhost:5000/api/auth";

// REGISTER
function register() {
  const data = {
    name: name.value,
    email: email.value,
    password: password.value,
    role: role.value
  };

  fetch(`${BASE_URL}/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data)
  })
  .then(res => res.json())
  .then(() => {
    alert("Registered Successfully");
    window.location.href = "login.html";
  });
}

// LOGIN
function login() {
  const data = {
    email: email.value,
    password: password.value
  };

  fetch(`${BASE_URL}/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data)
  })
  .then(res => res.json())
  .then(user => {
    alert("Login Successful");
    localStorage.setItem("user", JSON.stringify(user));
    window.location.href = "index.html";
  })
  .catch(() => alert("Invalid Credentials"));
}
