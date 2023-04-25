import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAqfUFZ8jNYg51OhI_NHkyij6G-sOVaGq8",
  authDomain: "reactsotre.firebaseapp.com",
  projectId: "reactsotre",
  storageBucket: "reactsotre.appspot.com",
  messagingSenderId: "426028672468",
  appId: "1:426028672468:web:da29e407e60f2dfcc52241",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
