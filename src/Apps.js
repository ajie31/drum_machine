import React, { Component } from "react";
// import AudioSources from "./component/audioSources";
import PadButtons from "./component/padButtons";

class Apps extends Component {
  state = {
    display: "null",
    drumSet: [
      {
        id: "Q",
        kit: "Heater-1",
        audioSrc: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3",
      },
      {
        id: "W",
        kit: "Heater-2",
        audioSrc: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3",
      },
      {
        id: "E",
        kit: "Heater-3",
        audioSrc: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3",
      },
      {
        id: "A",
        kit: "Heater-4",
        audioSrc: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3",
      },
      {
        id: "S",
        kit: "Clap",
        audioSrc: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3",
      },
      {
        id: "D",
        kit: "Open-HH",
        audioSrc: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3",
      },
      {
        id: "Z",
        kit: "Closed-HH",
        audioSrc: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3",
      },
      {
        id: "X",
        kit: "Kick",
        audioSrc: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3",
      },
      {
        id: "C",
        kit: "Closed-HH",
        audioSrc: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3",
      },
    ],
  };

  componentDidMount() {
    console.log("cdm");
    document.addEventListener("keydown", this.handleKeyDown);
  }
  componentDidMount() {
    document.removeEventListener("keydown", this.handleKeyDown);
  }
  updateDisplay = () => {};
  handlePlay = (audio) => {
    audio.play();
    let display = this.state.drumSet.filter((x) => x.id === audio.id)[0].kit;
    console.log(display);
    this.updateDisplay();
    this.setState({
      display,
    });
  };
  handleKeyDown = (event) => {
    let charKey = String.fromCharCode(event.keyCode);
    let display = this.state.drumSet.filter((x) => x.id === charKey)[0].kit;
    document.getElementById(charKey).click();

    this.setState({
      display,
    });
  };
  render() {
    return (
      <React.Fragment>
        <div
          onKeyDown={this.handleKeyDown}
          className="container d-lg-flex flex-column justify-content-center align-items-center"
          style={{ height: "100vh" }}
        >
          <h5 className="display-5" id="display">
            {this.state.display}
          </h5>
          <PadButtons onPlay={this.handlePlay} drumSet={this.state.drumSet} />
        </div>
      </React.Fragment>
    );
  }
}

export default Apps;
