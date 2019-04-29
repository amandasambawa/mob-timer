import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogContent';
import DialogContent from '@material-ui/core/DialogContentText';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      totalSeconds: 600, 
      minutes: 10,
      seconds: 0,
      formattedSeconds: "00",
      currentInput: 0,
      open: false,
    }
    this.changeTime = this.changeTime.bind(this);
    this.startTimer = this.startTimer.bind(this);
    this.stopTimer = this.stopTimer.bind(this);
    this.resetTime = this.resetTime.bind(this);
    this.tick = this.tick.bind(this);
  }

  tick() {
    if (this.state.totalSeconds < 1) {
      // alert("Your time is up!");
      return;
    }
    var currMinutes = Math.floor((this.state.totalSeconds - 1) / 60);
    var currSeconds = (this.state.totalSeconds - 1) - (currMinutes * 60);
    var currForSeconds; 
    if (currSeconds < 10)
      currForSeconds = "0" + currSeconds;
    else 
      currForSeconds = currSeconds;

    this.setState({
      minutes: currMinutes,
      seconds: currSeconds,
      totalSeconds: this.state.totalSeconds - 1,
      formattedSeconds: currForSeconds,
    })
  }

  changeTime(event) {
    var total = event.target.value * 60;
    if (event.target.value > 0) {
      this.setState({
        minutes: event.target.value,
        totalSeconds: total,
        currentInput: event.target.value,
      })
    } else {

    }
  }

  startCountDown() {
    this.intervalHandle = setInterval(this.tick, 1000);
  }

  startTimer() {
    console.log("Start timer");
    clearInterval(this.timer);
    this.timer = setInterval(this.tick, 1000);
  }

  stopTimer() {
    console.log("Stop time");
    clearInterval(this.timer);
  }

  resetTime() {
    this.setState({
      totalSeconds: this.state.currentInput * 60,
      minutes: this.state.currentInput, 
      seconds: 0,
      formattedSeconds: "00",
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header" height="10">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <h3>AS Mob Timer </h3>
        <div>
          <div style={{marginBottom: 10}}>
            <h3>Input your desired time (minutes):</h3>
            <input type="number" min="1" onChange={this.changeTime}></input>
            <h1>{this.state.minutes} : {this.state.formattedSeconds}</h1>
          </div>
          <div>
            <Button variant="contained" onClick={this.startTimer} color="primary" style={{marginLeft: 10, marginRight: 10}}>Start</Button>
            <Button variant="contained" onClick={this.stopTimer} color="secondary" style={{marginLeft: 10, marginRight: 10}}>Stop</Button>
            <Button variant="contained" onClick={this.resetTime} style={{marginLeft: 10, marginRight: 10}}>Reset</Button>
          </div>
          <Dialog>
          </Dialog> 
        </div>
        </header>
      </div>
    );
  }
}

export default App;
