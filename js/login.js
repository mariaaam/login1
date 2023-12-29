const loginEmailInput =document.getElementById("loginEmail");
const loginPasswordInput=document.getElementById("loginPassword");
// console.log(loginEmailInput , loginPasswordInput);
const AllInput = document.querySelector("#AllInput");
const Message =document.getElementById("Message");
const LoginBtn = document.querySelector("#LoginBtn");

// console.log(Message)

      //  -------------localStorage---------------

let Container = [];
 let loginedUser = []; 
 if (localStorage.getItem("userInfo") != null) {
  Container = JSON.parse(localStorage.getItem("userInfo"));
}


let regex=/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;


loginEmailInput.addEventListener("blur", function () {
  if (regex.test(loginEmailInput.value)) {
    loginEmailInput.classList.remove("is-invalid");
    loginEmailInput.classList.add("is-valid");
    Message.innerHTML = "";
    
  } else {
    loginEmailInput.classList.add("is-invalid");
    loginEmailInput.classList.remove("is-valid");
    Message.innerHTML="Please Enter Valid Email ex:(x***@gmail.com )";
    // alert("Please Enter Valid Email ex:(x***@gmail.com )")
  }
});

let valid = 0;
LoginBtn.addEventListener("click", function () {
  if (loginEmailInput.value == "" || loginPasswordInput.value == "") {
    AllInput.innerHTML = "All Inputs Required";
  } else if (loginEmailInput.value != "" || loginPasswordInput.value != "") {
    for (let i = 0; i < Container.length; i++) {
      if (
        loginEmailInput.value == Container[i].email &&
        loginPasswordInput.value == Container[i].password &&
        regex.test(loginEmailInput.value) == true
      ) {
        document.location.href = "./home.html";
        loginedUser.push(Container[i].name);
        localStorage.setItem("login", JSON.stringify(loginedUser)); 
        valid = 1;
        clear();
      }
    }
  }
  if (valid == 0 && loginEmailInput.value != "" && loginPasswordInput.value != "") {
    Message.innerHTML = " Email or password invalid";
  }
});

function clear() {
  loginEmailInput.value = "";
  loginPasswordInput.value = "";
}