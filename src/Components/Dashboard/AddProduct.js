import React, { Component } from "react";
import { collection, addDoc } from "firebase/firestore";
import { app, database } from "../../index";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

export default class AddProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      AdImage: "",
      approved: false,
      company: "",
      status: false,
      tagline: "",
      version: "",
    };
  }

  addProduct = () => {
    addDoc(collection(database, "collaterals"), {
      AdImage: this.state.AdImage,
      approved: this.state.approved,
      company: this.state.company,
      status: this.state.status,
      tagline: this.state.tagline,
      version: this.state.version,
    })
      .then(() => {
        alert("Product Added");
      })
      .catch((error) => {
        alert(error);
      });
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  // handleSubmit=(e)=>{
  //     e.preventDefault();
  //     addDoc();
  //     alert("Product added");
  // }

  render() {
    return (
      <div>
        <Form
          onSubmit={this.handleSubmit}
          style={{ width: "40vw", margin: "30px" }}
        >
          <Form.Group className="mb-3" controlId="formTagline">
            <Form.Label>Tagline</Form.Label>
            <Form.Control
              type="string"
              name="tagline"
              value={this.state.tagline}
              placeholder="Enter Tagline"
              onChange={this.handleChange}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formAdImage">
            <Form.Label>Ad Image</Form.Label>
            <Form.Control
              type="string"
              name="AdImage"
              placeholder="Enter image link"
              value={this.state.AdImage}
              onChange={this.handleChange}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formcompany">
            <Form.Label>Company</Form.Label>
            <Form.Control
              type="string"
              name="company"
              placeholder="Enter company name"
              value={this.state.company}
              onChange={this.handleChange}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="Approved">
            <Form.Label>Approved</Form.Label>
            <br></br>
            <Form.Check
              inline
              label="Yes"
              name="group1"
              type="radio"
              onChange={this.handleChange}
            />
            <Form.Check
              inline
              label="No"
              name="group1"
              type="radio"
              onChange={this.handleChange}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formAdImage">
            <Form.Label>Version </Form.Label>
            <Form.Control
              type="string"
              name="version"
              placeholder="Enter version"
              value={this.state.version}
              onChange={this.handleChange}
            />
          </Form.Group>

          <Button variant="primary" type="submit" onClick={this.addProduct}>
            Add product
          </Button>
        </Form>
      </div>
    );
  }
}
