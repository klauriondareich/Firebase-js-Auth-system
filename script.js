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