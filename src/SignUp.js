import logo from './future_logo.png';
import { Link } from "react-router-dom";
import {sendSignUp} from './SignUpcode';
import { useState } from "react";

const SignUp = () => {
    var [email,setEmail]=useState('');
    var [pass,setpassword]=useState('');
    //var [serverResponse,SetserverResponse]=useState(false);
    
    return ( 

        <section className="vh-100" style={{backgroundColor:"#ffffff"}}>
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col col-xl-10">
              <div className="card" style={{borderRadius:"1rem"}}>
                <div className="row g-0">
                  <div className="col-md-6 col-lg-5 d-none d-md-block">
                    <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/img1.webp"
                      alt="register form" className="img-fluid" style={{borderRadius:"1rem 0 0 1rem"}} />
                  </div>
                  <div className="col-md-6 col-lg-7 d-flex align-items-center">
                    <div className="card-body p-4 p-lg-5 text-black">

                      <form onSubmit={(e)=>{sendSignUp(e,email,pass)}}>

                        <div className="d-flex align-items-center mb-3 pb-1">
                        <img src={logo} alt={'logo'} style={{width:"50px",height:"50px"}}/>
                          <span className="h1 fw-bold mb-0">Task Monitor</span>
                        </div>

                        <h5 className="fw-normal mb-3 pb-3" style={{letterSpacing:"1px"}}>Sign up for an account</h5>

                        <div className="form-outline mb-4">
                          <input
                          onChange={(e)=>{setEmail(e.target.value)}}
                           type="email"
                           required
                            id="form2Example17"
                             className="form-control form-control-lg" />
                          <label className="form-label" htmlFor="form2Example17">Email address</label>
                        </div>
                        

                        <div className="form-outline mb-4">
                          <input
                          onChange={(e)=>{setpassword(e.target.value)}}
                           type="password"
                           required
                            id="form2Example27"
                             className="form-control form-control-lg" />
                          <label className="form-label" htmlFor="form2Example27">Password</label>
                        </div>
                        <p>{pass}</p>

                        <div className="pt-1 mb-4">
                          <button type='submit' className="btn btn-dark btn-lg btn-block" href='/Home'>Signup</button>
                        </div>

                        <Link to={'/'} className="small text-muted">Back to login</Link>

                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
     );
}
 
export default SignUp;