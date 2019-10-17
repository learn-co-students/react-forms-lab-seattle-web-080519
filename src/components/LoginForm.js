import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: '',
      password: ''
    };
  }
  // 
  handleLoginPrep = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    }, () => this.props.handleLogin(this.state))
  }

  render() {
    return (
      <form>
        <div>
          <label>
            Username
            <input 
            id="username" 
            name="username" 
            onChange={this.handleLoginPrep} 
            type="text" 
            />
          </label>
        </div>
        <div>
          <label>
            Password
            <input 
            id="password" 
            name="password" 
            onChange={this.handleLoginPrep} 
            type="password" 
            />
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
