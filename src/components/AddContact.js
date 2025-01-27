import React from "react";
import {Navigate} from 'react-router-dom';


class AddContact extends React.Component {

    state = {
        name: "",
        email: ""
    }
    status = false
    add = (e) => {
        e.preventDefault();
        if (this.state.name === "" || this.state.email === "") {
            alert("All the details should be provided")
            return
        }
        this.props.addContactHandler(this.state)
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
                <h2>Add Contact</h2>
                <br></br>
                <div>
                {status && (
          <Navigate to="/" replace={true} />
        )}
                    <form className="ui form" onSubmit={this.add}>
                        <div className="field">
                            <label>Name</label>
                            <input type="text" name="name" placeholder="NAME" value={this.state.name} onChange={(e) => this.setState({ name: e.target.value })} />
                        </div>
                        <div className="field">
                            <label>Email</label>
                            <input type="text" name="emial" placeholder="EMAIL" value={this.state.email} onChange={(e) => this.setState({ email: e.target.value })} />
                        </div>
                        <button className="ui button green">Add Here</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default AddContact;