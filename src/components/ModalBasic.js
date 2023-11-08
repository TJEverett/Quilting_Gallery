import React from "react";
import PropTypes from "prop-types";
import closeImage from "../images/mcol_cross.svg";

function ModalBasic(props) {
  //Style Object
  const styles = {
    base: {
      position: "fixed",
      top: "0",
      left: "0",
      width: "100%",
      height: "100%",
      background: "rgba(0, 0, 0, 0.6)"
    },
    internal: {
      position: "fixed",
      background: "white",
      width: "80vw",
      height: "80vh",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)"
    },
    exit: {
      display: "flex",
      position: "fixed",
      zIndex: "2",
      width: "100%",
      height: "2.25rem",
      justifyContent: "right"
    },
    border: {
      position: "relative",
      zIndex: "1",
      padding: "2.5rem",
      height: "calc(100% - 5rem)",
      width: "calc(100% - 5rem)"
    }
  }

  //Style Logic
  const modalOuterStyle = props.show ? { ...styles.base, display: "block" } : { ...styles.base, display: "none" };

  return(
    <div style={modalOuterStyle} onClick={() => {props.handleClose()}}>
      <div style={styles.internal} onClick={(event) => {event.stopPropagation()}}>
        <div style={styles.exit}>
          <span style={{height: "100%", aspectRatio: "1 / 1"}} tabIndex="0" className="interaction-field" onClick={() => props.handleClose()} >
            <img src={closeImage} alt="Close" title="Close" />
          </span>
        </div>
        <div className="center light-box" style={styles.border}>
          {props.children}
        </div>
      </div>
    </div>
  )
}

ModalBasic.defaultProps = {
  handleClose: () => {console.log("no function supplied to ModalBasic")},
  show: false
};

ModalBasic.propTypes = {
  handleClose: PropTypes.func,
  show: PropTypes.bool,
  children: PropTypes.any
};

export default ModalBasic;

//NOTES FOR USE:
// - modal is fixed at 80% X 80% of screen size
// - modal has a 2.5rem padding around all sides
// - contents passed to modal are not resized by modal before being displayed
// - contents loaded inside a <div> with defined {height, width}
// - clicking outside of modal will close the same as clicking the closing <image>