import "./NewItemForm.css";
import Button from "../Button"

const NewItemForm = props =>{
    return(
        <form action="" className="new-item-form">
        <label for="item-cat">Category Name</label>
        <select name="" id="item-cat">
          <option value="">Hello World</option>
          <option value="">Hello World</option>
          <option value="">Hello World</option>
          <option value="">Hello World</option>
          <option value="">Hello World</option>
        </select>
        <label for="item-name">Item Name</label>
        <input type="text" id="item-name" />
        <label for="item-price">Price</label>
        <input type="number" id="item-price" />
        <label for="item-qty">Quantity</label>
        <input type="number" id="item-qty" />
        <Button className="btn">Confirm</Button>
      </form>
    )
};

export default NewItemForm;