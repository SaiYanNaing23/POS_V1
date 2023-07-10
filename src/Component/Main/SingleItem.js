import "./SingleItem.css";

const SingleItem = props =>{
    const cartItemHandler = () =>{
        const Cart_items = {
            itemId : props.itemList.itemId,
            itemName : props.itemList.itemName,
            itemPrice : props.itemList.price,
            count : 1,
        }
        props.onSaveCartItem(Cart_items)
    }
    return (
        <div className="item">
        <ul>
        <li>{props.itemList.itemName}</li>
        <li>- {props.itemList.price} MMK</li>
        <li onClick={cartItemHandler}><i className="fa-solid fa-cart-shopping"></i></li>
        </ul>
        </div>
    )
}

export default SingleItem;