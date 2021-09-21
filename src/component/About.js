import React from "react";
import Image from "../image/DSC_0814.JPG"
const About = () => {
    return (
        <>
            <div className="container" >
                <form method="">
                    <div className="rows_s">
                        <div className="image">
                            <img id="image" src={Image} alt="Image" />
                        </div>

                        <div className="">
                            <div className="profile-head">
                                <h3>Deepak Kusheaha</h3>
                                <h4>Shopkeeper</h4>
                                <p> ID-sufek23897</p>
                                <span>____________</span>

                                <ul className="nav nav-tab" id="nave_s">
                                    <li className="nav_item">
                                        <a className="nav-link active" id="home-tab" href="#home" data-toggle="tab" role="tab"><u>About</u></a>
                                    </li>
                                    
                                    <li className="nav_item">
                                    <a className="nav-link active" id="profile-tab" href="profile" data-toggle="tab" role="tab"><u>Timeline</u></a>
                                    </li>
                                </ul>
                                
                            </div>
                        </div>

                    </div>
                </form>
            </div>
        </>
    )
}


export default About;