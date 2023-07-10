import "./Backdrop.css";


const Backdrop = props =>{
    const flaseStateHandler = () =>{
        props.onFlaseDropdown(false);
    }
    return(
        <div className="back-drop" onClick={flaseStateHandler}></div>
    )
}

export default Backdrop;