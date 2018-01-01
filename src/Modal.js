import React, { Component } from "react";
import ReactDOM from "react-dom";

const modalRoot = document.getElementById("modal-root");

class Modal extends Component {
  constructor(props) {
    super(props);
    this.el = document.createElement("div");
  }
  componentWillMount() {
    console.log("Modal will mount");
  }
  componentDidMount() {
    modalRoot.appendChild(this.el);
    console.log("Modal did mount");
  }

  componentWillUnmount() {
    console.log("Modal will unmount");
    modalRoot.removeChild(this.el);
  }
  render() {
    return ReactDOM.createPortal(this.props.children, this.el);
  }
}

export default Modal;
