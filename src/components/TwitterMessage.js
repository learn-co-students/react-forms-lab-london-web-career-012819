import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super();

    this.state = {
      message: ''
    };
  }

  wordCount = e => {
    const max = this.props.maxChars
    const cur = e.target.value.length
    const remaining = max - cur
    this.setState({
      remaining: remaining
    })
  }


  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" maxLength={this.props.maxChars} onChange={event => this.setState({message: event.target.value})} value={this.state.message}/>
        {this.props.maxChars-this.state.message.length}
      </div>
    );
  }
}

export default TwitterMessage;
