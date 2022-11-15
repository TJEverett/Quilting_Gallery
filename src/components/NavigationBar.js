import React from "react";
import "../CSS/DropMenu.css";
import { Link } from "react-router-dom";

function NavigationBar(){
  //Styles Object
  const styles = {
    general: {
      position: "fixed",
      top: "0",
      width: "100vw",
      height: "86px"
    },
    text: {
      backgroundColor: "black",
      color: "wheat",
    },
    enlarge: {
      fontSize: "2em",
      fontWeight: "bold"
    }
  };

  //Styles Function
  function tableCreator(rows, columns){
    const table = {
      display: "grid",
      gridTemplateColumns: "auto ".repeat(columns),
      gridTemplateRows: "auto ".repeat(rows)
    };
    return table;
  }

  //Return Logic
  return(
    <div style={{...styles.general, ...styles.text}}>
      <div style={tableCreator(1, 2)}>
        <div>
          <h1 className="center">Quilting Gallery</h1>
        </div>
        <div style={tableCreator(1, 3)}>
          <div className="dropdown">
            <button className="dropButton" style={{...styles.enlarge, ...styles.text}}>Projects</button>
            <div className="dropdown-content">
              <Link to="/projects/all" style={styles.text}>All Projects</Link>
              <Link to="/projects/done" style={styles.text}>Finished Projects</Link>
              <Link to="/projects/now" style={styles.text}>Current Projects</Link>
              <Link to="/projects/soon" style={styles.text}>Pending Projects</Link>
              <Link to="/projects/new" style={styles.text}>New Project</Link>
            </div>
          </div>
          <div className="dropdown">
            <button className="dropButton" style={{...styles.enlarge, ...styles.text}}>Supplies</button>
            <div className="dropdown-content">
              <Link to="/supplies/all" style={styles.text}>All Supplies</Link>
              <Link to="/supplies/new" style={styles.text}>Add Supplies</Link>
            </div>
          </div>
          <div className="dropdown">
            <button className="dropButton" style={{...styles.enlarge, ...styles.text}}>Account</button>
            <div className="dropdown-content">
              <Link to="/account" style={styles.text}>Change User</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NavigationBar;