import { useEffect, useState } from 'react'
import './Form.css'
import { v4 as uuidv4 } from 'uuid'
// import { checkPropTypes } from 'prop-types'

const Form=(props)=>{
    console.log("Render Form Component")

    const [title,setTitle]=useState('')
    const [amount,setAmount]=useState(0)
    const [formValid,setFormValid]=useState(false)

    const inputTitle =(event)=>{
        setTitle(event.target.value)
    }
    const inputAmount =(event)=>{
        setAmount(event.target.value)
    }
    const addItem=(event)=>{
        event.preventDefault() // ทำให้หน้าเพจนั้นไม่ render ใหม่
        const itemData = {
            id:uuidv4(),
            title:title,
            amount:Number(amount)
        }
        props.onAddItem(itemData)
        setTitle('')
        setAmount(0)
    }

    useEffect(()=>{
        const checkData = title.trim().length>0 && amount!==0
        setFormValid(checkData)
    },[title,amount])

    return(
        <div>
            <form onSubmit={addItem}>
                <div className="form-control">
                    <label>Item Name:</label>
                    <input type="text" placeholder="insert the item" onChange={inputTitle} value={title}/>
                </div>
                <div className="form-control">
                    <label>Amount:</label>
                    <input type="number" placeholder="- if expense" onChange={inputAmount} value={amount}/>
                </div>
                <div>
                    <button className="btn" type="submit" disabled={!formValid}>Add Item</button>
                </div>
            </form>
        </div>
    )
}

export default Form