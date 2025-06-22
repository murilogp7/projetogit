let. form = document.getElementById("form")
let.  username = document.getElementById("username")
let. email = document.getElementById("email")
let.  password = document.getElementById("password")

form.addEventlistener("submit",(e) => {
   if(username.value) {
    console.log("aba preenchida");
   }
   else {
    console.log("aba vazia");
   }

    e.preventDefault();


} )
