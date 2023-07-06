import "./Main.css";
import Card from "../UI/Card";
import Items from "./Items";
import CartItem from "./CartItem";
import Total from "./Total";
const Main = props =>{
    return(
    <main class="main">
        <Card className="left-section">
       <Items></Items>
        </Card>
        <Card className="right-section-top">
            <CartItem></CartItem>
        </Card>
        <Card className="right-section-bottom">
            <Total></Total>
        </Card>
    </main>
    )
}

export default Main;
