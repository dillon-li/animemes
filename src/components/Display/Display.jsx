import React, { Component } from 'react';
import { Button, Col, Row, Container } from 'reactstrap';

import WebM from './WebM'

class Display extends Component {

  constructor(props) {
    super(props)
    this.state = {
      url_list: [],
      url: '',
      buttonText: 'Begin Your Journey',
      displaying: false
    }
  }

  componentDidMount() {
    fetch('/getMemes')
      .then(res => res.json())
      .then(url_list => {
        this.setState({ url_list: url_list })
      })
  }

  // Get that randomness for intense MEMEage
  displayMemes() {
    var webfiles = this.state.url_list[0].urls
    //console.log(webfiles)
    const item = webfiles[Math.floor(Math.random()*webfiles.length)];
    // console.log(item.toString())
    // const item = webfiles[Math.floor(Math.random()*webfiles.length)];
    // console.log(item.toString())
    // const urlString = "../../images/webms/" + item.toString()
    // this.setState (
    //   {
    //     webfile: urlString,
    //     buttonText: 'More Memes',
    //     displaying: true
    //   }
    // );
    this.setState (
      {
        url: item.toString(),
        buttonText: 'More Memes',
        displaying: true
      }
    );
  }

  render() {
    console.log(this.state)
    const displaying = this.state.displaying
    if (displaying) {
    return (
      <div className="display">
      <Container fluid className="Display">
        <Button
          onClick={this.displayMemes.bind(this)}
          color="primary">
          {this.state.buttonText}
        </Button>
        <Row>
        <Col>
        <WebM url={this.state.url}></WebM>
        </Col>
        <Col>
          <Button color="danger" block>DANK</Button>
          <Button color="primary" block>Not Dank</Button>
        </Col>
        </Row>
      </Container>
      </div>
      );
    }
    else {
      return (
        <div class="display">
        <Container fluid>
          <Button
            onClick={this.displayMemes.bind(this)}
            color="primary">
            {this.state.buttonText}
          </Button>
          <WebM url={this.state.url}></WebM>
        </Container>
        </div>
      );
    }
  }

}


export default Display;
