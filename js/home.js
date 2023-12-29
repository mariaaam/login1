const logOutBtn = document.querySelector('#logOutBtn')
const welcome = document.querySelector('#welcome') 

let loginUser=[];

loginUser=JSON.parse(localStorage.getItem('login')) 

welcome.innerHTML = loginUser[0]

logOutBtn.addEventListener('click',function(){
    localStorage.removeItem('login') 
    document.location.href = "./signin.html";
})