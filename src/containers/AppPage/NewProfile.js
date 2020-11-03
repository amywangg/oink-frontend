import React, { useCallback, useState } from "react";
import { Component } from "react";

// Color Palette
// Dark Pink: #FF3576
// Medium pink: #FF8FB3
// Lighter pink: #F9DAE4
// Sidebar pink: #FDF6F8
// Grey: #EEEEEE

// Circle: #FFAEC8
// Lighter circle: #F9DAE4

// Dark line: #AB4A78

class NewProfile extends Component {
    constructor() {
        super()
        this.state = {
            firstName: "",
            lastName: "",
            email: "",
            username: "",
            password: "",
            retype: "",
            accept: false
        }
        this.handleChange = this.handleChange.bind(this)
      }

    handleChange(event) {
        const {name, value, type, checked} = event.target
        type === "checkbox" ? this.setState({[name]: checked}) : this.setState({[name]: value})
    }

    handleSubmit(event) {
        if (event.target.password.value !== event.target.retype.value){
            event.preventDefault()
            alert("Your passwords do not match.")
       }
       //else if (if form fields are empty){
           //event.preventDefault()
           //put alert
       //}
       else {
        //insert code to send information to database      
       }
    }

    render(){
        return (
            <form onSubmit={this.handleSubmit}>
                <h1>Welcome to Oink!</h1>
                <h2>Your Information</h2>
                <label>First Name
                <input type="text" value={this.state.firstName} name="firstName" onChange={this.handleChange} />
                <br/>
                </label>
                <label>Last Name 
                <input type="text" value={this.state.lastName} name="lastName" onChange={this.handleChange} />
                <br/>
                </label>
                <label>Email Address 
                <input type="text" value={this.state.email} name="email" onChange={this.handleChange} />
                <br/>
                </label>
                <h2>Account Information</h2>
                <label>Username 
                <input type="text" value={this.state.username} name="username"onChange={this.handleChange} />
                <br/>
                </label>
                <label>Password 
                <input type="text" value={this.state.password} name="password" onChange={this.handleChange} />
                <br/>
                </label>
                <label>Retype Password
                <input type="text" value={this.state.retype} name="retype" onChange={this.handleChange} />
                <br/>
                <br/>
                </label>
               <label>
                    <input type="checkbox" checked={this.state.accept} name="accept" onChange={this.handleChange} />
               I accept the terms and conditions.
               </label>
               <br/>
               <button disabled = {this.state.accept !== true} >Sign Up</button>
            </form>
            )
    }
}

export default NewProfile