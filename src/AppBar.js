import { Link } from "react-router-dom";
import logo from './future_logo.png';
import { signOut,getAuth } from "firebase/auth";
import { useHistory } from "react-router-dom";
const AppBar = () => {
    const history=useHistory();
    var logout=()=>{
        //e.preventDefault();
        const auth=getAuth();
        signOut(auth).then(()=>{
            sessionStorage.setItem("uid",'');
            history.push('/');
        }).catch((err)=>{
            alert(err);
        });
    }
    return ( 
        <div className="AppBar" style={{width:"100%"}}>
            <img src={logo} alt="header logo" style={{objectFit:"contain"}} height={"200px"} width={"100%"}/>
            <nav className=""
             style={{display:"flex",justifyContent:"flex-end",backgroundColor:"whitesmoke",borderTopLeftRadius:"1rem",borderTopRightRadius:"1rem",width:"100%"}}>
                <div>
                    <button style={{margin:"5px"}} className="btn btn-success"><Link style={{color:"white"}} to="/Home">Home</Link></button>
                    <button style={{margin:"5px 10px 5px 5px"}} className="btn btn-success"><Link style={{color:"white"}} to="/Create">Add Task</Link></button>
                    <button onClick={()=>logout()} type="submit" style={{margin:"5px 10px 5px 5px"}} className="btn btn-danger">Log Out</button>
                </div>
                
            </nav>
            
        </div>
     );
}
 
export default AppBar;