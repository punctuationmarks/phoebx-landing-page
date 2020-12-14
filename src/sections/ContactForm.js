// Customize this 'myform.js' script and add it to your JS bundle.
// Then import it with 'import MyForm from "./myform.js"'.
// Finally, add a <MyForm/> element whereever you wish to display the form.

import React from "react";

import {
  Button,
  Container,
  Form,
  FormGroup,
//   FormText,
//   Label,
  Input,
} from "reactstrap";

export default class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
    this.state = {
      status: "",
    };
  }

  render() {
    const { status } = this.state;
    return (
      <Container id="contact" fluid={true} style={styles.container}>
        <h3>Send us a message :</h3>
        <Container>
        <Form
          onSubmit={this.submitForm}
          action="https://formspree.io/f/mdopwyld"
          method="POST"
        >
          <FormGroup style={styles.body}>
            <Input type="email" name="email" placeholder="Your email"/>
            <Input type="textarea" name="message" placeholder="Your message" />
            
          </FormGroup>
          <FormGroup>
            {status === "SUCCESS" ? <p>Thanks!</p> : <Button>Submit</Button>}
            {status === "ERROR" && <p>Ooops! There was an error.</p>}
            </FormGroup>
        </Form>
        </Container>
      </Container>
    );
  }

  submitForm(ev) {
    ev.preventDefault();
    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        this.setState({ status: "SUCCESS" });
      } else {
        this.setState({ status: "ERROR" });
      }
    };
    xhr.send(data);
  }
}

const styles = {
  container: {
    alignItems: "center",
    backgroundColor: "#2e7c3870",
    // "#2e7c38c2",

    display: "flex",
    // justifyContent: "center",
    // margin: "0 1.25rem",

    minHeight: "10vh",
    padding: "0.4rem 0.4rem",

    color: "rgb(225, 225, 225)",

    textShadow: "1px 1px rgba(0, 0, 0, 0.4)",
    // width: "25%"
  },
  body: {
    alignItems: "center",
    color: "rgb(225, 225, 225)",

    textShadow: "1px 1px rgba(0, 0, 0, 0.4)",
    display: "flex",
    flexDirection: "column",
    // fontSize: "calc(1.5rem + 2vmin)",
    justifyContent: "center",
    padding: "0 0.25rem",
    // textShadow: "1px 1px rgba(0, 0, 0, 0.4)",
  },
};
