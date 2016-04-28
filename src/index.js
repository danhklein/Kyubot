import React from 'react';
import { Component } from 'react';
import ReactDom from 'react-dom';
import KyuPad from './components/kyuPad';
import NavButtons from './components/navButtons';
import SpheroConnectButton from './components/spheroConnectButton';
import SavedSequences from './components/savedSequences';
import CurrentlyHappening from './components/currentlyHappening';
import CurrentBuild from './components/currentBuild';
import PlayButtons from './components/playButtons';
import SaveSequence from './components/saveSequenceButton';
import ClearCurrent from './components/clearCurrentSequence';

class App extends Component {
  render() {
    return (
      <div>
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
          <PlayButtons />
          <SaveSequence />
          <ClearCurrent />
        </section>
      </div>
    );
  }
}


ReactDom.render(
  <App />,
  document.querySelector('.container')
)
