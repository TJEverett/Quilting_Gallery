import React from "react";
import PropTypes from "prop-types";
import ReusableDataRow from "./ReusableDataRow";

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
      <div style={combineStyles(styles.table, {gridTemplateRows: ("10vh ".repeat(props.projectArray.length))})}>
        {props.projectArray.map((project, index) => {
          let imageUrl = project.ImageArray[0] ?? "https://www.google.com/";
          let projectName = project.Name;
          let projectStatus = backToFrontStatus(project.ProjectCategory);
          return(
            <div key={index}>
              <ReusableDataRow imageUrl={imageUrl} displayContent={[projectName, projectStatus]} />
            </div>
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