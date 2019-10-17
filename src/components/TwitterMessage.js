import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super();

    this.state = {
      message: "",
      remainingChars: props.maxChars
    };
  }

  handleMessageChange = (e) => {
    const newMessage = e.target.value;
    let newRemainingChars = this.state.remainingChars;
    newMessage.length > this.state.message.length ? newRemainingChars-- : newRemainingChars++;
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
        <div>
          <p>Remaining Characters: {this.state.remainingChars}</p>
        </div>
      </div>
    );
  }
}

export default TwitterMessage;
