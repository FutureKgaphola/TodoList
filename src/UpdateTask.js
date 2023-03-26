//import CreateForm from "./createForm";
import AppBar from "./AppBar";
import Appfooter from "./Appfooter";
import { useParams } from "react-router-dom";
import SingleUpdate from "./SingleUpdate";
import { IsValidSession } from "./validateSession";
import { IsValiduser } from "./validUser";

const Create = () => {
    IsValidSession();
    const {id}=useParams();
    const {uid}=useParams();
    IsValiduser({uid});
    return ( 
        <div className="Create">
            
            <div className="container py-5 h-100">
                <div className="row">
                    <div className="col col-lg-12">
                        <div className="card" style={{borderRadius:"1rem"}}>
                            <AppBar/>
                            <div className="container">
                                <SingleUpdate id={id} uid={uid}/>
                            </div>
                            <Appfooter/>
                            
                        </div>

                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Create;