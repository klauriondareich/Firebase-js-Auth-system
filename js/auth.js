// Firebase Authentication implementation
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

  // Set user session persistance 
  firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL)
  .then((result) =>{
    Auth.signInWithEmailAndPassword(email, password).then(() =>{
      alert("signin with success");
      window.location.replace("user.html");
    }).catch((error) =>{
      alert(error.message);
    })
  })
 };

//  Allows to get the signed user data from firebase
 function getUserData(){
   let user = Auth.currentUser;
   console.log("userData", user);
   if(user !== null){
    document.getElementById("userName").innerHTML = user.displayName;
    if(user.displayName === null){
      document.getElementById("userName").innerHTML = "Unknown User";
    };
    document.getElementById("userEmail").innerHTML = user.email;
    document.getElementById("userCreatedAt").innerHTML = user.metadata.creationTime;
   }
 };

//  Allows users to signout
 function signOut(){
   Auth.signOut().then(() =>{
     alert("signout with success !");
     window.location.replace("signin.html")
   }).catch((error) =>{
     alert(error.message)
   })
 };

//  Edit user infos
function editUserInfos(){
  let user = Auth.currentUser;
  if(user !== null){
    let userName = document.getElementById("editUserName").value;
    let userEmail = document.getElementById("editUserEmail").value;
    let userPassword = document.getElementById("editUserPassword").value;
    console.log(`${userName} and ${userEmail} password : ${userPassword}`);
    // Edit user profile
    if(userName !== ""){
      user.updateProfile({
        displayName: userName
      }).then(() =>{
        alert("userName updated")
      }).catch((error) =>{
        alert(error.message)
      });
    }
    // Edit email
    if(userEmail !== ""){
      user.updateEmail(userEmail)
      .then(() =>{
        alert("email updated")
      }).catch((error) =>{
        alert(error.message)
      });
    }
    // Edit password
    if(userPassword !== ""){
      user.updatePassword(userPassword)
      .then(() =>{
        alert("password updated")
      }).catch((error) =>{
        alert(error.message)
      });
    }
    window.location.replace("user.html");
  }
  else{
    alert("no user existing")
  }
}

// Check the user Authentication by sending a verification email
function verifyUser(){
  let user = Auth.currentUser;
  user.sendEmailVerification().then(() =>{
    alert("Verification email has been sent")
  }).catch(() =>{
    alert("Verification Email not sent")
  })
};
