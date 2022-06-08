import React, { Component } from "react";
import List from "./List";
import Form from "./Form";
import { NavLink } from "react-bootstrap";

class Contact extends Component {
  state = {
    contacts: [
      { name: "Liam", phone: "914-949-4402" },
      { name: "Jamal", phone: "721-347-7255" },
      { name: "Alexandrine", phone: "877-347-6633" },
      { name: "Dawson", phone: "358-403-7231" },
      { name: "Jane", phone: "402-729-5405" },
    ],
    age: 12,
  };
  render() {
    const deleteList = () => {
      this.setState({ contacts: [] });
    }
    const addContact = (data) => {
      console.log("Form onSubmit FUNC-PARENT Params:", data);
      const { contacts } = this.state;
      //console.log("Contacts Old::",contacts)
      contacts.push(data);
      //console.log("Contacts New::",contacts)
      //this.setState({ contacts: contacts })
      this.setState({ contacts });
    };
    console.log("CONTACTS.JS STATE:::", this.state);

    return (
      <div style={{padding:"20px"}}>
        <div style={{marginBottom:"10px" ,display:"flex",justifyContent:"space-evenly",alignItems:"center"}}>
        <h2 style={{color:"darkblue"}}><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-telephone-fill" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/>
</svg> Phone Book </h2>
         <NavLink href="https://www.github.com/huseyinbattal" target="_blank"> <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="purple" class="bi bi-github" viewBox="0 0 16 16">
  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
</svg></NavLink>
        </div>
        <List contacts={this.state.contacts} />
        <Form deleteList={deleteList} addContact={addContact} />
      </div>
    );
  }
}

export default Contact;
