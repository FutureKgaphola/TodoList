import { Link } from "react-router-dom";
import logo from './future_logo.png';
import { SignIn } from "./loginCode";
import { useState } from "react";
import { useHistory } from "react-router-dom";

const Login = () => {
    var [email,setEmail]=useState('');
    var [pass,setpassword]=useState('');
    const history=useHistory();
    if (sessionStorage.getItem('uid')!=='') {
      history.push('/Home');
    }
    return ( 

        <section className="vh-100" style={{backgroundColor:"#ffffff"}}>
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col col-xl-10">
              <div className="card" style={{borderRadius:"1rem"}}>
                <div className="row g-0">
                  <div className="col-md-6 col-lg-5 d-none d-md-block">
                    <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/img1.webp"
                      alt="login form" className="img-fluid" style={{borderRadius:"1rem 0 0 1rem",height:"100%"}} />
                  </div>
                  <div className="col-md-6 col-lg-7 d-flex align-items-center">
                    <div className="card-body p-4 p-lg-5 text-black">

                      <form onSubmit={(e)=>{SignIn(e,email,pass)}}>

                        <div className="d-flex align-items-center mb-3 pb-1">
                          
                          <img src={logo} alt={'logo'} style={{width:"50px",height:"50px"}}/>
                          <span className="h1 fw-bold mb-0">Task Monitor</span>
                        </div>

                        <h5 className="fw-normal mb-3 pb-3" style={{letterSpacing:"1px"}}>Sign into your account</h5>

                        <div className="form-outline mb-4">
                          <input 
                          onChange={(e)=>{setEmail(e.target.value)}}
                           type="email"
                           required
                           id="form2Example17" className="form-control form-control-lg" />
                          <label className="form-label" htmlFor="form2Example17">Email address</label>
                        </div>
                        
                        <div className="form-outline mb-4">
                          <input
                           onChange={(e)=>{setpassword(e.target.value)}}
                           type="password"
                           required
                           id="form2Example27" className="form-control form-control-lg" />
                          <label className="form-label" htmlFor="form2Example27">Password</label>
                        </div>
                        
                        <div className="pt-1 mb-4">
                          <button type="submit" className="btn btn-dark btn-lg btn-block">Login</button>
                        </div>

                        <Link className="small text-muted" to={'/Forgotpassword'}>Forgot password?</Link>
                        <p className="mb-5 pb-lg-2" style={{color:"#393f81"}}>Don't have an account? <Link to={'/SignUp'}
                            style={{color:"#393f81"}}>Register here</Link></p>
                        
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
 
export default Login;