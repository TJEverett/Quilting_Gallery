import React from "react";
import imageNew from "../images/ftedit-add.svg"
import ModalBasic from "./ModalBasic";

class ProjectCreateForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      imageArray: [],
      modalPosition: null
    };
  }

  // Styles Functions
  combineStyles = (...args) => {
    let comboStyle = {};
    args.forEach(style => {
      comboStyle = {...comboStyle, ...style};
    });
    return comboStyle;
  }

  generateTableStyle = (height = 1, width = 1, unit = "auto") => {
    let table = {display: "grid", gridTemplateColumns: "auto", gridTemplateRows: "auto", gap: "1em"};
    table.gridTemplateRows = (unit + " ").repeat(height);
    table.gridTemplateColumns = (unit + " ").repeat(width);
    return table;
  }


  // Modal Functions
  modalShow = () => {
    this.setState({modalPosition: 0});
  }

  modalHide = () => {
    this.setState({modalPosition: null});
  }

  modalReposition = (direction) => {
    const pictureCount = this.state.imageArray.length;
    const currentPosition = this.state.modalPosition;
    let newPosition = currentPosition;
    if(direction.toLowerCase() === "positive"){
      if(currentPosition < pictureCount){
        newPosition = currentPosition + 1;
      }
    } else if(direction.toLowerCase() === "negative"){
      if(currentPosition > 0){
        newPosition = currentPosition - 1;
      }
    }
    this.setState({modalPosition: newPosition});
  }


  // State Functions
  imageArrayAdd = (newUrl) => {
    let imageArrayNew = JSON.parse(JSON.stringify(this.state.imageArray));
    imageArrayNew.push(newUrl);
    this.setState({imageArray: imageArrayNew})
  }

  imageArrayRemove =(removePosition) => {
    let imageArrayNew = JSON.parse(JSON.stringify(this.state.imageArray));
    imageArrayNew.splice(removePosition, 1);
    this.setState({imageArray: imageArrayNew});
  }


  // Misc Functions
  urlSubmit = (event) => {
    event.preventDefault();
    const newUrl = event.target.urlNew.value;
    this.imageArrayAdd(newUrl);
  }

  submitFunction = (event) => {
    event.preventDefault();
    const submitDate = new Date(event.target.completionDate.value + ", 0:00:00");
    let submitBlock = {
      Name: event.target.patternName.value,
      Location: event.target.location.value,
      Recipient: event.target.recipient.value,
      Comments: event.target.comments.value,
      ImageArray: JSON.parse(JSON.stringify(this.state.imageArray)),
      ProjectCategory: event.target.category.value,
      ProjectDate: (submitDate.toUTCString()).slice(0, 16),
      ProjectPercentage: parseInt(event.target.completionPercent.value)
    };
    console.log(submitBlock);

    event.target.patternName.value = "";
    event.target.location.value = "";
    event.target.recipient.value = "";
    event.target.comments.value = "";
    event.target.category.value = "pending";
    event.target.completionDate.value = "";
    event.target.completionPercent.value = 0;
    this.setState({imageArray: []});
  }


  render(){
    // Styles Object
    const styles = {
      table: {
        componentBase: {
          display: "grid",
          gridTemplateRows: "auto auto auto auto auto auto auto auto",
          gridTemplateColumns: "1fr",
          gap: "1.25em"
        },
        inputRow: {
          display: "grid",
          gridTemplateRows: "1fr",
          gridTemplateColumns: "auto 70%",
          gap: "1em"
        },
        modalBase: {
          display: "grid",
          gridTemplateRows: "auto 5%",
          gridTemplateColumns: "1fr",
          gap: "1em",
          width: "100%",
          height: "100%"
        }
      },
      gridCell: {
        label: {
          fontSize: "1.5em",
          fontWeight: "700",
          margin: "0em"
        },
        input: {
          height: "100%",
          fontSize: "1em",
          fontWeight: "500"
        },
        modalBody: {
          fontSize: "2em",
          margin: ".5em"
        }
      },
      button: {
        submit: {
          padding: "1em 1.5em",
          borderRadius: "1em",
          fontSize: "1em",
          fontWeight: "900"
        },
        effect: {
          borderRadius: "1em",
          fontSize: "1em",
          fontWeight: "700"
        }
      },
      border: {
        borderWidth: ".25em",
        borderStyle: "solid",
        borderRadius: "2em",
        padding: "1em"
      },
      inputField: {
        fontSize: "1em",
        marginLeft: ".5em",
        marginRight: ".5em"
      },
      pictureFrame: {
        background: "rgba(0, 0, 0, 0.3)",
        padding: ".5em"
      }
    };


    // Modal Display Logic (Build Point)
    const displayBool = (typeof this.state.modalPosition === "number") ? true : false;
    const disablePrev = (this.state.modalPosition === 0) ? true : false;
    const disableNext = (this.state.modalPosition === this.state.imageArray.length) ? true : false;
    let modalBody;
    let modalFooter = [];

    if(this.state.modalPosition < this.state.imageArray.length){//display picture rendered from URL in state array and allow deletion
      modalBody = 
        <div className="flex-center" style={{height: "100%"}}>
          <img style={styles.pictureFrame} src={this.state.imageArray[this.state.modalPosition]} alt={"Photo #" + this.state.modalPosition} />
        </div>;
    }else{//allow input of URL for rendering a picture that will be added to the state array 
      modalBody = 
        <div className="flex-center" style={{height: "100%", width: "100%"}}>
          <form className="shadow-border" style={this.combineStyles(this.generateTableStyle(2, 1, "auto"), styles.border, {height: "80%", width: "80%"})} onSubmit={this.urlSubmit}>
            <p className="flex-bottom" style={styles.gridCell.modalBody}>New Image Url</p>
            <div className="flex-left" style={{flexDirection: "column"}}>
              <input
                type="url"
                name="urlNew"
                pattern="https://.*"
                placeholder="https://picsum.photos/id/237/200/300"
                className="input-field"
                style={{width: "95%"}}
                required={true} />
              <button type="submit" className="positive-button">Add to List</button>
              <p style={{maxWidth: "75%"}}>Please enter the specific URL for the photo you would like to add. Google Drive and Dropbox are some examples of places to host your images. <br /><br /> Google Drive image URLs should be modified as such: <br /> <span style={{fontWeight: "700", marginLeft: "30px"}}>Original:</span> https://drive.google.com/file/d/<mark>[image_id]</mark>/view?usp=drive_link <br /> <span style={{fontWeight: "700", marginLeft: "30px"}}>Modified:</span> https://drive.google.com/uc?export=view&id=<mark>[image_id]</mark> <br /><br /> Dropbox image URLs should be modified by changing the ending from <span style={{fontWeight: "700"}}>&dl=0</span> to <span style={{fontWeight: "700"}}>&raw=1</span></p>
            </div>
          </form>
        </div>;
    }
    modalFooter.push(<button key={"--"} className="shadow-button" style={styles.button.effect} onClick={() => this.modalReposition("negative")} disabled={disablePrev}>Previous</button>);
    modalFooter.push(<button key={"XX"} className="negative-button" style={styles.button.effect} onClick={this.imageArrayRemove} disabled={disableNext}>Delete</button>);
    modalFooter.push(<button key={"++"} className="shadow-button" style={styles.button.effect} onClick={() => this.modalReposition("positive")} disabled={disableNext}>Next</button>);


    // Return Logic
    return(
      <div className="light-box">

        <ModalBasic show={displayBool} handleClose={this.modalHide} >
          <div className="light-box" style={styles.table.modalBase}>
            {/* Modal Display Logic (Render Point) */}
            {modalBody}
            <div style={this.generateTableStyle(1, 3, "1fr")}>{modalFooter}</div>
          </div>
        </ModalBasic>

        <h1 className="flex-center">Input Project</h1>

        <div className="flex-center" style={{width: "100vw"}}>
          <form style={{width: "80vw"}} onSubmit={this.submitFunction}>
            <div className="shadow-border" style={this.combineStyles(styles.table.componentBase, styles.border)}>

              <div style={styles.table.inputRow}>
                <p className="flex-right" style={styles.gridCell.label}>Pattern<br/>Name*</p>
                <div className="flex-left" style={styles.gridCell.input}>
                  <input
                    type="text"
                    name="patternName"
                    className="input-field"
                    style={styles.inputField}
                    required={true} />
                </div>
              </div>

              <div style={styles.table.inputRow}>
                <p className="flex-right" style={styles.gridCell.label}>Location*</p>
                <div className="flex-left" style={styles.gridCell.input}>
                  <input
                    type="text"
                    name="location"
                    className="input-field"
                    style={styles.inputField}
                    required={true} />
                </div>
              </div>

              <div style={styles.table.inputRow}>
                <p className="flex-right" style={styles.gridCell.label}>Recipient</p>
                <div className="flex-left" style={styles.gridCell.input}>
                  <input
                    type="text"
                    name="recipient"
                    className="input-field"
                    style={styles.inputField} />
                </div>
              </div>

              <div style={styles.table.inputRow}>
                <p className="flex-right" style={styles.gridCell.label}>Comments</p>
                <div className="flex-left" style={this.combineStyles(styles.gridCell.input, {width: "50vw"})}>
                  <textarea
                    name="comments"
                    className="input-field"
                    style={this.combineStyles(styles.inputField, {minHeight: "3em", minWidth: "15em"})} />
                </div>
              </div>

              <div style={styles.table.inputRow}>
                <p className="flex-right" style={styles.gridCell.label}>Photos</p>
                <div className="flex-left" style={this.combineStyles(styles.gridCell.input, {height: "10vh"})}>
                  <span tabIndex="0" className="interaction-field" style={{height: "100%", aspectRatio: "1 / 1"}} onClick={this.modalShow}><img src={imageNew} alt="Plus Button" title="Click to Add Images" /></span>
                  <p>You have {this.state.imageArray.length} images saved for this supply entry</p>
                </div>
              </div>

              <div style={styles.table.inputRow}>
                <p className="flex-right" style={styles.gridCell.label}>Project<br/>Status*</p>
                <div className="flex-left" style={styles.gridCell.input}>
                  <p>Status:</p>
                  <select name="category" className="input-field" style={styles.inputField}>
                    <option value="pending">Pending</option>
                    <option value="current">Current</option>
                    <option value="complete">Complete</option>
                  </select>
                  <p>Completion Date:</p>
                  <input
                    type="date"
                    name="completionDate"
                    min="1000-01-01"
                    max="2999-12-31"
                    title="Goal / Finished Date"
                    className="input-field"
                    style={styles.inputField}
                    required={true} />
                </div>
              </div>

              <div style={styles.table.inputRow}>
                <p className="flex-right" style={styles.gridCell.label}>Completion<br/>Percentage*</p>
                <div className="flex-left" style={styles.gridCell.input}>
                  <input
                    type="number"
                    name="completionPercent"
                    min={0}
                    max={100}
                    step={1}
                    defaultValue={0}
                    className="input-field"
                    style={styles.inputField}
                    required={true} />
                </div>
              </div>

              <div className="flex-right">
                <button className="shadow-button" style={styles.button.submit} type="submit">Submit</button>
              </div>

            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default ProjectCreateForm;