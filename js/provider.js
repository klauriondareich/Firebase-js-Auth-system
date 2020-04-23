// Connect with you gmail account
function googleSignInProvider(){
  let provider = new firebase.auth.GoogleAuthProvider();
  provider.addScope('profile');
  provider.addScope('email');
  firebase.auth().signInWithPopup(provider)
  .then(() =>{
    alert("user succesfully authenticated");
    window.location.replace("user.html");
  }).catch((error) =>{
    alert(error.message)
  })
};

// Connect with your facebook account
function facebookSignInProvider(){
  let provider = new firebase.auth.FacebookAuthProvider();
  firebase.auth().signInWithPopup(provider)
  .then(() =>{
    alert("user succesfully authenticated");
     window.location.replace("user.html");
  }).catch((error) =>{
    alert(error.message)
  })
};