// Firabase Authentication implementation
const Auth = firebase.auth();

function signIn(){
 let email = document.getElementById("email").value;
 let password = document.getElementById("password").value;
 Auth.createUserWithEmailAndPassword(email, password).then(() =>{
   console.log("succes ! user added")
 }).catch(() =>{
   console.error("error ! user has not been added")
 })
};
