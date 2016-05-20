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
            <h1>Instructions</h1>
            <p>Put it here</p>
          </ModalDialog>
        </ModalContainer>
      }
      </div>
      );
    }
 }

export default NavButtons;
