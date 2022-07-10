import React from "react";
import GlitchClip from "react-glitch-effect/core/Clip";
import { Button, Container, Form, FormGroup, Input } from "reactstrap";

export default class MyForm extends React.Component {
  constructor(props: {
    submitForm: void;
    state: { magicNumber: number; status: string };
  }) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
    this.state = {
      magicNumber: 0,
      status: "",
    };
  }

  render() {
    const { status, magicNumber } = this.state;
    return (
      <Container id="contact" fluid={true} style={styles.container}>
        <Container>
          <h2 style={styles.header}>
            Send us<GlitchClip onHover> a message</GlitchClip> :
          </h2>

          <Form
            onSubmit={this.submitForm}
            action="https://formspree.io/f/mdopwyld"
            method="POST"
          >
            <FormGroup style={styles.body}>
              <Input type="email" name="email" placeholder="Your email" />
              <Input
                type="textarea"
                name="message"
                placeholder="Your message"
              />
            </FormGroup>
            <FormGroup style={styles.submitButtons}>
              <Button
                onClick={() =>
                  this.setState({
                    magicNumber:
                      this.state.magicNumber !== 13
                        ? this.state.magicNumber + 1
                        : 13,
                  })
                }
              >
                press this button 3 times for good luck: {magicNumber}
              </Button>
              {status === "ERROR" && (
                <h4 style={styles.oops}>
                  Ooops! There was an error, wanna try again?
                </h4>
              )}
              {magicNumber === 3 && status === "SUCCESS" ? (
                <GlitchClip>
                  <h4>Thanks!</h4>
                </GlitchClip>
              ) : (
                <Button disabled={magicNumber !== 3}>submit</Button>
              )}
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
  header: {
    alignItems: "center",
    textAlign: "center",
  },
  container: {
    alignItems: "center",
    display: "flex",
    minHeight: "10vh",
    padding: "0.4rem 0.4rem",

    textShadow: "1px 1px rgba(0, 0, 0, 0.4)",
  },
  body: {
    alignItems: "center",
    textShadow: "1px 1px rgba(0, 0, 0, 0.4)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    padding: "0 0.25rem",
  },
  submitButtons: {
    display: "flex",
    justifyContent: "space-between",
  },
  oops: {
    padding: "2rem 1rem",
  },
};
