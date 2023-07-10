import SingleItem from "./SingleItem";
const Items = props =>{
    const saveCartItemHandler = cartItem =>{
        props.allCartItems(cartItem)
    }
    return(
        <>
        {props.itemList.map((items) => (
            <SingleItem key={items.itemId} itemList = {items} onSaveCartItem = {saveCartItemHandler}></SingleItem>
        ))}
        </>
    )
}

export default Items;