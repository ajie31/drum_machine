import React, { Component } from "react";

class PadButton extends Component {
  constructor(props) {
    super(props);
    this.audio = React.createRef();
  }

  render() {
    return (
      <React.Fragment>
        <button
          id={this.props.padButton.id}
          className="drum-pad col"
          onClick={() => this.props.onPlay(this.audio.current)}
          style={{ padding: "6% 0" }}
        >
          <audio
            id={this.props.padButton.id}
            className="clip"
            ref={this.audio}
            src={this.props.padButton.audioSrc}
          ></audio>
          <h1 className="display-3"> {this.props.padButton.id}</h1>
        </button>
      </React.Fragment>
    );
  }
}

export default PadButton;
