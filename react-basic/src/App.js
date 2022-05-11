import Transaction from './components/Transaction'
import Form from './components/Form'
import './App.css'
import {useEffect, useState} from 'react'
import DataContext from "./data/DataContext"
import Report from './components/Report'
import {BrowserRouter as Router,Routes,Route,Link} from "react-router-dom"
// import { v4 as uuidv4 } from 'uuid';

function App() {
  const design={color:"pink", textAlign:"center", fontSize:'1.5rem'}
  // const iState = [
  //   {id:1,title:"Room Rental",amount:-8500},
  //   {id:2,title:"Transportation",amount:-800},
  //   {id:3,title:"Salary",amount:45000},
  //   {id:4,title:"Shopping",amount:-2000},
  //   {id:5,title:"Ang-Bao",amount:5000}
  // ]
  const [items,setItems] = useState([])

  const [reportIncome,setReportIncome]= useState(0)
  const [reportExpense,setReportExpense]=useState(0)
  const onAddNewItem = (newItem)=>{
    setItems((prevItem)=>{
      return [newItem,...prevItem]
    })
  }
  useEffect(()=>{
    const allAmount = items.map(items=>items.amount)
    const income = allAmount.filter(element=>element>0).reduce((total,element)=>total+=element,0)
    const expense = (allAmount.filter(element=>element<0).reduce((total,element)=>total+=element,0)*-1)
    setReportIncome(income)
    setReportExpense(expense)
  },[items,reportIncome,reportExpense])

  // Reducer State
  // const [showReport,setShowReport] = useState(false)
  // const reducer = (state,action)=>{
  //   switch(action.type){
  //     case"Show":
  //       return setShowReport(true)
  //     case"Hide":
  //       return setShowReport(false)
  //   }
  // }
  // const [result,dispatch] = useReducer(reducer,showReport)

  return (
    <DataContext.Provider value={
      {
        income: reportIncome,
        expense: reportExpense
      }
    }>
      <div className="container">
        <h1 style={design}>Accounting Programme</h1>
        <Router>
          <div>
            <ul className="horizontal-menu">
              <li>
                <Link to="/">Summary</Link>
              </li>
              <li>
                <Link to="/insert">Add More</Link>
              </li>
            </ul>
            <Routes>
              <Route path="/" element={<Report/>} exact></Route>
              <Route path="/insert" element={<><Form onAddItem={onAddNewItem}/><Transaction items={items}/></>}></Route>
            </Routes>
          </div>
        </Router>
      </div>
    </DataContext.Provider>
  );
}
console.log("SSS version2")
console.log("Report Sale")

export default App;
