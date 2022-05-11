import Item from "./Item"
import './Transaction.css'
// import { v4 as uuidv4 } from 'uuid'; // UUID Universally Unique Identifier

const Transaction =(props)=>{
    const {items} = props
    return (
      <div>
              <ul className='item-list'>
        {items.map((element)=>{ // วิธี map array
          // return <Item title={element.title} amount={element.amount} />
          return <Item {...element} key={element.id}/> // ใช้ spread operator ในการลดรูป
        })}
      </ul>
      </div>
    );
  }

export default Transaction
