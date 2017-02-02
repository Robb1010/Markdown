import React, {Component} from 'react';
import marked from 'marked';

class Content extends Component {

  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.switchChange = this.switchChange.bind(this);
  }

  state = {
    input: 'Heading\n=======\n\nSub-heading\n-----------\n \n### Another deeper heading\n \nParagraphs are separated\nby a blank line.\n\nLeave 2 spaces at the end of a line to do a  \nline break\n\nText attributes *italic*, **bold**, \n`monospace`, ~~strikethrough~~ .\n\nShopping list:\n\n  * apples\n  * oranges\n  * pears\n\nNumbered list:\n\n  1. apples\n  2. oranges\n  3. pears\n\nThe rain---not the reign---in\nSpain.\n\n *[Herman Fassett](https://freecodecamp.com/hermanfassett)*',
    theme: 'dark'
  }

  rawMarkup(value) {
      var rawMarkup = marked(value, {sanitize: true});
      return { __html: rawMarkup };
    }

  handleChange(event) {
    this.setState({
      input: event.target.value
    })
  }

  switchChange() {

    console.log(this.state.theme);
  }

  render() {
    return (
      <div className="content">
        <div></div>
        <textarea value={this.state.input} onChange={this.handleChange}>bla</textarea>
        <div className="result" dangerouslySetInnerHTML={this.rawMarkup(this.state.input)}></div>
      </div>
    )
  }
}

export default Content;
