import { useContext } from "react"
import DataContext from "../data/DataContext"
import "./Report.css"

// toFixed(x) คือกำหนดจุดทศนิยม

const Report=()=>{
    const {income,expense} = useContext(DataContext)
    // การจัดรูปแบบตัวเลข FormatNumber
    const formatNumber=(num)=>{
        return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
    }
    return (
        <div>
            <h4>Balance (THB)</h4>
            <h3>{formatNumber((income-expense).toFixed(2))}</h3>
            <div className="report-container">
                <div>
                    <h4>Income</h4>
                    <p className="report plus">{formatNumber((income).toFixed(2))}</p>
                </div>
                <div>
                    <h4>Expense</h4>
                    <p className="report minus">{formatNumber((expense).toFixed(2))}</p>
                </div>
            </div>
        </div>
    )
}

export default Report