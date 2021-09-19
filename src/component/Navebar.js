import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookSquare, FaInstagramSquare, FaYoutubeSquare} from "react-icons/fa";
import {GiHamburgerMenu } from "react-icons/gi" ;


const Navebar = () => {
    const[showMediaIcons, setShowMediaIcons] = useState(false);
    return (
        <>
           
            <nav className="main-nav">
                <div className="logo">
                    <h2>
                        MERN STACK
                    </h2>
                </div>
                <div className =   {showMediaIcons ? "menu-link mobile-menu-link":"menu-link"}>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>

                        <li>
                            
                        <Link to="/About">About</Link>
                        </li>

                        <li>
                        <Link to="/Contact">Contact</Link>
                        
                        </li>

                        <li>
                        <Link to="/Login">Log In</Link>
                        </li>

                        <li>
                        <Link to="/SignUp">SignUp</Link>
                        </li>
                    </ul>

                </div>
                <div className="social-media">
                    <ul className="social-media-desktop">
                        <li>
                            <a href="https://www.youtube.com/playlist?list=PLO0rvmCm1cKLvAMZiKzOwUU6_DsFwvF3e" target="RK" ><FaFacebookSquare className="facebook"/></a>
                                
                            
                        </li>

                        <li>
                            <a href="https://www.youtube.com/playlist?list=PLO0rvmCm1cKLvAMZiKzOwUU6_DsFwvF3e" target="RK" ><FaInstagramSquare className="instagram"/></a>
                                
                            
                        </li>

                        <li>
                            <a href="https://www.youtube.com/playlist?list=PLO0rvmCm1cKLvAMZiKzOwUU6_DsFwvF3e" target="RK" ><FaYoutubeSquare className="youtube"/></a>
                                
                            
                        </li>

                    </ul>
                    <div className="hamburger-menu">
                        <a href="#" onClick={()=>setShowMediaIcons(!showMediaIcons)}><GiHamburgerMenu/></a>
                    </div>

                </div>

            </nav>

            {/* <section className="hero-seection">
                <p>Welcom to</p>
                <h3>Rk</h3>
            </section> */}
        </>
    )
}


export default Navebar;