import React from "react";
import PropTypes from "prop-types";
import imageFail from "../images/mcol_cross.svg";

class Image extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      src: props.src,
      errored: false
    };
  }

  onError = () => {
    if(!this.state.errored){
      this.setState({
        src: imageFail,
        errored: true
      });
    }
  }

  render(){
    return(
      <img
        onError={this.onError}
        src={this.state.src || imageFail}
        alt={this.props.alt}
        title={this.props.title}
        className={this.props.classes}
        style={this.props.styles}
      />
    )
  }
}

Image.defaultProps = {
  src: "",
  alt: "",
  title: "",
  classes: "",
  styles: {}
};

Image.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  title: PropTypes.string,
  classes: PropTypes.string,
  styles: PropTypes.object
};

export default Image