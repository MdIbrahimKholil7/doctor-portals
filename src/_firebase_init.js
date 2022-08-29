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
  apiKey: "AIzaSyAKDe18_ArUtW5693xRgpLgtL1oy6NCKhM",
  authDomain: "doctor-portals-3.firebaseapp.com",
  projectId: "doctor-portals-3",
  storageBucket: "doctor-portals-3.appspot.com",
  messagingSenderId: "1062678018147",
  appId: "1:1062678018147:web:4c659e982c906b76bc6056"
};




// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app)
export default auth 