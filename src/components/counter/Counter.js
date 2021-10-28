import React, { Component } from "react";
import sss from "../../sss.jpg";

export default class Counter extends Component {
  state = {
    Person: {
      fullName: "Debbiche Senda",
      bio: "I love gomycode",
      imgSrc: sss,
      profession: "Web developper",
    },
    show: true,
    timer: 0,
  };

  componentDidMount() {
    setInterval(() => this.setState({ timer: this.state.timer + 1 }), 1000);
  }
  render() {
    return (
      <div>
        {this.state.show && (
          <>
            <h1 style={{ color: "pink" }}>{this.state.Person.fullName}</h1>
            <h2>{this.state.Person.bio}</h2>
            <img
              src={this.state.Person.imgSrc}
              alt="Senda"
              style={{ width: "30%", borderRadius: "100%" }}
            ></img>
            <h2>{this.state.Person.profession}</h2>

            <h2> {this.state.timer}</h2>
            <br></br>
          </>
        )}
      </div>
    );
  }
}
