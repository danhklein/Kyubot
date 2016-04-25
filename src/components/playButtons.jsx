import React, { Component } from 'react';

class PlayButtons extends Component {
  play() {
    console.log("I'll play your current sequence from the start");
  }
  record() {
    console.log("When you push me, you'll be able to record your sequences");
  }
  pause() {
    console.log("Hypothetically I'll pause the recorded movements, but we'll see.");
  }
  stop() {
    console.log("I'll stop your recording. Then you can save me or whatever you want to do.")
  }

  render() {
    return (
      <div>
        <button onClick={ this.play }>Play from Beginning</button>
        <button onClick={ this.record }>Record</button>
        <button onClick={ this.pause }>Pause</button>
        <button onClick={ this.stop }>Stop</button>
      </div>
      );
  }
}

export default PlayButtons;