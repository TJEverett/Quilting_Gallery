import React from "react";
import PropTypes from "prop-types";

function UserForm(props) {
  //Styles Object
  const styles = {
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
  };

  //Style Functions
    let tablePosition = (fromTop, fromLeft) =>{
      const resultString = fromTop + " / " + fromLeft;
      return({ gridArea: resultString });
    };
    let stylesCombine = (...args) => {
      let result = {};
      args.forEach((style) => {
        result = {...result, ...style};
      });
      return result;
    };

  return(
    <React.Fragment>
      <form onSubmit={props.submitFunc}>
        <div style={styles.grid}>
          <p style={stylesCombine(tablePosition(1, 2), styles.alignRight)}>Email: </p>
          <input
            type="text"
            name="Email"
            placeholder="name@example.com"
            style={stylesCombine(tablePosition(1, 4), styles.textBox)} />
          <p style={stylesCombine(tablePosition(2, 2), styles.alignRight)}>Password: </p>
          <input
            type="password"
            name="Password"
            placeholder="PASSWORD"
            style={stylesCombine(tablePosition(2, 4), styles.textBox)} />
          <button type="submit" style={stylesCombine(tablePosition(3, 5), styles.button)}>{props.submitMessage}</button>
        </div>
      </form>
    </React.Fragment>
  )
}

UserForm.defaultProps = {
  submitFunc: () => {console.log("no function supplied to UserForm")},
  submitMessage: "Submit"
};

UserForm.propTypes = {
  submitFunc: PropTypes.func,
  submitMessage: PropTypes.string
};

export default UserForm;