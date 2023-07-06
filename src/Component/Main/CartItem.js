import "./CartItem.css";
import Card from "../UI/Card";
import Button from "../UI/Button"
const CartItem = props =>{
    return(
    <Card className="cart-item">
        <ul className="item-info">
        <li>Item Name</li>
        <li>- 10000 MMK</li>
        </ul>
        <Card className="count">1</Card>
        <Card className="action-buttons">
        <Button>+</Button>
        <Button>-</Button>
        <Button><i class="fa-solid fa-trash"></i></Button>
        </Card>
    </Card>
    )
}

export default CartItem;