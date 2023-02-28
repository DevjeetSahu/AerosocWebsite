import React from "react";

import "./SignIn.css";

const SignIn = () => {
    return ( 
    <div className="SignIn_body">
        <div className="SignIn_text">
                <div className="header_SignIn">
                    <h2 > Aerospace Society</h2>
                    <h2>IIT Kharagpur</h2>
                    <h2>SignIn</h2>
                </div>
                <div className="SignInInfo">
                    <button className="emailid">
                        <input type="email" placeholder="Institute Email-Id"/>
                    </button>
                    <button className="password">
                        <input type="text" placeholder="password"/>
                    </button>
                    <button className="SignIn_button">
                        <a href="SignIn_response">SignIn</a>
                    </button>
                </div>
        </div>
            <div className="SignIn_Pictures">
            <div className="Pic1">
                <img src="https://drive.google.com/file/d/1kGS5ta6E6mdLJ0sAVLrWSF7fvFcsUAIC/view?usp=sharing" alt="pic1"  />
            </div>

            <div className="Pic2">
                <img src="https://drive.google.com/file/d/1vn9FUae-Bu1AFOden2U6Xs603t9KhPOq/view?usp=share_link" alt="pic2"  />
            </div>
            <div className="Pic3">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/STS120LaunchHiRes-edit1.jpg/1200px-STS120LaunchHiRes-edit1.jpg" alt="pic3"  />
            </div>
            <div className="Pic4">
                <img src="https://drive.google.com/file/d/1q7Tl7gO7NnFJi90sOZG4XH0tnAVuUtHt/view?usp=share_link" alt="pic4"  />
            </div>
 
        </div>
    </div>
        

     );
}
 
export default SignIn;