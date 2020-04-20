// Firabase Authentication implementation
const Auth = firebase.auth();

// Allows to sign up the user
function register(){
 let email = document.getElementById("email").value;
 let password = document.getElementById("password").value;
 console.log(`${email} and ${password}`);
 Auth.createUserWithEmailAndPassword(email, password).then(() =>{
   alert("User added")
 }).catch((error) =>{
   console.error(error.message)
 })
};

// Allows to sign in the user
function signIn(){
  let email = document.getElementById("signinEmail").value;
  let password = document.getElementById("signinPassword").value;
  console.log(`${email} and ${password}`);
  Auth.signInWithEmailAndPassword(email, password).then(() =>{
    alert("signin with success")
  }).catch((error) =>{
    console.error(error.message)
  })
 };
