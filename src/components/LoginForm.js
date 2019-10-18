import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();
// 1) should save the username in state when the input changes
// 2) should save the password in state when the input changes
// are above tasks being fulfilled in lines 9-12???
    this.state = {
      username: '',
      password: ''
    };
  }
// ~'handleLogin' is props from App.js~

  handleInputChange = (event) => {
    this.setState({
      // username: event.target.value
      [event.target.name] : event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    // The onSubmit callback prop should only be called if both fields are filled in (with any value):
    if (this.state.username && this.state.password)
    // should call the `handleLogin` callback prop when the form is being submitted:
    return this.props.handleLogin(this.state);
  }

  render() {
    return (
      // Add the necessary event handler to the <form> element in order to call the onSubmit callback prop:
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>
      {/* the 'onChange' attribute is fulfilling the following: 
          "Saving input values in state:
      ✓ should save the username in state when the input changes
      ✓ should save the password in state when the input changes" */}
            Username
            <input id="username" name="username" type="text" value={this.state.username} onChange={this.handleInputChange}/>
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="password" name="password" type="password" value={this.state.password} onChange={this.handleInputChange}/>
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
