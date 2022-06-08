import React, { Component } from "react";
import List from "./List";
import Form from "./Form";

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
    const chgnState = () => {
      this.setState({ age: 21 });
    };

    return (
      <div>
        <h1>Phone Book</h1>
        <List contacts={this.state.contacts} />
        <Form addContact={addContact} />
      </div>
    );
  }
}

export default Contact;
