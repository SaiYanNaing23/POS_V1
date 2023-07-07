import Header from "./Component/Header/Header";
import Main from "./Component/Main/Main";
import ReactDom from "react-dom";
import Backdrop from "./Component/UI/Backdrop";
import Modal from "./Component/UI/Modal/Modal";
function App() {
    return (
        <>
        {ReactDom.createPortal(<Backdrop></Backdrop>,document.getElementById("backdrop-id"))}
        {ReactDom.createPortal(<Modal></Modal>,document.getElementById("modal-id"))}
        <Header></Header>
        <Main></Main>
        </>
    )
}

export default App;
