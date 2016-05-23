import React from 'react';
import { Component } from 'react';
import ReactDom from 'react-dom';
import KyuPad from './components/kyuPad';
import NavButtons from './components/navButtons';
import SpheroConnectButton from './components/spheroConnectButton';
import SavedSequences from './components/savedSequences';
import CurrentlyHappening from './components/currentlyHappening';
import CurrentBuild from './components/currentBuild';
import SaveSequence from './components/saveSequenceButton';
import ClearCurrent from './components/clearCurrentSequence';

class App extends Component {
  render() {
    return (
      <div>
        <div className="row">
          <img src="images/kyubot2.png" />
        </div>
        <div className="row">
          <section className="onethird">
            <NavButtons />
            <SavedSequences />
          </section>
          <section className="onethird">
            <KyuPad />
            <CurrentlyHappening />
          </section>
          <section className="onethird">
            <CurrentBuild />
            <SaveSequence />
            <ClearCurrent />
          </section>
        </div>
      </div>
    );
  }
}


ReactDom.render(
  <App />,
  document.querySelector('.container')
)
