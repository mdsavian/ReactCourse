import ReactDOM from "react-dom";
import classes from "./Modal.module.css";

const BackDropOverlay = (props) => {
  return <div className={classes.backdrop} onClick={props.closeCart} />;
};

const ModalOverlay = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};
const Modal = (props) => {
  const overlayElement = document.getElementById("overlay-root");
  return (
    <>
      {ReactDOM.createPortal(<BackDropOverlay closeCart={props.closeCart}/>, overlayElement)}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        overlayElement
      )}
    </>
  );
};

export default Modal;
