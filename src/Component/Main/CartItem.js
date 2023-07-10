
import SingleCartItem from "./SingleCartItem";

const CartItem = props =>{
    return (
      <>
      {props.cartItemExport.map((item)=>(<SingleCartItem cartItem = {item} key={item.itemId}></SingleCartItem>))}
      {console.log(props.cartItemExport)}
      </>
    )
}

export default CartItem;