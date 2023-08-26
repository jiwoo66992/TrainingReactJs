import React, { Component } from "react";

class Bai2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timeSecond: 6273,
    };
  }

  formatTime = (time) => {
    return time < 10 ? `0${time}` : time;
  };

  fotmatTimeDetail = (timeSecond) => {
    const gio = Math.floor(timeSecond / (60 * 60));
    const phut = Math.floor((timeSecond % (60 * 60)) / 60);
    const giay = timeSecond % 60;

    return `${this.formatTime(gio)} : ${this.formatTime(
      phut
    )} : ${this.formatTime(giay)}`;
  };

  startTime = () => {
    this.timeIntervalId = setInterval(() => {
      this.setState((preState) => ({
        timeSecond: preState.timeSecond + 1,
      }));
    }, 1000);
  };

  stopTime = () => {
    clearInterval(this.timeIntervalId);
  };

  //   Using method lifecycle

  componentDidMount() {
    this.startTime();
  }

  componentWillUnmount() {
    this.stopTime();
  }

  render() {
    const { timeSecond } = this.state;

    return <h1>{this.fotmatTimeDetail(timeSecond)}</h1>;
  }
}

export default Bai2;
