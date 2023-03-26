import {doc,onSnapshot ,updateDoc} from "firebase/firestore";
import {db} from './dbConfig';
import { useEffect, useState } from "react";


const SingleUpdate = (prop) => {
    const [new_data,setTasks]=useState([]);
    const [newTask,setTaskUpdate]=useState('');
    const [ispending,setpending]=useState(false);
    const[noUpdate,setnoUpdate]=useState(false);
    const colRef= doc(db,"Tasks",prop.uid,"children",prop.id);
    
    useEffect(()=>{
    onSnapshot(colRef,(snapshot)=>{
         setTasks(snapshot.data());
        })
    },[colRef]);
    var UpdateAction=(e)=>{
        e.preventDefault();
        setpending(true);
        if(newTask!=='' && newTask!==null)
        {
            updateDoc(colRef,
                {
                    taskMsg:newTask
                }).then(()=>{
                    setpending(false);
                    setnoUpdate(false);
                })
        }else{
            setpending(false);
            setnoUpdate(true);
        }
        
    }
    
    return ( 
        <div className="SingleUpdate">
            {
                <div className="col-lg-12" key={new_data.id}>
                <div className="card" style={{width:"100%",margin:"8px"}}>
                    <div className="card-body">
                        <h5 className="card-title">{new_data.taskname}</h5>
                        <form onSubmit={(e)=>{UpdateAction(e)}} className="form-update">
                            <div className="mb-3">
                                <textarea
                                onChange={(e)=>{setTaskUpdate(e.target.value)}}
                                
                                    className="form-control"
                                    id="exampleFormControlTextarea1"
                                    rows="3"
                                    defaultValue={new_data.taskMsg}>
                                    
                                </textarea>
                            </div>
                            {!ispending && <button
                                type="submit"
                                className="btn btn-success">update
                            </button>}
                            {ispending && <button
                                type="submit"
                                className="btn btn-success">updating task...
                            </button>}
                            {!ispending && noUpdate && <p> No update was made. please edit first</p>}
                            {!ispending && !noUpdate && <p></p>}
                            
                            
                        </form>
                        
                    </div>
                </div>
            </div>
           
        }
        </div>
     );
}
 
export default SingleUpdate;