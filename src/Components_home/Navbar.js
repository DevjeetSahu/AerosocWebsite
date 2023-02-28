import React from 'react';


const Navbar = () => {
    return(
        <div className="navbar">
            <div className="logo">
                <div className="logo_img">
                </div>
                <div className="logo_text">
                    <h3>Aero_Soc</h3>
                    <p>IIT KHARAGPUR</p>
                </div>
            </div>
            <div>
                <button className="home_navbar">
                    <a href="/Home">Home</a>
                </button>
            </div>
            <div>
                <button className="office_bearers_navbar">
                    <a href="/Office Bearers">Office Bearers</a>
                </button>
            </div>
            <div>
                <button className="Alumni_navbar">
                    <a href="/Alumni">
                        Alumni
                    </a>
                </button>
            </div>
            <div>
                <button className="Alumni_Chat_navbar">
                    <a href="/Chat with Alumni">Chat With Alumni</a>
                </button>
            </div>
            <div>
                <button className="Sign-In">
                    <a href="/Sign-In">Sign-In</a>
                </button>
            </div>
            <div className="Search_Nav">
                <input type="text" placeholder="Search" className="w-20 form-control"/>
            </div>
        </div>
    );  
}
export default Navbar;