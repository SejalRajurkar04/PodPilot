// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA20l_mUuvpCoy-oRtGA23mAOCRFQdMjpI",
  authDomain: "poddata-a4c9d.firebaseapp.com",
  projectId: "poddata-a4c9d",
  storageBucket: "poddata-a4c9d.firebasestorage.app",
  messagingSenderId: "796478921620",
  appId: "1:796478921620:web:766551a2d61f2c30550d81",
  measurementId: "G-76CV7MYJ5K"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Export the app as the default export and analytics as a named export
export default app;
export { analytics };
