const eye = document.querySelector(".eye");
let passwordInput = document.querySelectorAll(".user")[1];
eye.addEventListener("click", function () {
  eye.classList.toggle("fa-eye-slash");
  passwordInput.type = passwordInput.type === "password" ? "text" : "password";
  passwordInput.focus();
});


const userInput = document.querySelector(".username-input");
const passInput = document.querySelector(".password-input");

const usernameMsg = document.querySelector(".username-msg");
const passwordMsg = document.querySelector(".password-msg");
const statusMsg = document.querySelector(".signin-status");

const submitBtn = document.querySelector(".submit");

submitBtn.addEventListener("click", signIn);
function signIn(e) {
  e.preventDefault();

  const usernameValue = userInput.value;
  const passwordValue = passInput.value;
  let ifSendData = true;

  usernameMsg.innerHTML = "";
  passwordMsg.innerHTML = "";

  if (
    usernameValue.length === 0 ||
    usernameValue.indexOf("@") === -1 ||
    usernameValue.indexOf(".") === -1
  ) {
    ifSendData = false;
    usernameMsg.style.color = "#ff0000";
    usernameMsg.innerHTML = "Please inter a valid Email";
  }

  if (passwordValue.length === 0) {
    ifSendData = false;
    passwordMsg.style.color = "#ff0000";
    passwordMsg.innerHTML = "Please inter your password";
  } else if (passwordValue.length <= 4) {
    ifSendData = false;
    passwordMsg.style.color = "#ff0000";
    passwordMsg.innerHTML = "Your password is too short";
  }

  if (ifSendData) {
    const body = JSON.stringify({
      username: usernameValue,
      password: passwordValue,
    });

    const headers = {
      "Content-Type": "application/json",
    };

    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "post",
      body: body,
      headers: headers,
    }).then((response) => {
      if (response.ok) {
        statusMsg.style.color = "#00ff00";
        statusMsg.innerHTML = "You signed in successfully";
      }
    });
  }
}