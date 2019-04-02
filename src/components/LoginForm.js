import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: '',
      password: ''
    };
  }

  update = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
    console.log(this.state)
  }

  submitted = e => {
    e.preventDefault()
    if (!this.state.username || !this.state.password) return
    this.props.onSubmit(this.state)
  }

  render() {
    return (
      <form onSubmit={this.submitted} >
        <div>
          <label>
            Username
            <input id="username" name="username" type="text" onChange={this.update} />
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="password" name="password" type="password" onChange={this.update}  />
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
