import Header from "./Component/Header/Header";
import Main from "./Component/Main/Main";
// import ReactDom from "react-dom";
import Backdrop from "./Component/UI/Backdrop";
import Modal from "./Component/UI/Modal/Modal";
import { useState } from "react";
function App() {
    const [dropdown,setDropdown] = useState(false);
    const [allItemsList,setAllItemsList] = useState([]);
    const dropdownTrueHandler = event => {
        setDropdown(event);
    };
    const dropdownFalseHandler = event => {
        setDropdown(event);
    }
    const allItemsHandler = items =>{
        setAllItemsList((prevItems) => [items,...prevItems]);
    }
    return (
        <>
        {dropdown ? <Backdrop onFlaseDropdown = {dropdownFalseHandler}></Backdrop> : ""}
        {dropdown ? <Modal onSaveAllItems = {allItemsHandler}></Modal> : ""}
        <Header onTrueDropdown = {dropdownTrueHandler}></Header>
        <Main itemList = {allItemsList}></Main>
        </>
    )
}

export default App;
