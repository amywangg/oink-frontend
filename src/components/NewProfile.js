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
        type === "checkbox" ? this.setState({ [name]: checked }) : this.setState({[name]: value})
    }

    handleSubmit(event) {
        const {password, retype} = this.state
        if (retype.value !== password.value){
            alert("no match")
           return false;
       }
    }

    render(){
        return (
            //<header class>Welcome to Oink! To begin, please fill in the following information:</header>
            //<h1>Welcome to Oink!</h1>
            <form onSubmit={this.handleSubmit}>
                <h2>Your Information</h2>
                First Name
                <input type="text" value={this.state.firstName} name="firstName" onChange={this.handleChange} />
                <br/>
                Last Name 
                <input type="text" value={this.state.lastName} name="lastName" onChange={this.handleChange} />
                <br/>
                Email Address 
                <input type="text" value={this.state.email} name="email" onChange={this.handleChange} />
                <br/>
                <h2>Account Information</h2>
                Username 
                <input type="text" value={this.state.username} name="username"onChange={this.handleChange} />
                <br/>
                Password 
                <input type="text" value={this.state.password} name="password" onChange={this.handleChange} />
                <br/>
                Retype Password 
                <input type="text" value={this.state.retype} name="retype" onChange={this.handleChange} />
                <h1>{this.state.accept.value}</h1>
                <br/>
               <label>
                    <input type="checkbox" checked={this.state.accept} name="accept" onChange={this.handleChange} />
               I accept the terms and conditions.</label> 
               <br/>
               <br/>
               <button>Submit</button>
            </form>
            )
    }
}

export default NewProfile