import React, { Component } from "react";

export default class Form extends Component {
  state = { name: "", phone: "" };
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
      const onChangeFunc=(e)=>{this.setState({[e.target.name]:e.target.value})}
    const formInputStyle = {
      marginTop: "10px",
      height: "30px",
      lineHheight: "25px",
      width: "400px",
      textIndent: "10px",
    };
      console.log(this.props)
      const onSubmitFunc = (event) => {
        event.preventDefault();
  if (this.state.name==="" || this.state.phone==="") {
    alert("Name or phone not be blank!!!")
  } else {
    console.log("Form onSubmit FUNC-CHILD")
    this.props.addContact({ ...this.state })
    this.setState({name:"",phone:""})
  }
      }
    return (
      <div>
        <form onSubmit={onSubmitFunc} style={{ width: "400px", margin: "0 auto", padding: "0" }}>
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
          <button style={{marginTop:"10px"}} type="submit">Add</button>
        </form>
      </div>
    );
  }
}
