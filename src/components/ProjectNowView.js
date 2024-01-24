import React from "react";
import PropTypes from "prop-types";
import ReusableDataRow from "./ReusableDataRow";
import ReusableHeaderRow from "./ReusableHeaderRow";

function ProjectNowView(props) {
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
      <h2 className="flex-center">Current Projects</h2>
      <div style={combineStyles(styles.table, {gridTemplateRows: ("max(10vh, 5em) ".repeat(props.projectArray.length + 1))})}>
        <ReusableHeaderRow displayContent={["Images", "Project Name", "Expected Completion Date"]} />
        {props.projectArray.map((project, index) => {
          const imageUrl = project.ImageArray[0] ?? "";
          let projectName = project.Name;
          let projectDate = project.ProjectDate;
          const displayContent = [projectName, projectDate];
          return(
            <ReusableDataRow imageUrl={imageUrl} displayContent={displayContent} key={index} />
          );
        })}
      </div>
    </div>
  );
}

ProjectNowView.defaultProps = {
  projectArray: []
};

ProjectNowView.propTypes = {
  projectArray: PropTypes.array
};

export default ProjectNowView;