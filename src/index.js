import React from 'react';
import { Component } from 'react';
import ReactDom from 'react-dom';
import RandomForm from './components/kyuPad';
import NavButtons from './components/navButtons';
import SpheroConnectButton from './components/spheroConnectButton';
import SavedSequences from './components/savedSequences';
import CurrentlyHappening from './components/currentlyHappening';
import CurrentBuild from './components/currentBuild';

class App extends Component {
  render() {
    return (
      <div>
      <NavButtons />
      <RandomForm />
      <SpheroConnectButton />
      <SavedSequences />
      <CurrentlyHappening />
      <CurrentBuild />
      </div>
    );
  }
}


ReactDom.render(
  <App />,
  document.querySelector('.container')
)
