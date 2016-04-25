import React from 'react';
import { Component } from 'react';
import ReactDom from 'react-dom';
import RandomForm from './components/kyuPad';
import NavButtons from './components/navButtons';
import SpheroConnectButton from './components/spheroConnectButton';

class App extends Component {
  render() {
    return (
      <div>
      <NavButtons />
      <RandomForm />
      <SpheroConnectButton />
      </div>
    );
  }
}


ReactDom.render(
  <App />,
  document.querySelector('.container')
)
