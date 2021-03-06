/* eslint-disable no-multi-str */
/* eslint-disable no-console */
/* eslint no-console: "error" */
import React from "react";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import axios from "axios";
import { Editor } from "@tinymce/tinymce-react";
import serialize from "form-serialize";

class Update extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fullName: "",
      description: "",
      userID: "",
      data: {},
      success: "",
      error: ""
    };

    this.update = this.update.bind(this);
    this.getUserID = this.getUserID.bind(this);
    this.varifyPassword = this.varifyPassword.bind(this);
    this.handleEditorChange = this.handleEditorChange.bind(this);
    this.submitUpdate = this.submitUpdate.bind(this);
  }

  componentDidMount() {
    // this.update();
  }

  update() {
    // make a request to the backend and update here
    const { userID } = this.state;
    axios
      .get("https://eazsme-backend.herokuapp.com//user/" + userID)
      .then((data) => this.setState({ data }))
      .catch((error) => console.log(error));
  }

  getUserID(event) {
    event.preventDefault();
    this.setState({ userID: event.target.value });
    this.update();
  }

  varifyPassword(event) {
    event.preventDefault();
    const value = event.target.value;
    // axios.get("http://localhost:4000")  make a request for a password and use it to verify password
  }

  handleEditorChange(e) {
    this.setState({ description: e.target.getContent() });
    console.log("Content was updated:", e.target.getContent());
  }

  submitUpdate(e) {
    e.preventDefault();
    const form = document.querySelector(`form[name="update"]`)
    const formFields = serialize(form, {hash: true});
    axios.patch("http://localhost:400/update", formFields)
    .then((data) => {
      if(data.status === "success") {
        this.setState({success: "Update was successful!"});
      }else {
        this.setState({error: "Error performing update"});
      }
    })
    .catch((error) => console.log(error));
  }

  render() {
    const { data, success, error } = this.state;
    const { fullName, description } = data;
    return (
      <Card.Body>
         {success ? (
          <Form.Text className="text-bold text-success">{success}</Form.Text>
        ) : (
          <Form.Text className="text-bold text-danger">{error}</Form.Text>
        )}
        <Row>
          <Col md="4">
            <Image src="holder.js/100px250" fluid />
          </Col>
          <Col md="8">
            <Form name="update">
              <Form.Group controlId="fullName">
                <Form.Label>Full Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Full name"
                  name="fullName"
                  defaultValue={fullName}
                  onChange={this.getUserID}
                />
              </Form.Group>

              <Form.Group>
                <Form.Label>Description</Form.Label>
                <Editor
                  apiKey="oym93hgea69gv4o5cjoxfc1baobo49f82d4ah9j66v3n955r"
                  initialValue={this.state.description}
                  init={{
                    height: 200,
                    menubar: false,
                    plugins: [
                      "advlist autolink lists link image",
                      "charmap print preview anchor help",
                      "searchreplace visualblocks code",
                      "insertdatetime media table paste wordcount"
                    ],
                    toolbar:
                      "undo redo | formatselect | bold italic | \
                    alignleft aligncenter alignright | \
                    bullist numlist outdent indent | help"
                  }}
                  onChange={this.handleEditorChange}
                  name="description"
                />
              </Form.Group>

              <Form.Text>Change password</Form.Text>
              <Form.Group controlId="password">
                <Form.Label>Old Password</Form.Label>
                <Form.Control type="password" placeholder="Password" name="oldPassword" onBlur={this.varifyPassword} />
              </Form.Group>

              <Form.Text>Change password</Form.Text>
              <Form.Group controlId="newPassword">
                <Form.Label>New Password</Form.Label>
                <Form.Control type="password" placeholder="New Password" name="newPassword" />
              </Form.Group>

              <Form.Text>Change password</Form.Text>
              <Form.Group controlId="confirmPassword">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control type="password" placeholder="Confirm Password" name="confirmPassword" />
              </Form.Group>

              <Button variant="primary" type="submit" onClick={this.submitUpdate}>
                Update User
              </Button>
            </Form>
          </Col>
        </Row>
      </Card.Body>
    );
  }
}
export default Update;
