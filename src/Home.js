import AppBar from "./AppBar";
import Appfooter from "./Appfooter";
import Singletask from "./Singletask";
import { IsValidSession } from "./validateSession";


const Home = () => {
    IsValidSession();
    return ( 
        <div className="Home">
            <div className="container py-5 h-100">
                <div className="row">
                    <div className="col col-lg-12">
                        <div className="card" style={{borderRadius:"1rem"}}>
                            <AppBar/>
                            <div className="container">
                            <Singletask uid={sessionStorage.getItem('uid')}/>
                            </div>
                            <Appfooter/>
                            
                        </div>

                    </div>
                </div>
            </div>
           
        </div>
     );
}
 
export default Home;