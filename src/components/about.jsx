import React, { Component } from "react";

export class about extends Component {
  render() {
    return (
      <div id="about">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-md-6">
              {" "}
              <img
                src="img/hello-door.jpg"
                className="img-responsive"
                alt="Hello, about section"
              />{" "}
            </div>
            <div className="col-xs-12 col-md-6">
              <div className="about-text">
                <h2>About Us</h2>
                <p>
                  {this.props.data ? this.props.data.paragraph : "loading..."}
                </p>
                <h3>Technologies we use</h3>
                <div className="list-style">
                  <div className="col-lg-6 col-sm-6 col-xs-12">
                    <ul>
                      {this.props.data
                        ? this.props.data.techStack.map((data, index) => (
                            <li key={`${data}-${index}`}>{data}</li>
                          ))
                        : "loading"}
                    </ul>
                  </div>
                  <div className="col-lg-6 col-sm-6 col-xs-12">
                    <ul>
                      {this.props.data
                        ? this.props.data.techStack1.map((data, index) => (
                            <li key={`${data}-${index}`}>{data}</li>
                          ))
                        : "loading"}
                    </ul>
                  </div>
                  <div className="col-lg-6 col-sm-6 col-xs-12">
                    <ul>
                      {this.props.data
                        ? this.props.data.techStack2.map((data, index) => (
                            <li key={`${data}-${index}`}>{data}</li>
                          ))
                        : "loading"}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default about;
