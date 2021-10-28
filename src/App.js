import React from "react";
import "./App.css";
import Counter from "./components/counter/Counter";

class App extends React.Component {
  state = {
    show: true,
  };

  handleShowPerson = () => {
    this.setState({
      ...this.state,
      show: !this.state.show,
    });
  };

  render() {
    return (
      <>
        <button
          onClick={this.handleShowPerson}
          style={{
            width: "50%",
            height: "30px",
            marginTop: "5%",
            backgroundColor: "pink",
            border: "none",
            borderRadius: "100px",
          }}
        >
          click here
        </button>

        {this.state.show ? <Counter /> : null }
      </>
    );
  }
}

export default App;
