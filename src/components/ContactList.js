import React ,{useRef} from "react";
import { Link } from "react-router-dom";
import ContactCard from "./ContactCard";

const ContactList = (props) => {
    
    const inputElement = useRef("")
    const deleteContactHandler = (id) => {
        props.getContactID(id)
    };
    // const contacts = [
    //     {
    //         id: "12",
    //         name: "srwr",
    //         email: "dsfserfw"
    //     }
    // ]
    const renderContactList = props.contacts.map((contact) => {
        return (
            <ContactCard contact={contact} clickHandler={deleteContactHandler}
                key={contact.id}></ContactCard>
        )
    })

    const getSearchTerm = () =>{
        props.serachKeyWord(inputElement.current.value)
    }

    return (
        <div className="main">
            <br>
            </br>
            <br>
            </br>
            <h2>
                <br>
                </br>
                <br>
                </br>
                Contact List
                <Link to="/AddContact">
                    <button className="ui button blue right">Add New Contact</button>
                </Link>

            </h2>
            <div className="ui search">
                <div className="icon inpit">
                    <input ref={inputElement} type="text" placeholder="Search Contact" className="prompt" input={props.term} onChange={getSearchTerm}/>
                    <i className="search icon"></i>
                </div>
            </div>
            <div className="ui celled list">

                {renderContactList.length >0 ? renderContactList : "NO CONTACT AVAILABLE"}
            </div>

        </div>
    )
}

export default ContactList