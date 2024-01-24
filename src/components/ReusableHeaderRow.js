import React from "react";
import PropTypes from "prop-types";

//Reusable header for putting titles above data row in View components
function ReusableHeaderRow(props){
  // Styles Object
  const styles = {
    table: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr 1fr 1fr",
      gridTemplateRows: "100%",
      height: "100%"
    },
    borderOuter: {
      paddingTop: ".5em",
      paddingBottom: "0em",
      borderWidth: ".125em",
      borderBottomStyle: "hidden",
    },
    borderInner: {
      paddingTop: ".375em",
      borderWidth: ".25em",
      borderStyle: "solid",
      borderTopWidth: ".5em",
    },
    heading: {
      textAlign: "center",
      fontSize: "1.3em",
      fontWeight: "800",
      margin: "0em"
    }
  };


  // Styles Logic
  function combineStyles(...args) {
    let comboStyle;
    args.forEach(style => {
      comboStyle = { ...comboStyle, ...style };
    });
    return comboStyle;
  }


  // Misc Logic
  function setFour(array){
    if(array.length < 4){
      array.push("");
      setFour(array);
    }else if(array.length > 4){
      array.pop();
      setFour(array);
    }
    return array;
  }


  // Return Logic
  return(
    <div className="shadow-border" style={combineStyles(styles.table, styles.borderOuter)}>
      {setFour(props.displayContent).map((toDisplay, index) => {
        return(
          <div className="shadow-border flex-center" style={styles.borderInner} key={index}>
            <h2 style={styles.heading}>{toDisplay}</h2>
          </div>
        )
      })}
    </div>
  )
}

ReusableHeaderRow.defaultProps = {
  displayContent: []
}

ReusableHeaderRow.propTypes = {
  displayContent: PropTypes.array
}

export default ReusableHeaderRow