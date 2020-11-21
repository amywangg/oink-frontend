import React, { useState } from "react";
import { useTable } from 'react-table'
import AppPage from "./index";
import { connect } from "react-redux";
import { updateBudget } from "../../redux/actions/auth";
import { useHistory } from "react-router-dom";

// Color Palette
// Dark Pink: #FF3576
// Medium pink: #FF8FB3
// Lighter pink: #F9DAE4
// Sidebar pink: #FDF6F8
// Grey: #EEEEEE

// Circle: #FFAEC8
// Lighter circle: #F9DAE4

// Dark line: #AB4A78

const Settings = ({ user, updateBudget }) => {
   const history = useHistory()
   const [value, setValue] = useState({
      client_id: user ? user.id : null,
      currentBudget: "",
      budgets: [
         { month: 8, budget: 5000.00, spendings: 5510.00},
         { month: 9, budget: 4000.00, spendings: 4567.89},
         { month: 10, budget: 2500.00, spendings: 2500.00},
         { month: 11, budget: 1500.00, spendings: 1000.00}
      ],
    });
   
    const handleChange = (prop) => event => {
       setValue({ ...value, [prop]: event.target.value,
      });
    }

    const handleSubmit = () => {
      updateBudget(value);
      history.push("/");
    }

    const getDateMonth = (monthNumber) => {
      var month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
      return month[monthNumber];
    }

    const data = React.useMemo(() =>
    [{
      month: 8,
      budget: 5000.0, 
      spendings: 5510.00,
     },
     {
      month: 9,
      budget: 4000.0, 
      spendings: 4567.00,
     },
     {
      month: 10,
      budget: 2500.0, 
      spendings: 2510.00,
     },
     {
      month: 11,
      budget: 1500.0, 
      spendings: 1000.00,
     },
     ],
     []
    )

    const columns = React.useMemo(() =>
    [{
      Header: "Month",
      accessor: "month",
     },
     {
      Header: "Budget",
      accessor: "budget",
     },
     {
      Header: "Spendings",
      accessor: "spendings",
     },
     ],
     []
    )

    const {
      getTableProps,
      getTableBodyProps,
      headerGroups,
      rows,
      prepareRow,
     } = useTable({ columns, data })

    const tableHeader = () => {
      let header = Object.keys(this.state.budgets[0])
      return header.map((key, index) => {
         return <th key={index}>{key.toUpperCase()}</th>
      })
    }

    /*const pullPastBudgets = () => {
      return value.budgets.map((value.budgets, index) => {
         const { month, budget, spendings } = value.budgets
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

   const pullFutureBudgets = () => {
    return value.budgets.map((value.budgets, index) => {
       const { month, budget, spendings } = value.budgets
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
 }*/

      return (
         <AppPage>
            <form onSubmit={handleSubmit}>
               <h1 style={{color: "#FF8FB3"}}>SETTINGS</h1>
               <h3 style={{color: "#F9DAE4"}}>Current Budget ({getDateMonth(new Date().getMonth())})</h3>
               <label>Budget{' $ '}
               <input type="text" style={{width:100}} pattern="[0-9]*" value={value.currentBudget} name="currentBudget" onChange={handleChange("currentBudget")} />
               </label>
               <br/>
               <br/>
               <button disabled = {value.currentBudget == ""} >Set Current Budget</button>
               </form>
               <br/>
               <table {...getTableProps()}>
                  <thead>
                     {headerGroups.map(headerGroup => (
                        <tr {...headerGroup.getHeaderGroupProps()}>
                           {headerGroup.headers.map(column => (
                             <th {...column.getHeaderProps()}>{column.render('Header')}</th>
                           ))}
                        </tr>
                     ))}
                  </thead>
                  <tbody {...getTableBodyProps()}>
                     {rows.map(row => {
                        prepareRow(row)
                        return (
                           <tr {...row.getRowProps()}>
                             {row.cells.map(cell => {
                               return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                              })}
                           </tr>
                        )
                     })}
                  </tbody>
               </table>
         </AppPage>
      ) 
   }

const mapStateToProps = (state) => {
   return { user: state.auth.user }
 }

export default connect(mapStateToProps, { updateBudget })(Settings);