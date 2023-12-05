import React from "react";
import ModalBasic from "./ModalBasic";
import imageNew from "../images/ftedit-add.svg";

class SupplyCreateForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      imageArray: [],
      modalPosition: null,
      stock: [
        { amount: 0, unit: "units" }
      ]
    };
  }

  //Styles Functions
  generateTableStyle = (height = 1, width = 1, unit = "auto") => {
    let table = {display: "grid", gridTemplateColumns: "auto", gridTemplateRows: "auto", gap: "1em"};
    table.gridTemplateRows = (unit + " ").repeat(height);
    table.gridTemplateColumns = (unit + " ").repeat(width);
    return table;
  }

  combineStyles = (...args) => {
    let comboStyle = {};
    args.forEach(style => {
      comboStyle = {...comboStyle, ...style};
    });
    return comboStyle;
  }


  //Modal Functions
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
    }else if(direction.toLowerCase() === "negative"){
      if(currentPosition > 0){
        newPosition = currentPosition - 1;
      }
    }
    this.setState({ modalPosition: newPosition });
  }


  //State Functions
  imageArrayAdd = (newUrl) => {
    let imageArrayNew = JSON.parse(JSON.stringify(this.state.imageArray));
    imageArrayNew.push(newUrl);
    this.setState({imageArray: imageArrayNew});
  }

  imageArrayRemove = (removePosition) => {
    let imageArrayNew = JSON.parse(JSON.stringify(this.state.imageArray));
    imageArrayNew.splice(removePosition, 1);
    this.setState({imageArray: imageArrayNew});
  }

  stockObjectAdd = () => {
    let stockArrayNew = JSON.parse(JSON.stringify(this.state.stock));
    if(stockArrayNew.length <= 9){
      stockArrayNew.push({ amount: 0, unit: "units" });
      this.setState({stock: stockArrayNew});
    }
  }

  stockObjectRemove = () => {
    let stockArrayNew = JSON.parse(JSON.stringify(this.state.stock));
    if(stockArrayNew.length >= 2){
      stockArrayNew.pop();
      this.setState({stock: stockArrayNew});
    }
  }

  handleStockChange = (event) => {
    const rawName = event.target.name;
    let value = event.target.value;
    let stockArrayNew = JSON.parse(JSON.stringify(this.state.stock));
    const index = (rawName.charAt(rawName.length - 1));
    const name = rawName.slice(0, (rawName.length - 1));
    if(name === "amount"){
      value = parseFloat(value);
    }
    stockArrayNew[index][name] = value;
    this.setState({stock: stockArrayNew});
  }


  //Misc Functions
  urlSubmit = (event) => {
    event.preventDefault()
    const newUrl = event.target.urlNew.value;
    this.imageArrayAdd(newUrl);
  }

  submitFunction = (event) => {
    event.preventDefault();
    let submitBlock = {
      Name: event.target.supplyName.value,
      Location: event.target.location.value,
      Stock: JSON.parse(JSON.stringify(this.state.stock)),
      ImageArray: JSON.parse(JSON.stringify(this.state.imageArray)),
      Description: event.target.description.value,
      Comments: event.target.comments.value
    };
    console.log(submitBlock);

    event.target.supplyName.value = "";
    event.target.location.value = "";
    event.target.description.value = "";
    event.target.comments.value = "";
    this.setState({
      imageArray: [],
      stock: [{ amount: 0, unit: "units" }]
    });
  }


  render(){
    //Styles Object
    const styles = {
      table:{
        componentBase:{
          display: "grid",
          gridTemplateRows: "auto auto auto auto auto auto auto",
          gridTemplateColumns: "1fr",
          gap: "1.25em"
        },
        inputRow: {
          display: "grid",
          gridTemplateRows: "1fr",
          gridTemplateColumns: "auto 70%",
          gap: "1em"
        },
        modalBase:{
          display: "grid",
          gridTemplateRows: "auto 5%",
          gridTemplateColumns: "1fr",
          gap: "1em",
          width: "100%",
          height: "100%"
        },
      },
      gridCell:{
        label:{
          fontSize: "1.5em",
          fontWeight: "700",
          margin: "0em"
        },
        modalBody:{
          fontSize: "2em",
          margin: ".5em"
        },
        input:{
          height: "100%",
          fontSize: "1em",
          fontWeight: "500"
        }
      },
      button:{
        submit:{
          padding: "1em 1.5em",
          borderRadius: "1em",
          fontSize: "1em",
          fontWeight: "900"
        },
        effect:{
          borderRadius: "1em",
          fontSize: "1em",
          fontWeight: "700"
        }
      },
      border:{
        borderWidth: ".25em",
        borderStyle: "solid",
        borderRadius: "2em",
        padding: "1em"
      },
      inputField:{
        fontSize: "1em",
        marginLeft: ".5em",
        marginRight: ".5em"
      },
      pictureFrame:{
        background: "rgba(0, 0, 0, 0.3)",
        padding: ".5em"
      }
    }


    //Modal Display Logic
    const displayBool = (typeof this.state.modalPosition === "number") ? true : false;
    const disablePrev = (this.state.modalPosition === 0) ? true : false;
    const disableNext = (this.state.modalPosition === this.state.imageArray.length) ? true : false;
    let modalBody;
    let modalFooter = [];

    if(this.state.modalPosition < this.state.imageArray.length){ //display picture and allow deletion
      modalBody = 
        <div className="flex-center" style={{height: "100%"}}>
          <img style={styles.pictureFrame} src={this.state.imageArray[this.state.modalPosition]} alt={"Photo #" + this.state.modalPosition} />
        </div>;
    }else{ //allow input of url for display of new picture then ability to "accept" picture into array for supply
      modalBody = 
        <div className="flex-center" style={{height: "100%", width: "100%"}}>
          <form className=" shadow-border" style={this.combineStyles(this.generateTableStyle(2, 1, "auto"), styles.border, { height: "80%", width: "80%" })} onSubmit={this.urlSubmit}>
            <p className="flex-bottom" style={styles.gridCell.modalBody}>New Image Url</p>
            <div className="flex-left" style={{ flexDirection: "column" }}>
              <input
                type="url"
                name="urlNew"
                pattern="https://.*"
                placeholder="https://picsum.photos/id/237/200/300"
                className="input-field"
                style={{ width: "95%" }}
                required={true} />
              <button type="submit" className="positive-button">Add to List</button>
              <p style={{ maxWidth: "75%" }}>Please enter the specific URL for the photo you would like to add. Google Drive and Dropbox are some examples of places to host your images. <br /><br /> Google Drive image URLs should be modified as such: <br /> <span style={{fontWeight: "700", marginLeft: "30px"}}>Original:</span> https://drive.google.com/file/d/<mark>[image_id]</mark>/view?usp=drive_link <br /> <span style={{fontWeight: "700", marginLeft: "30px"}}>Modified:</span> https://drive.google.com/uc?export=view&id=<mark>[image_id]</mark> <br /><br /> Dropbox image URLs should be modified by changing the ending from <span style={{fontWeight: "700"}}>&dl=0</span> to <span style={{fontWeight: "700"}}>&raw=1</span></p>
            </div>
          </form>
        </div>;
    }
    modalFooter.push(<button key={"--"} className="shadow-button" style={styles.button.effect} onClick={() => this.modalReposition("negative")} disabled={disablePrev}>Previous</button>);
    modalFooter.push(<button key={"XX"} className="negative-button" style={styles.button.effect} onClick={() => this.imageArrayRemove(this.state.modalPosition)} disabled={disableNext}>Delete</button>)
    modalFooter.push(<button key={"++"} className="shadow-button" style={styles.button.effect} onClick={() => this.modalReposition("positive")} disabled={disableNext}>Next</button>);


    //Stock Display Logic
    const disableAddStock = (this.state.stock.length > 9) ? true : false;
    const disableRemoveStock = (this.state.stock.length < 2) ? true : false;
    let stockFormBlock = [];

    stockFormBlock = this.state.stock.map((Stock, index) => {
      return (
        <div className="flex-left" style={styles.gridCell.input} key={"Stock" + index}>
          <p>Amount:</p>
          <input
            type="number"
            name={"amount" + index}
            min={0}
            max={9999}
            step={0.01}
            value={Stock.amount}
            onChange={this.handleStockChange}
            required={true}
            className="input-field"
            style={this.combineStyles(styles.inputField, { width: "6em" })} />
          <p>Unit:</p>
          <select name={"unit" + index} className="input-field" style={styles.inputField} value={Stock.unit} onChange={this.handleStockChange}>
            <option value="inch">Inch</option>
            <option value="yard">Yard</option>
            <option value="units">Units</option>
            <option value="meter">Meter</option>
          </select>
        </div>
      )
    })


    //Return Logic
    return(
      <div className="light-box">

        <ModalBasic show={displayBool} handleClose={this.modalHide}>
          <div className="light-box" style={styles.table.modalBase}>
            {/* Modal Display Logic Render Point */}
            {modalBody}
            <div style={this.generateTableStyle(1, 3, "1fr")}>{modalFooter}</div>
          </div>
        </ModalBasic>


        <h1 className="flex-center">Input Supplies</h1>

        <div className="flex-center" style={{width: "100vw"}}>
          <form style={{width: "80vw"}} onSubmit={this.submitFunction}>
            <div className="shadow-border" style={this.combineStyles(styles.table.componentBase, styles.border)}>

              <div style={styles.table.inputRow}>
                <p className="flex-right" style={styles.gridCell.label}>Supply Name*</p>
                <div className="flex-left" style={styles.gridCell.input}>
                  <input
                    type="text"
                    name="supplyName"
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
                <p className="flex-right" style={styles.gridCell.label}>Description</p>
                <div className="flex-left" style={this.combineStyles(styles.gridCell.input, {width: "50vw"})}>
                  <textarea
                    name="description"
                    className="input-field"
                    style={this.combineStyles(styles.inputField, {minHeight: "3em", minWidth: "15em"})} />
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
                  <span tabIndex="0" className="interaction-field" style={{ height: "100%", aspectRatio: "1 / 1" }} onClick={this.modalShow} ><img src={imageNew} alt="Plus Button" title="Click to Add Images" /></span>
                  <p>You have {this.state.imageArray.length} images saved for this supply entry</p>
                </div>
              </div>

              <div style={styles.table.inputRow}>
                <div style={this.combineStyles(this.generateTableStyle(this.state.stock.length + 1, 1, "1fr"), {height: "100%"})}>
                  <p className="flex-right" style={styles.gridCell.label}>Stock*</p>
                </div>
                <div style={this.generateTableStyle(this.state.stock.length + 1, 1, "1fr")}>
                  {stockFormBlock}  {/* Stock Display Logic Render Point */}

                  <div className="flex-left" style={styles.gridCell.input}>
                    <button disabled={disableAddStock} onClick={this.stockObjectAdd} className="positive-button" style={this.combineStyles(styles.button.effect, { marginLeft: "1.5em", marginRight: "1.5em", padding: ".5em" })} type="button">Add Stock</button>
                    <button disabled={disableRemoveStock} onClick={this.stockObjectRemove} className="negative-button" style={this.combineStyles(styles.button.effect, { marginLeft: "1.5em", marginRight: "1.5em", padding: ".5em" })} type="button">Remove Stock</button>
                  </div>

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

export default SupplyCreateForm;