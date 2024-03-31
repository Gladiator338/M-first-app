import React from "react";
import { Navigate } from 'react-router-dom';
import { createBrowserHistory } from "history";

class EditContact extends React.Component {

    constructor(props){
        super(props)
        const history = createBrowserHistory()
        const {id ,name,email} = history.location.state.contact || {}
        this.state = {
            id,
            name,
            email
          };
    }
    
    status = false
    update = (e) => {
        e.preventDefault();
        if (this.state.name === "" || this.state.email === "") {
            alert("All the details should be provided")
            return
        }
        this.props.updateContactHandler(this.state)
        this.setState({
            name: "",
            email: ""
        })
        this.status = true
    }
    render() {
        let status = this.status
        return (
            <div className="ui form">
                <h2>Edit Contact</h2>
                <br></br>
                <div>
                    {status && (
                        <Navigate to="/" replace={true} />
                    )}
                    <form className="ui form" onSubmit={this.update}>
                        <div className="field">
                            <label>Name</label>
                            <input type="text" name="name" placeholder="NAME" value={this.state.name} onChange={(e) => this.setState({ name: e.target.value })} />
                        </div>
                        <div className="field">
                            <label>Email</label>
                            <input type="text" name="emial" placeholder="EMAIL" value={this.state.email} onChange={(e) => this.setState({ email: e.target.value })} />
                        </div>
                        <button className="ui button green">Update Contact</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default EditContact;