import classes from "./ErrorModal.module.css";
import Card from "./Card";
import Button from "./Button";


const ErrorModal = (props) => {

  return (      
    <div>
      <div className={classes.backdrop} onClick={props.closeModal}>
        <Card className={classes.modal}>
          <header className={classes.header}>
            <h2>{props.title}</h2>
          </header>
          <div className={classes.content}>
            <p>{props.content}</p>
          </div>
          <footer className={classes.actions}>
            <Button onClick={props.closeModal}>Okay</Button>
          </footer>
        </Card>
      </div>
    </div>
  );
};

export default ErrorModal;
