import { Component } from "react";
import React from "react";
import AppPage from "./index";

// Color Palette
// Dark Pink: #FF3576
// Medium pink: #FF8FB3
// Lighter pink: #F9DAE4
// Sidebar pink: #FDF6F8
// Grey: #EEEEEE

// Circle: #FFAEC8
// Lighter circle: #F9DAE4

// Dark line: #AB4A78

class Settings extends Component {
    constructor() {
        super()
        this.state = {
            currentBudget: "",
            budgets: [
              { month: 8, budget: 5000.00, spendings: 5510.00},
              { month: 9, budget: 4000.00, spendings: 4567.89},
              { month: 10, budget: 2500.00, spendings: 2500.00},
              { month: 11, budget: 1500.00, spendings: 1000.00}
           ]
        }
        this.handleChange = this.handleChange.bind(this)
      }

   handleChange(event) {
       const {name, value} = event.target
       this.setState({[name]: value})
    }

    handleSubmit(event) {
       // if (event.target.password.value !== event.target.retype.value){
            event.preventDefault()
            alert("Your budget has been set.")
            this.currentBudget.value ="";

      // }
       //else if (if form fields are empty){
           //event.preventDefault()
           //put alert
       //}
    //insert code to send information to database      
    }

    getDateMonth(monthNumber){
      var month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
      return month[monthNumber];
    }

    tableHeader(){
      let header = Object.keys(this.state.budgets[0])
      return header.map((key, index) => {
         return <th key={index}>{key.toUpperCase()}</th>
      })
    }

    pullPastBudgets() {
      return this.state.budgets.map((budgets, index) => {
         const { month, budget, spendings } = budgets
         if (month < new Date().getMonth()){
         return (
            <tr key={month}>
               <td>{this.getDateMonth(month)}</td>
               <td>{"$" +  budget}</td>
               <td>{"$" + spendings}</td>
            </tr>
         )
         }
      })
   }

   pullFutureBudgets() {
    return this.state.budgets.map((budgets, index) => {
       const { month, budget, spendings } = budgets
       if (month > new Date().getMonth()){
        return (
           <tr key={month}>
              <td>{this.getDateMonth(month)}</td>
              <td>{"$" + budget}</td>
              <td>{"$" + spendings}</td>
           </tr>
        )
        }
    })
 }

    render(){
        return (
            <AppPage>
              <form onSubmit={this.handleSubmit}>
                  <h1 style={{color: "#FF8FB3"}}>SETTINGS</h1>
                  <h3 style={{color: "#F9DAE4"}}>Current Budget ({this.getDateMonth(new Date().getMonth())})</h3>
                  <label>Budget{' $ '}
                  <input type="text" style={{width:100}} pattern="[0-9]*" value={this.state.currentBudget} name="currentBudget" onChange={this.handleChange} />
                  </label>
                  <br/>
                  <br/>
                  <button disabled = {this.state.currentBudget == ""} >Set Current Budget</button>
                </form>
                <br/>
                <h3 style={{color: "#F9DAE4"}}>Past Budgets </h3>
                <table id='pastBudgets'>
                <tbody>
                  {this.tableHeader()}
                  {this.pullPastBudgets()}
                </tbody>
              </table>
                <br/>
                <h3 style={{color: "#F9DAE4"}}>Future Budgets </h3>
              <table id='futureBudgets'>
                <tbody>
                  {this.tableHeader()}
                  {this.pullFutureBudgets()}
                </tbody>
              </table>
            </AppPage>
        ) 
    }
}

export default Settings