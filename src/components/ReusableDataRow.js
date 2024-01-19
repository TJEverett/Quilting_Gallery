import React from "react";
import PropTypes from "prop-types";
import Image from "./Image";

//Reusable data row for View components
function ReusableDataRow(props){
  // Styles Object
  const styles = {
    table: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr 1fr 1fr",
      gridTemplateRows: "100%",
      gap: ".25em",
      height: "100%"
    },
    border: {
      borderWidth: ".25em",
      borderStyle: "solid",
      padding: ".125em"
    }
  };


  // Styles Logic
  function combineStyles(...args){
    let comboStyle;
    args.forEach(style => {
      comboStyle = {...comboStyle, ...style};
    });
    return comboStyle;
  }


  // Return Logic
  return(
    <div className="shadow-border" style={combineStyles(styles.table, styles.border)}>
      <div className="flex-center" style={{height: "100%"}}>
        <Image src={props.imageUrl} alt={(props.displayContent[0] ?? "No") + " thumbnail"} />
      </div>
      {props.displayContent.map((toDisplay, index) => {
        return(
          <h3 className="flex-center" key={index}>{toDisplay}</h3>
        );
      })}
    </div>
  );
}

ReusableDataRow.defaultProps = {
  imageUrl: "",
  displayContent: []
}

ReusableDataRow.propTypes = {
  imageUrl: PropTypes.string,
  displayContent: PropTypes.array
}

export default ReusableDataRow;

