import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super();

    this.state = {
      message: "",
     
    };
  }

  handleMessage = (e) => {
    this.setState ({
      message: e.target.value.slice(0, this.props.maxChars)
    
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input onChange={this.handleMessage} type="text" name="message" id="message" value={this.state.message.slice(0, this.props.maxChars)} />
        {this.props.maxChars-this.state.message.length}
      </div>
      
    );
  }
}

export default TwitterMessage;
