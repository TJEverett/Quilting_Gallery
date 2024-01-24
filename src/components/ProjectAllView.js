import React from "react";
import PropTypes from "prop-types";
import ReusableDataRow from "./ReusableDataRow";
import ReusableHeaderRow from "./ReusableHeaderRow";

function ProjectAllView(props) {
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

  // Misc Logic
  function backToFrontStatus(status) {
    let statusReturn = "";
    if(status === "complete"){
      statusReturn = "Finished Project";
    }else if(status === "pending"){
      statusReturn = "Pending Project";
    }else if(status === "current"){
      statusReturn = "Current Project"
    }
    return statusReturn;
  }

  // Return Logic
  return(
    <div>
      <h2 className="flex-center">Project All View</h2>
      <div style={combineStyles(styles.table, {gridTemplateRows: ("max(10vh, 5em) ".repeat(props.projectArray.length + 1))})}>
        <ReusableHeaderRow displayContent={["Images", "Project Name", "Project Status"]} />
        {props.projectArray.map((project, index) => {
          const imageUrl = project.ImageArray[0] ?? "";
          let projectName = project.Name;
          let projectStatus = backToFrontStatus(project.ProjectCategory);
          const displayContent = [projectName, projectStatus];
          return(
            <ReusableDataRow imageUrl={imageUrl} displayContent={displayContent} key={index} />
          );
        })}
      </div>
    </div>
  )
}

ProjectAllView.defaultProps = {
  projectArray: []
};

ProjectAllView.propTypes = {
  projectArray: PropTypes.array
};

export default ProjectAllView;