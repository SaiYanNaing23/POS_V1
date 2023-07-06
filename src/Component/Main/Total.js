import "./Total.css";
import Card from "../UI/Card";
const Total = props =>{
    return(
        <Card>
        <span>Total Amount : </span>
        <span>300000 </span>
        <span> - MMK</span>
        <button className="btn-buy">Buy</button>
        </Card>
    )
}

export default Total;