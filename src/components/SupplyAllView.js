import React from "react";
import PropTypes from "prop-types";
import ReusableDataRow from "./ReusableDataRow";

function SupplyAllView(props) {
  // Style Object
  const styles = {
    table: {
      display: "grid",
      gridTemplateColumns: "1fr",
      gap: ".5em"
    }
  };


  // Style Logic
  function combineStyles(...args) {
    let comboStyle = {};
    args.forEach(style => {
      comboStyle = {...comboStyle, ...style};
    });
    return comboStyle;
  }

  // Return Logic
  return(
    <div>
      <h2 className="flex-center">Supply All View</h2>
      <div style={combineStyles(styles.table, {gridTemplateRows: ("10vh ").repeat(props.supplyArray.length)})}>
        {props.supplyArray.map((supply, index) => {
          let imageUrl = supply.ImageArray[0];
          let supplyName = supply.Name;
          let supplyStock = supply.Stock[0].amount + " " + supply.Stock[0].unit;
          return(
            <div key={index}>
              <ReusableDataRow imageUrl={imageUrl} displayContent={[supplyName, supplyStock]}/>
            </div>
          );
        })}
      </div>
    </div>
  )
}

SupplyAllView.defaultProps = {
  supplyArray: []
}

SupplyAllView.propTypes = {
  supplyArray: PropTypes.array
}

export default SupplyAllView;