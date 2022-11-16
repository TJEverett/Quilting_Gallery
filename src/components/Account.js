import React from "react";

class Account extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      user: false,
      newUserModal: false
    };
  }

  //Styles Object
  styles = {

  };

  //Auth Functions
  tempSubmit = (event) => {
    event.preventDefault();
    console.log("button clicked in Account component");
    this.setState(prevState => ({
      user: !prevState.user,
      newUserModal: false
    }));
  };

  //Return Logic
  render(){
    if(this.state.user === true){
      return(
        <React.Fragment>
          <h1>Sign out</h1>
          <button onClick={this.tempSubmit}>Sign Out</button>
        </React.Fragment>
      );
    }
    if(this.state.user === false){
      return(
        <React.Fragment>
          {/* Modal load based on this.state.newUserModal to register account */}
          <h1>Sign in</h1>
          <form onSubmit={this.tempSubmit}>
            <p>Email: </p>
            <input
              type="text"
              name="signInEmail"
              placeholder="name@example.com" />
            <p>Password: </p>
            <input
              type="password"
              name="signInPassword"
              placeholder="PASSWORD" />
            <button type="submit">Sign In</button>
          </form>
        </React.Fragment>
      );
    }
  }
}

export default Account;