// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import {getAuth} from 'firebase/auth'
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey:process.env.REACT_APP_Api_Key,
//   authDomain:process.env.REACT_APP_Auth_Domain,
//   projectId:process.env.REACT_APP_Project_Id,
//   storageBucket:process.env.REACT_APP_Storage_Bucket,
//   messagingSenderId:process.env.REACT_APP_Messaging_SenderId,
//   appId:process.env.REACT_APP_App_Id,
// };



// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA_utZx_8G9O61x_xus09FAG-Uz6BcQSMQ",
  authDomain: "doctor-portals-2.firebaseapp.com",
  projectId: "doctor-portals-2",
  storageBucket: "doctor-portals-2.appspot.com",
  messagingSenderId: "590752152200",
  appId: "1:590752152200:web:60eec61c9f2b610c64fd3d"
};






// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app)
export default auth 