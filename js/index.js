

const signupNameInput=document.getElementById("signupName");
const signupEmailInput=document.getElementById("signupEmail");
const signupPasswordInput=document.getElementById("signupPassword");

const AllInput = document.querySelector("#AllInput");
const Message = document.querySelector("#Message");


const SignUpBtn=document.getElementById("SignUpBtn")



let Container = [];

if (localStorage.getItem("userInfo") != null) {
  Container = JSON.parse(localStorage.getItem("userInfo"));
}

function createNewUser() {
  let newUser = {
    name: signupNameInput.value,
    email:signupEmailInput.value,
    password: signupPasswordInput.value,
  };
  Container.push(newUser);
  localStorage.setItem("userInfo", JSON.stringify(Container));
  clear();
  document.location.href = "./signin.html";
}

function clear() {
    signupNameInput.value = "";
    signupEmailInput.value = "";
    signupPasswordInput.value = "";
}

let regex=/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;


signupEmailInput.addEventListener("blur", function () {
  if (regex.test(signupEmailInput.value)) {
    signupEmailInput.classList.remove("is-invalid");
    signupEmailInput.classList.add("is-valid");
    Message.innerHTML = "";
  } else {
    signupEmailInput.classList.add("is-invalid");
    signupEmailInput.classList.remove("is-valid");
    // alert("invalid email type ex:(x@gmail.com)")
    Message.innerHTML ="invalid Email type ex:(x@gmail.com)";
  }
});

let checkresult = null;
SignUpBtn.addEventListener("click", function () {
  if (
    signupNameInput.value == "" ||
    signupEmailInput.value == "" ||
    signupPasswordInput.value == ""
  ) {
    AllInput.innerHTML = "Please  All Inputs Requrid";
  } else if (Container.length == 0 && regex.test(signupEmailInput.value)) {
    createNewUser();
  } else if (Container.length > 0) {
    for (let i = 0; i < Container.length; i++) {
      if (signupEmailInput.value == Container[i].email) {
        AllInput.innerHTML = "This Email Already  Use";
        checkresult = 1;
        clear();
      }
    }
  }
  if (
    checkresult != 1 &&
    signupNameInput.value != "" &&
    signupEmailInput.value != "" &&
    signupPasswordInput.value != "" &&
    regex.test(signupEmailInput.value)==true
  ) {
    createNewUser();
  }
});

// ---------------------------------end signup--------------------------

