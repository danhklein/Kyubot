import React, { Component } from 'react';
import {ModalContainer, ModalDialog} from 'react-modal-dialog';

class NavButtons extends Component {

  state = {
    isShowingModal: false,
  }
  handleClick = () => this.setState({isShowingModal: true})
  handleClose = () => this.setState({isShowingModal: false})

  render() {
    return (
      <div>
        <button className="leftbuttons" onClick={this.handleClick}>Instructions</button>
      {
        this.state.isShowingModal &&
        <ModalContainer onClose={this.handleClose}>
          <ModalDialog onClose={this.handleClose}>
            <button className="close_modal" onClick={this.handleClose}>X</button>
            <h1>Instructions</h1>
            <p>Kyubot is a web-browser remote for the bluetooth enabled Sphero BB-8 Robot. This is only made possible by the current work of the Web BlueTooth Community.</p>
            <h2>Set up</h2>
            <p>Copy and Paste chrome://flags/#enable-web-bluetooth and enable the highlighted flag for 'Web Bluetooth'.</p>
            <p>Restart Browser</p>
            <p>Double Click Find Sphero (You may need to do this twice)</p>
            <p>Have fun! There's more functionality to come!</p>

          </ModalDialog>
        </ModalContainer>
      }
      </div>
      );
    }
 }

export default NavButtons;
