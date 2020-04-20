// Firabase Authentication implementation
const Auth = firebase.auth();

// Allows to sign up the user
function register(){
 let email = document.getElementById("email").value;
 let password = document.getElementById("password").value;
 console.log(`${email} and ${password}`);
 Auth.createUserWithEmailAndPassword(email, password).then(() =>{
   alert("User added");
   window.location.replace("signin.html");
 }).catch((error) =>{
   alert(error.message)
 })
};

// Allows to sign in the user
function signIn(){
  let email = document.getElementById("signinEmail").value;
  let password = document.getElementById("signinPassword").value;
  console.log(`${email} and ${password}`);
  Auth.signInWithEmailAndPassword(email, password).then(() =>{
    alert("signin with success");
    window.location.replace("user.html");
  }).catch((error) =>{
    alert(error.message)
  })
 };

//  Allows to get the signed user data from fireabse
 function getUserData(){
   let user = Auth.currentUser;
   console.log("userData", user);
   if(user !== null){
    document.getElementById("userEmail").innerHTML = user.email;
    document.getElementById("userCreatedAt").innerHTML = user.metadata.creationTime;
   }
 }

//  Allows users to signout
 function signOut(){
   Auth.signOut().then(() =>{
     alert("signout with success !");
     window.location.replace("signin.html")
   }).catch(() =>{
     alert(error.message)
   })
 }
