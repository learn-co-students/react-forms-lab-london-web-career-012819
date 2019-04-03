import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      maxChars: this.props.maxChars,
      twitterMessage: "",
    };
  }

  handleChange = (event) => {

    this.setState({
      twitterMessage: event.target.value,
    })
  }

  render() {
    console.log(this.state)
    return (
      <div>
        <strong>Your message: </strong>
        <input type="text" name="twitterMessage" value={this.state.twitterMessage} onChange={this.handleChange}/>
        <small>{this.state.maxChars - this.state.twitterMessage.length}</small>
      </div>
    );
  }
}

export default TwitterMessage;
