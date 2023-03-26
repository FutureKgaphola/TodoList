import { useState } from "react";
import { collection,addDoc } from "firebase/firestore";
import {db} from './dbConfig';
import { useHistory } from "react-router-dom";

const CreateForm = () => {
    const history=useHistory();
    const [title,setTitle]=useState('');
    const [body,setBody]=useState('');
    const [ispending,setpending]=useState(false);
    var submitaction=async(e)=>{
        e.preventDefault();

        var colRef= collection(db,"Tasks",sessionStorage.getItem('uid'),"children");
        setpending(true);
        await addDoc(colRef,{
            taskname:title,
            taskMsg:body
        }).then(()=>{
            document.getElementById('addform').reset();
            history.push('/Home');
        }).catch((err)=>{
            document.getElementById('addform').reset();
            console.log(err.message);
        })
    }
    return ( 
        <div className="CreateForm">
            <form id="addform" onSubmit={(e)=>{submitaction(e)}}>
                <div className="mb-3">
                    <h3>Create Task</h3>
                    <label>Task Name</label>
                    <input
                    onChange={(e)=>{setTitle(e.target.value)}}
                       type="text"
                       required
                       className="form-control"
                       id="exampleInputEmail1"
                       aria-describedby="emailHelp"/>
                    <div id="emailHelp" className="form-text"></div>
                </div>

                <div className="mb-3">
                    <label className="form-label">Task Descrption</label>
                    <textarea
                    onChange={(e)=>{setBody(e.target.value)}}
                        className="form-control"
                        required
                        id="exampleFormControlTextarea1"
                        rows="3"></textarea>
                </div>
                {!ispending && <button
                     type="submit"
                     className="btn btn-success">Add task
                </button>}
                {ispending && <button
                     type="submit"
                     className="btn btn-success">Adding task...
                </button>}

            </form>
        </div>
     );
}
 
export default CreateForm;