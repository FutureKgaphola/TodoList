import { signInWithEmailAndPassword,getAuth } from "firebase/auth";

export var SignIn=(e,email,pass)=>{
    e.preventDefault();
    const auth=getAuth();
    signInWithEmailAndPassword(auth,email,pass)
    .then((cred)=>{
        sessionStorage.setItem("uid",(cred.user.uid).toString());

        e.target[2].disabled=true;
        e.target[2].innerHTML='congats, welcome';
        setTimeout(() => {
            e.target[2].disabled=false;
            e.target[2].innerHTML="Login";
        }, 5000);

        //console.log("signed in: "+cred.user.uid);
       //window.open('http://localhost:3000/Home','_top');

       window.location.href = '/Home';
       

    }).catch((err)=>{

        e.target[2].disabled=true;
        e.target[2].innerHTML="Something went wrong: "+err.message;
        setTimeout(() => {
            e.target[2].disabled=false;
            e.target[2].innerHTML="Login";
        }, 5000);
        
    });
}