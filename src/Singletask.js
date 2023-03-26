
import { collection, onSnapshot,deleteDoc,doc } from "firebase/firestore";
import { useState } from "react";
import {db} from './dbConfig';
import { Link } from "react-router-dom";
import logo from './future_logo.png';

const Singletask = (prop) => {
    
    const [new_data,setTasks]=useState([]);

    var colRef= collection(db,"Tasks",prop.uid,"children");
    onSnapshot(colRef,(snapshot)=>{
        setTasks(
        snapshot?.docs.map((doc)=>
        (
            {
                id:doc.id,
                ...doc.data()
            }))
        )
    })
    const deleDocument=(e,doc_id)=>
    {
        e.preventDefault();
        const docRef= doc(db,"Tasks",prop.uid,"children",doc_id);
        deleteDoc(docRef).then(()=>{
            alert("Deleted a document");
        }).catch((error)=>{
            alert(error);
        })
    }

    const trimText=(msg)=>{
        var ms='no message to read here';
        if(msg.length>25)
        {
            ms=msg.substring(0,25)+"...";
        }
        return ms;

    };
    
    return ( 
        <div className="row Singletask">
        {
            new_data?.map((task)=>(
                
                <div className="col-lg-3" key={task.id}>
                <div className="card" style={{width:"100%",margin:"8px"}}>
                    <img src={logo} style={{objectFit:"cover"}} width={"50px"} height={"50px"} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <Link style={{color:"gray"}} to={`/manage/${task.id}/${prop.uid}`}><h5 className="card-title">{task.taskname}</h5></Link>
                        <p className="card-text">{trimText(task.taskMsg)}</p>
                        <form onSubmit={(e)=>{deleDocument(e,task.id)}}>
                        <button type="submit" className="btn btn-danger">Delete</button>
                        </form>
                        
                    </div>
                </div>
            </div>
            ))
        }

        </div>
     );
}
 
export default Singletask;