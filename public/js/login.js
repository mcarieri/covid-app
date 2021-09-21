const loginFormHandler = async function(event) {
  event.preventDefault();

  const usernameEl = document.querySelector("#username-login");
  const passwordEl = document.querySelector("#password-login");

  fetch("/api/users", {
    method: "post",
    body: JSON.stringify({
      username: usernameEl.value,
      password: passwordEl.value
    }),
    headers: { "Content-Type": "application/json" }
  })
    .then(function() {
      console.log('LOGIN ROUTE');
      document.location.replace("/dashboard");
    })
    .catch(err => console.log(err));
};

document
  .querySelector("#login-form")
  .addEventListener("click", loginFormHandler);
console.log('Login JS file loaded')