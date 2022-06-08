import { Button } from "react-bootstrap";
import React, { Component } from "react";
import AlertComp from "./AlertComp";

export default class Form extends Component {
  state = { name: "", phone: "", i: 0 };
  /*constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
  }
  onChange(e) {
    console.log("Writing....", e.target.value);
    if (e.target.name === "name") {
      this.setState({ name: e.target.value });
    }
    if (e.target.name === "phone") {
      this.setState({ phone: e.target.value });
    }
      
  }*/
  render() {
    const onChangeFunc = (e) => {
      this.setState({ [e.target.name]: e.target.value });
      this.setState({ i: 0 });
    };
    const buttonStyle = {
      width: "30%",
      marginTop: "30px",
      marginBottom: "10px",
      marginLeft:"5px"
}

    const formInputStyle = {
      marginTop: "10px",
      height: "30px",
      lineHheight: "25px",
      width: "400px",
      textIndent: "10px",
    };
    console.log(this.props);
  
    const onSubmitFunc = (event) => {
      event.preventDefault();
      if (this.state.name === "" || this.state.phone === "") {
        this.setState({ i: 1 });
      } else {
        console.log("Form onSubmit FUNC-CHILD");
        this.props.addContact({ ...this.state });
        this.setState({ name: "", phone: "" });
        this.setState({ i: 0 });
      }
    };
    return (
      <div>
        <form
          onSubmit={onSubmitFunc}
          style={{ width: "400px", margin: "0 auto", padding: "0" }}
        >
          <input
            style={formInputStyle}
            name="name"
            id="name"
            placeholder="Enter a name..."
            value={this.state.name}
            onChange={onChangeFunc}
          ></input>
          <br />
          <input
            style={formInputStyle}
            name="phone"
            id="phone"
            placeholder="Enter a phone..."
            value={this.state.phone}
            onChange={onChangeFunc}
          ></input>
          <div>{this.state.i === 1 ? <AlertComp /> : ""}</div>
          <Button
            style={buttonStyle}
            className="btn btn-success"
            type="submit"
          >
            Add
          </Button>

          <Button
            className="btn btn-danger"
            style={buttonStyle}
          onClick={this.props.deleteList}
          >
            Clear All
          </Button>
        </form>
      </div>
    );
  }
}
