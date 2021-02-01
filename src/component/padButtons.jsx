import React, { Component } from "react";
import PadButton from "./padButton";

class PadButtons extends Component {
  render() {
    const { onPlay, drumSet } = this.props;
    return (
      <div className="row">
        {drumSet.map((drum, i) =>
          i % 3 !== 0 ? (
            <React.Fragment key={drum.id}>
              <PadButton onPlay={onPlay} padButton={drum} />
            </React.Fragment>
          ) : (
            <React.Fragment key={drum.id}>
              <div class="w-100"></div>
              <PadButton onPlay={onPlay} padButton={drum} />{" "}
            </React.Fragment>
          )
        )}
      </div>
    );
  }
}

export default PadButtons;
