import React from "react";

class TwitterMessage extends React.Component {
  constructor(abc) {
    super();

    this.state = {
      message: "",
      remainingChars: abc.maxChars
    };
  }

  handleMessageChange = (e) => {
    console.log(e.target.value)
    const newMessage = e.target.value;
    const newRemainingChars = this.state.remainingChars - newMessage.split('').length
    this.setState({
      message: newMessage,
      remainingChars: newRemainingChars
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input 
          type="text" 
          name="message"
          onChange={this.handleMessageChange} 
          value={this.state.message} 
          id="message" 
        />
      </div>
    );
  }
}

export default TwitterMessage;
