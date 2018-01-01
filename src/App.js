import React, { Component } from "react";
import './App.css';
import {Transition} from 'react-transition-group';
import Modal from "./Modal";
import ModalContent from "./modalContent";

export default class App extends Component {
  state = {
    modalOpen: false
  };
  renderModal = () => {
    if (this.state.modalOpen) {
      return (
        <Modal>
          <ModalContent onClose={() => this.setState({ modalOpen: false })} />
        </Modal>
      );
    } else return null;
  };
  render() {
    return (
      <div className="container">
        <h1>Modal Animation</h1>
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => this.setState({modalOpen: true})}
        >
          Open Modal
        </button>
        <Transition in={this.state.modalOpen} timeout={300} mountOnEnter unmountOnExit>
          {state => (
            <Modal>
              <ModalContent onClose={() => this.setState({ modalOpen: false })} 
              aClass={state==='entered'?'entered':''} />
            </Modal>
          )}
         
        </Transition>
      </div>
    );
  }
}
