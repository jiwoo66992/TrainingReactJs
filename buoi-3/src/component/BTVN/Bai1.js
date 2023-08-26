import React, { Component } from "react";

class Bai1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "",
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        message: "Message sau 5s",
      });
    }, 2000);
  }

  render() {
    return <h1>{this.state.message}</h1>;
  }
}

export default Bai1;
