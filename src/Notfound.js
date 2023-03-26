import { Link } from "react-router-dom";

const Notfound = () => {
    return ( 
        <div className="Notfound" style={{margin:"20px"}}>
            Page not found...<br></br>
            <Link to={'/Home'} className="btn btn-success">back Home</Link>
        </div>
     );
}
 
export default Notfound;