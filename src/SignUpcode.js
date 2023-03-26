import {doc,setDoc } from "firebase/firestore";
import {db} from './dbConfig';
import {createUserWithEmailAndPassword,signOut, getAuth}from "firebase/auth";
var sendSignUp=(e,email,pass)=>{
    e.preventDefault();
    const auth =getAuth();
    e.target[2].innerHTML="signing up...";
    createUserWithEmailAndPassword(auth,email,pass)
    .then(async(cred)=>{

        const ref = doc(db, "users",cred.user.uid);
        var data={
            username:email,
            keyauth:cred.user.uid
        }
        await setDoc(ref,data).then(()=>{
            e.target.reset();
            e.target[2].innerHTML="congats, you have been added.";
            e.target[2].disabled=true;
            signOut(auth).catch((err)=>{alert(err.message)});
            setTimeout(() => {
                e.target[2].disabled=false;
                e.target[2].innerHTML="Signup";
            }, 3000);
            
        })

    }).catch((error)=>{
        e.target[2].disabled=true;
        e.target[2].innerHTML='Hold on, something went wrong: '+error.message;
        setTimeout(() => {
            e.target[2].disabled=false;
            e.target[2].innerHTML="Signup";
        }, 5000);
    })

}

export {sendSignUp}