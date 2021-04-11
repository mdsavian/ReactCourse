import React, { Component } from "react";
import AuxHoc from "../../../hoc/AuxHoc/AuxHoc";
import Backdrop from "../Backdrop/Backdrop";
import "./Modal.css";

class Modal extends Component {
  shouldComponentUpdate(nextProps, nextState) {
      return nextProps.show !== this.props.show
  }

  render() {
    return (
      <AuxHoc>
        <Backdrop show={this.props.show} clicked={this.props.closeModal} />
        <div
          className="Modal"
          style={{
            transform: this.props.show ? "translateY(0)" : "translateY(-100vh)",
            opacity: this.props.show ? "1" : "0",
          }}
        >
          {this.props.children}
        </div>
      </AuxHoc>
    );
  }
}

export default Modal;
