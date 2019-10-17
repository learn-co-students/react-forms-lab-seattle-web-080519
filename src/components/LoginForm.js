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
  handleInputChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.username !== "" && this.state.password !== "") {
      this.props.handleLogin(this.state)
    } else {
      console.log('Enter both Username and Password')
    }
  }


  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>
            Username
            <input 
            id="username" 
            name="username" 
            onChange={this.handleInputChange} 
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
            onChange={this.handleInputChange} 
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
