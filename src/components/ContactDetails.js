import React from "react";
import user from "../images/user12.webp"
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const ContactDetails = (props) => {
    const { state } = useLocation();

    const { name, email } = state

    return (
        <div className="main">
            <br />
            <br />
            <br />
            <div className="ui card centered">
                <div className="image">
                    <img src={user} alt="user"></img>
                    <div>
                        <div className="content">
                            <div className="header">
                                {name}
                            </div>
                            <div className="description">
                                {email}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Link to="/">
                <div className="center-div">
                    <button className="ui button red centered">
                    Go Back
                    </button>
                    
                </div>
            </Link>

        </div>
    )
}

export default ContactDetails