import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message: ""
    };
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input
          type="text"
          onChange={event => this.setState({ message: event.target.value })}
          value={this.state.message}
        />
        <div>Chars left: {this.props.maxChars - this.state.message.length}</div>
      </div>
    );
  }
}

export default TwitterMessage;
