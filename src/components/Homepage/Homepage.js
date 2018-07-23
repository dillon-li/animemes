import React, { Component } from 'react';

export default class Homepage extends Component {

  constructor(props) {
    super(props)

    this.state = {
      display: false
    }
  }

  componentDidMount() {
    this.setState({display: true})
  }

  render() {
    return (
      <div className="Homepage">
        <div id="page-wrapper">

            <header id="header">
              <nav id="nav">
                <ul>
                </ul>
              </nav>

            </header>

            <article id="main">
              <header>
                <h2 id="rainbow">WEABOO CENTRAL</h2>
                <p>KUMIKO X REINA</p>
                <a href="/display">
                  <button type="button">CLICK FOR GREATNESS</button>
                </a>
                <a href="/test">
                  <button type="button">CLICK FOR TEST</button>
                </a>
              </header>

              <section class="wrapper style5">
                <div class="inner">

                  <hr />

                </div>
              </section>
            </article>

            <footer id="footer">
              FOR THE MEMES
            </footer>

        </div>
      </div>
    )
  }
}
