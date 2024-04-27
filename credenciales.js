// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD57hWGzQsg_AFWfRlWhXRgSWnvaoECQVM",
  authDomain: "fir-project-d4326.firebaseapp.com",
  projectId: "fir-project-d4326",
  storageBucket: "fir-project-d4326.appspot.com",
  messagingSenderId: "954129278597",
  appId: "1:954129278597:web:4f588ffd97eea7904debec",
  measurementId: "G-8G35TJTYNR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;