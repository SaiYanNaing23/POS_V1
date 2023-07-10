import "./Main.css";
import Card from "../UI/Card";
import Items from "./Items";
import CartItem from "./CartItem";
import Total from "./Total";
import { useState } from "react";

const Main = props =>{
    const [cart_items_all,set_cart_items_all] = useState([]);
    // const [totalPrice,setTotalPrice] = useState("");
        // const allAmount = cart_items_all.map((price)=> +price.itemPrice)
        // let total = allAmount.reduce(
        //     (accumulator, currentValue) => accumulator + currentValue,
        //     0
        //   );
        //   setTotalPrice(total);
        const allAmount = cart_items_all.map((price)=> +price.itemPrice);
        const total = allAmount.reduce(
            (accumulator,currentValue) => accumulator + currentValue,0
        );
    const allCartItemsHandler = cartItemAll =>{
        set_cart_items_all((prevItem) => [cartItemAll,...prevItem]);
    }
    return(
    <main class="main">
        <Card className="left-section">
       <Items itemList={props.itemList} allCartItems = {allCartItemsHandler}></Items>
        </Card>
        <Card className="right-section-top">
            <CartItem cartItemExport = {cart_items_all}></CartItem>
        </Card>
        <Card className="right-section-bottom">
            <Total total = {total}></Total>
        </Card>
    </main>
    )
}

export default Main;
