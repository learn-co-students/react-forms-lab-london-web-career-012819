import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super();
    //this.props.maxChars
    this.state = {
      tweet: '',
      count: props.maxChars
    };
  }

  handleChange = (event) => {
    this.setState({
      tweet: event.target.value,
      count: this.state.count - 1
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" value={this.state.tweet} onChange={(event) => this.handleChange(event)}/>
        <p>{this.state.count}</p>
      </div>
    );
  }
}

export default TwitterMessage;
