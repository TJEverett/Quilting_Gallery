import React from "react";
import PropTypes from "prop-types";
import ReusableDataRow from "./ReusableDataRow";
import ReusableHeaderRow from "./ReusableHeaderRow";

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
      <div style={combineStyles(styles.table, {gridTemplateRows: ("max(10vh, 5em) ").repeat(props.supplyArray.length + 1)})}>
        <ReusableHeaderRow displayContent={["Images", "Supply Name", "Stock"]} />
        {props.supplyArray.map((supply, index) => {
          const  imageUrl = supply.ImageArray[0] ?? "";
          let supplyName = supply.Name;
          let supplyStock = supply.Stock[0].amount + " " + supply.Stock[0].unit;
          const displayContent = [supplyName, supplyStock];
          return(
            <ReusableDataRow imageUrl={imageUrl} displayContent={displayContent} key={index} />
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