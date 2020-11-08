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
            budget: ""
        }
        this.handleChange = this.handleChange.bind(this)
      }

   handleChange(event) {
       const {name, value} = event.target
       this.setState({[name]: value})
    }

    handleSubmit(event) {
       // if (event.target.password.value !== event.target.retype.value){
            //event.preventDefault()
           // alert("Your passwords do not match.")
      // }
       //else if (if form fields are empty){
           //event.preventDefault()
           //put alert
       //}
    //insert code to send information to database      
    }

    render(){
        return (
            <form onSubmit={this.handleSubmit}>
                <h1>Settings</h1>
                <h2>Create Budget: November</h2>
                <label>Budget{' $'}
                <input type="text" pattern="[0-9]*" value={this.state.budget} name="budget" onChange={this.handleChange} />
                </label>
                <br/>
               <br/>
               <button disabled = {this.state.budget == ""} >Create new budget</button>
            </form>
            )
    }
}

export default NewProfile