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
    <div style={styles.general} onClick={(event) => {event.target.blur()}}>
      <div style={tableCreator(1, 2)}>
        <div className="shadow-box">
          <h1 className="flex-center"><Link to="/" className="shadow-box" style={{textDecoration: "none"}}>Quilting Gallery</Link></h1>
        </div>
        <div className="shadow-box" style={tableCreator(1, 3)}>
          <div className="dropdown">
            <button className="dropButton shadow-box" style={styles.enlarge}>Projects</button>
            <div className="dropdown-content">
              <Link to="/projects/all" className="shadow-box">All Projects</Link>
              <Link to="/projects/done" className="shadow-box">Finished Projects</Link>
              <Link to="/projects/now" className="shadow-box">Current Projects</Link>
              <Link to="/projects/soon" className="shadow-box">Pending Projects</Link>
              <Link to="/projects/new" className="shadow-box">New Project</Link>
            </div>
          </div>
          <div className="dropdown">
            <button className="dropButton shadow-box" style={styles.enlarge}>Supplies</button>
            <div className="dropdown-content">
              <Link to="/supplies/all" className="shadow-box">All Supplies</Link>
              <Link to="/supplies/new" className="shadow-box">Add Supplies</Link>
            </div>
          </div>
          <div className="dropdown">
            <button className="dropButton shadow-box" style={styles.enlarge}>Account</button>
            <div className="dropdown-content">
              <Link to="/account" className="shadow-box">Change User</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NavigationBar;