import React, { Component } from 'react';
import { Media } from 'reactstrap'
//import ReactPlayer from 'react-player'

class WebM extends Component {
  constructor(props) {
    super(props);
    this.state = {
      webmURL: []
    };
  }

  test_func() {
    this.setState(
      {webmURL: '../../images/banner.png'}
    );
    alert("Test was called");
  }
/*
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
  */
  render() {
    return (
    <img src="../../images/banner.png" />
  )
  }
}

export default WebM;
