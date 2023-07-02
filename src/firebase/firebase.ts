import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
	apiKey: "AIzaSyCQW5L9SV5sdohQ6azKPqkrqnCgGE2GIGg",
	authDomain: "letmecode-f3d65.firebaseapp.com",
	projectId: "letmecode-f3d65",
	storageBucket: "letmecode-f3d65.appspot.com",
	messagingSenderId: "1081466464798",
	appId: "1:1081466464798:web:5a4ab0d9490bdc63dadc0f"
  };

const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

const auth = getAuth(app);
const firestore = getFirestore(app);

export { auth, firestore, app };
