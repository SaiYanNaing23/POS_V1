import { useState } from "react";
import "./NewItemForm.css";
const Dummy_Category = [
  {id : 1, category : "Healthy"},
  {id : 2, category : "Electronic Device"},
  {id : 3, category : "Fashion"},
  {id : 4, category : "Home & LifeStyle"},
  {id : 5, category : "Toys"},
];
const NewItemForm = props =>{
  const [option,setOption] = useState("");
  const [itemName,setItemName] = useState("");
  const [price,setPrice] = useState("");
  const [qty,setQty] = useState("");

  const optionChangeHandler = e =>{
    setOption(e.target.value);
  };
  const nameChangeHandler = e =>{
    setItemName(e.target.value);
  };
  const priceChangeHandler = e =>{
    setPrice(e.target.value);
  };
  const qtyChangeHandler = e =>{
    setQty(e.target.value);
  };

  const formSubmitHandler = e =>{
    e.preventDefault();
    const item_list = {
      itemId : Math.random(),
      option,
      itemName,
      price,
      qty,
    }
    props.onSaveItem(item_list)
    setOption("");
    setItemName("");
    setPrice("");
    setQty("");
  }
    return(
        <form action="" className="new-item-form" onSubmit={formSubmitHandler}>
        <label htmlFor="item-cat">Category Name</label>
        <select name="" id="item-cat" onChange={optionChangeHandler} value={option}>
          {Dummy_Category.map((cat) => (
            <option value={cat.id} key={cat.id}>{cat.category}</option>
          ))}
        </select>
        <label htmlFor="item-name">Item Name</label>
        <input type="text" id="item-name" onChange={nameChangeHandler} value={itemName}/>
        <label htmlFor="item-price">Price</label>
        <input type="number" id="item-price" onChange={priceChangeHandler} value={price}/>
        <label htmlFor="item-qty">Quantity</label>
        <input type="number" id="item-qty" onChange={qtyChangeHandler} value={qty}/>
        <button className="btn" type="submit">Confirm</button>
      </form>
    )
};

export default NewItemForm;