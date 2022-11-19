import React from "react";
import CustomModal from "./CustomModal";

class Account extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      authenticated: false,
      newUserModal: false
    };
  }

  //Styles Object
  styles = {
    grid: {
      display: "grid",
      gridTemplateColumns: "15% auto 5% auto 35%",
      gridTemplateRows: "10vh 10vh 10vh"
    },
    alignRight: {
      display: "flex",
      justifyContent: "end"
    },
    textBox: {
      height: "3em",
      width: "80%"
    },
    button: {
      height: "3em",
      width: "fit-content"
    },
    padding: {
      paddingLeft: "5%",
      paddingRight: "5%"
    }
  };

  //Modal Functions
  modalShow = () => {
    this.setState({ newUserModal: true });
  }
  modalHide = () => {
    this.setState({ newUserModal: false });
  }

  //Auth Functions
  tempSubmit = (event) => {
    event.preventDefault();
    console.log("Submit button clicked in Account component");
    this.setState(prevState => ({
      authenticated: !prevState.authenticated,
      newUserModal: false
    }));
  };

  //Return Logic
  render(){
    //Style Functions
    function tablePosition(fromTop, fromLeft){
      const resultString = fromTop + " / " + fromLeft;
      return({ gridArea: resultString });
    }
    function stylesCombine(...args){
      let result = {};
      args.forEach((style) => {
        result = {...result, ...style};
      });
      return result;
    }

    if(this.state.authenticated === true){
      return(
        <React.Fragment>
          <h1 className="center">Sign out</h1>
          <div className="center">
            <button onClick={this.tempSubmit} style={this.styles.button}>Sign Out</button>
          </div>
        </React.Fragment>
      );
    }
    if(this.state.authenticated === false){
      return(
        <React.Fragment>
          {/* Modal will load when "Create Account" button is clicked */}
          <CustomModal show={this.state.newUserModal} handleClose={this.modalHide}>
            <h1 className="center">Sign Up</h1>
            <form onSubmit={this.tempSubmit}>
              <div style={this.styles.grid}>
                <p style={stylesCombine(tablePosition(1, 2), this.styles.alignRight)}>Email: </p>
                <input
                  type="text"
                  name="signUpEmail"
                  placeholder="name@example.com"
                  style={stylesCombine(tablePosition(1, 4), this.styles.textBox)} />
                <p style={stylesCombine(tablePosition(2, 2), this.styles.alignRight)}>Password: </p>
                <input
                  type="password"
                  name="signUpPassword"
                  placeholder="PASSWORD"
                  style={stylesCombine(tablePosition(2, 4), this.styles.textBox)} />
                <button type="submit" style={stylesCombine(tablePosition(3, 5), this.styles.button)}>Sign Up</button>
              </div>
            </form>
          </CustomModal>
          
          {/* Main page information to be loaded at all times */}
          <div style={this.styles.padding}>
            <h1>Sign in</h1>
            <form onSubmit={this.tempSubmit}>
              <div style={this.styles.grid}>
                <p style={stylesCombine(tablePosition(1, 2), this.styles.alignRight)}>Email: </p>
                <input
                  type="text"
                  name="signInEmail"
                  placeholder="name@example.com"
                  style={stylesCombine(tablePosition(1, 4), this.styles.textBox)} />
                <p style={stylesCombine(tablePosition(2, 2), this.styles.alignRight)}>Password: </p>
                <input
                  type="password"
                  name="signInPassword"
                  placeholder="PASSWORD"
                  style={stylesCombine(tablePosition(2, 4), this.styles.textBox)} />
                <button type="submit" style={stylesCombine(tablePosition(3, 5), this.styles.button)}>Sign In</button>
              </div>
            </form>
            <p>New User?</p>
            <button onClick={this.modalShow} style={this.styles.button}>Create Account</button>
          </div>
        </React.Fragment>
      );
    }
  }
}

export default Account;