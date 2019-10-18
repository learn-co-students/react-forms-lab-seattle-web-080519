import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();
    this.state = {message: ''};
  };

// "should update the state when typing" HOW IS THIS PART WORKING?
// "should update the counter when typing" HOW DOES THIS WORK??
  render() {
    return (
      <div>
        <strong>Your message:</strong>
        {/* value should be saved in the component's state and should update on every change to the input: AGAIN, AS ABOVE QUESTIONED, HOW? */}
        <input type="text" onChange={event=> this.setState({message: event.target.value})}value={this.state.message} name="message" id="message" />
        {/* below, shows remaining characters in counter: */}
        {this.props.maxChars - this.state.message.length}
      </div>
    );
  }
}

export default TwitterMessage;
