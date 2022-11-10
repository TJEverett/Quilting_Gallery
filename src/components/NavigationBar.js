import React from "react";

function NavigationBar(){
  //Styles Object
  const styles = {
    general: {
      backgroundColor: "black",
      color: "wheat",
      position: "fixed",
      top: "0",
      width: "100vw",
      height: "86px"
    },
    dropdown: {
      position: "relative",
      display: "inline-block"
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
    <div style={styles.general}>
      <div style={tableCreator(1, 2)}>
        <h1 className="center">test</h1>
        <div style={tableCreator(1, 3)}>
          <h3 className="center">ONE</h3>
          <h3 className="center">TWO</h3>
          <h3 className="center">THREE</h3>
        </div>
      </div>
    </div>
  )
}

export default NavigationBar;