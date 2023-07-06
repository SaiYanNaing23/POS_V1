import "./Header.css";
import Brand from "./Brand";
import Search from "./Search";
import Card from "../UI/Card";
import Button from "../UI/Button";
const Header = props => {
    return (
        <header class="header">
       <Brand></Brand>
       <Search></Search>
        <Button className="btn newItem-btn">New Item</Button>
        <Card className="profile">
            <img
              src="./img/profile.jpg"
              alt="Seller Profile"
              className="profile-img"
            />
        </Card>
      </header>
    )
}

export default Header;