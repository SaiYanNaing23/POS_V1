import "./Modal.css";
import Card from "../Card";
import Header from "./Header";
import NewItemForm from "./NewItemForm";
import ModalFooter from "./ModalFooter";
const Modal = props =>{
    return(
        <Card className="modal-box">
        <Header></Header>
        <NewItemForm></NewItemForm>
        <ModalFooter></ModalFooter>
      </Card>
    )
}

export default Modal;