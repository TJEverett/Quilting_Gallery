import React from "react";
import CustomModal from "./CustomModal";
import UserForm from "./UserForm";

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
            <UserForm submitFunc={this.tempSubmit} submitMessage="Sign Up" />
          </CustomModal>
          
          {/* Main page information to be loaded at all times */}
          <div style={this.styles.padding}>
            <h1>Sign in</h1>
            <UserForm submitFunc={this.tempSubmit} submitMessage="Sign In" />
            <p>New User?</p>
            <button onClick={this.modalShow} style={this.styles.button}>Create Account</button>
          </div>
        </React.Fragment>
      );
    }
  }
}

export default Account;