import React from "react";
import PropTypes from "prop-types";
import ReusableDataRow from "./ReusableDataRow";

function ProjectSoonView(props){
  // Style Object
  const styles = {
    table: {
      display: "grid",
      gridTemplateColumns: "1fr",
      gap: ".5em"
    }
  };

  // Style Logic
  function combineStyles(...args){
    let comboStyle = {};
    args.forEach(style => {
      comboStyle = {...comboStyle, ...style};
    });
    return comboStyle;
  }

  // Return Logic
  return(
    <div>
      <h2 className="flex-center">Pending Projects</h2>
      <div style={combineStyles(styles.table, {gridTemplateRows: ("10vh ".repeat(props.projectArray.length))})}>
        {props.projectArray.map((project, index) => {
          let imageUrl = project.ImageArray[0] ?? "https://www.google.com/";
          let projectName = project.Name;
          return(
            <div key={index}>
              <ReusableDataRow imageUrl={imageUrl} displayContent={[projectName, ""]} />
            </div>
          );
        })}
      </div>
    </div>
  )
}

ProjectSoonView.defaultProps = {
  projectArray: []
}

ProjectSoonView.propTypes = {
  projectArray: PropTypes.array
}

export default ProjectSoonView;