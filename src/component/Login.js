import React from 'react';
import { NavLink } from 'react-router-dom';
import Ragistration from "../image/unnamed.png";


const Login = () => {
    return (
        <>
            <section className="signin">
                <div className="container mt-5">
                    <div className="signin-contant">
                        <h1 className="form-title">Log In</h1>
                        <div className="signin-form">
                            <div className="signin-image ">

                                <figure>
                                    <img  src={Ragistration} alt="resistration image" />
                                </figure>
                            </div>

                            <form className="resister-form" id="resister form">

                               

                                <div className="form-group">
                                    <label htmlFor="email">
                                        <i class="zmdi zmdi-email material-icons-name zmdi-hc-2x"></i>
                                    </label>
                                    <input className="input" type="email" name="email" id="email" autoCapitalize="off" placeholder="Your Email" />
                                </div>  

                                <div className="form-group">
                                    <label htmlFor="passsword">
                                        <i class="zmdi zmdi-lock material-icons-name zmdi-hc-2x"></i>
                                    </label>
                                    <input className="input" type="password" name="passsword" id="passsword" autoCapitalize="off" placeholder="your Password" />
                                </div>

                                

                                <div className="form-group button">
                                    <input type="submit" name="signup" id="signup" className="form-submit" value="Login" />

                                </div>
                                <NavLink to="/Signup" className="logim-image-link" > Create an account</NavLink>

                            </form>


                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}


export default Login;