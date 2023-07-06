import "./Items.css";

const Items = props =>{
    return(
        <div className="item">
        <ul>
        <li>Item Name</li>
        <li>- 10000 MMK</li>
        <li><i className="fa-solid fa-cart-shopping"></i></li>
        </ul>
    </div>
    )
}

export default Items;