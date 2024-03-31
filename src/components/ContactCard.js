import React from "react";
import user from "../images/user.png"
import { Link } from "react-router-dom";
import { createBrowserHistory } from "history";

const ContactCard = (props) => {
    const {id,name,email} = props.contact
    const history = createBrowserHistory()
    history.push(`/EditContact/${id}` , props.contact)
    return (<div className="item">
        <img className="ui avatar image" src={user} alt="user"></img>
        <div className="content">
            <Link to={`/contact/${id}`} state={props.contact}>
            <div className="header">
                {name}
            </div>
            <div>
                {email}
            </div>
            </Link>
        </div>
        <br></br>
        <i className="trash alternate outline icon" style={{ color: "red", marginTop: '7px' ,marginLeft:'10px'}} onClick={()=>{
            props.clickHandler(id);
        }}></i>
        <Link to={`/EditContact/${id}`} state={{ contact: props.contact }}>
        {/* <Link to={{pathname:`/EditContact/${id}` ,state:{contact : props.contact}}} > */}
        <i className="edit alternate outline icon" style={{ color: "green", marginTop: '7px' }} ></i>
        </Link>
    </div>
    )
} 


export default ContactCard