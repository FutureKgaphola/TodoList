import CreateForm from "./createForm";
import AppBar from "./AppBar";
import Appfooter from "./Appfooter";
import { IsValidSession } from "./validateSession";

const Create = () => {
    IsValidSession();
    return ( 
        <div className="Create">
            <div className="container py-5 h-100">
                <div className="row">
                    <div className="col col-lg-12">
                        <div className="card" style={{borderRadius:"1rem"}}>
                            <AppBar/>
                            <div className="container">
                            <CreateForm/>
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