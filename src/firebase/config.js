import firebase from "firebase/compat/app";
import "firebase/compat/storage";
import "firebase/compat/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDjtlylm_Spu1aPq8jEXffNmdA6v2fFrBU",
  authDomain: "fakegram-448b2.firebaseapp.com",
  projectId: "fakegram-448b2",
  storageBucket: "fakegram-448b2.appspot.com",
  messagingSenderId: "786720379594",
  appId: "1:786720379594:web:d61bc3ee0321a4a155da33",
};

// Initialize
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };
