
function login(event) {
    event.preventDefault();
    console.log("reached here!");
    // debugger;
    const emailEl = document.querySelector("#email");
    const passwordEl = document.querySelector("#password");
    localStorage.setItem("email", emailEl.value);
    localStorage.setItem("password", passwordEl.value);
    window.location.href = "index.html";
  }
const form = document.getElementById("form");
form.addEventListener("submit", login);