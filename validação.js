const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");

form.addEventListener("submit", (e) => {
let enviarForm = false;

    if(username.value) {
        console.log("aba de usúrio está vazia");
        enviarForm = false;
        
    }
    else{
        alert("preencha o usuario");
    }
    if (password.value){
        console.log("a aba de senha está vazia");
        enviarForm = false
       
    }
    else{
        alert("digite sua senha")
    }
    if (email.value){
    console.log("preencha seu e-mail");
    enviarForm = false
    }
    else{
        alert("digite seu e-mail completo")
    }
    e.preventDefault();
});

