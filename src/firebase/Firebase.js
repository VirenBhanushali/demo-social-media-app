import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyAlPLoKE3UtWjgLJwbh9gSVHZv09g4Fcoc",
  authDomain: "socio-app-e242a.firebaseapp.com",
  databaseURL: "https://socio-app-e242a-default-rtdb.firebaseio.com",
  projectId: "socio-app-e242a",
  storageBucket: "socio-app-e242a.appspot.com",
  messagingSenderId: "228348567599",
  appId: "1:228348567599:web:c3a6f32830aadbbaace6da",
  measurementId: "G-ZHYS0DHB5S",
};
firebase.initializeApp(firebaseConfig);
var storage = firebase.storage();
export default storage;
