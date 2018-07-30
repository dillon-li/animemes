import React, { Component } from 'react';
import { Media } from 'reactstrap'
import ReactPlayer from 'react-player'

class WebM extends Component {
  /*
  constructor(props) {
    super(props);
  }
  */

  render() {
    return (
      <Media center id="media-container">
        <ReactPlayer
          id="webfile"
          url={this.props.url}
          playing
          loop
          height="100%"
        />
      </Media>
    );
  }

}

export default WebM;
