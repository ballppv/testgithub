import PropTypes from 'prop-types'; // Proptypes
import './Item.css'

const Item =(props)=>{
    const {title,amount} = props
    const status = amount<0 ?"Expense":"Income"
    const PlusMinus = amount<0 ?"-":"+"
    const formatNumber=(num)=>{
        return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
    }
    return (
        <li className={status}>{title}<span>{PlusMinus}{formatNumber(Math.abs(amount))}</span></li>
    );
}
// การกำหนด Proptype
Item.propTypes={
    title:PropTypes.string.isRequired,
    amount:PropTypes.number.isRequired
}

export default Item