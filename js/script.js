// Cloud Firestore initialization
const db = firebase.firestore();
const modelRef = db.collection("settings");

modelRef.doc("set1").set({
  configName: "Parametre 1",
  configType: "Medium",
  state: true,
});

modelRef.doc("set2").set({
  configName: "Paramètre 2",
  configType: "Small",
  state: false,
});

modelRef.doc("set3").set({
  configName: "Paramètre 3",
  configType: "Large",
  state: true,
});

// Cloud Storage Initialization

let Storage = firebase.storage().ref();
let metadata = {
  ContentLanguage : "fr",
  contentType: "image/jpeg"
}

// Allows to store images in the firebase storage
function storeImage(){
  let file = document.getElementById("upload-avatar").files[0];
  Storage.child("avatar/" + file.name).put(file, metadata)
  .then(() =>{
    alert("file uploaded");
    getStoredImage(file.name)
  }).catch((error) =>{
    alert(error.message)
  })
}

// Allows getting images from firebase storage
function getStoredImage(url){
  Storage.child("avatar/" + url).getDownloadURL().then((url) =>{
    document.getElementById("avatar").src = url
  })
}