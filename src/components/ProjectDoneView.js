import React from "react";
import PropTypes from "prop-types";
import ReusableDataRow from "./ReusableDataRow";

function ProjectDoneView(props) {
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
      <h2 className="flex-center">Finished Projects</h2>
      <div style={combineStyles(styles.table, {gridTemplateRows: ("10vh ".repeat(props.projectArray.length))})}>
        {props.projectArray.map((project, index) => {
          const  imageUrl = project.ImageArray[0] ?? "";
          let projectName = project.Name;
          let projectDate = project.ProjectDate;
          let projectRecipient = project.Recipient;
          const displayContent = [projectName, projectDate, projectRecipient];
          return(
            <ReusableDataRow imageUrl={imageUrl} displayContent={displayContent} key={index} />
          )
        })}
      </div>
    </div>
  );
}

ProjectDoneView.defaultProps = {
  projectArray: []
};

ProjectDoneView.propTypes = {
  projectArray: PropTypes.array
};

export default ProjectDoneView;