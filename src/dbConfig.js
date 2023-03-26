// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import {initializeApp} from 'firebase/app'
import {getFirestore} from 'firebase/firestore'
const firebaseConfig = {
    apiKey: "AIzaSyBX6BrGbf_q9ajNBeCQeecZEnC7zqRtw1E",
    authDomain: "todolistf9.firebaseapp.com",
    projectId: "todolistf9",
    storageBucket: "todolistf9.appspot.com",
    messagingSenderId: "684955539000",
    appId: "1:684955539000:web:cb0cf08cac51c6f51c38cd",
    measurementId: "G-DCWNP78F6X"
  };
  const app= initializeApp(firebaseConfig);
  export const db=getFirestore(app);



