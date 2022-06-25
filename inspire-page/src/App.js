import "./App.css";
import React from "react";
import Clock from "react-live-clock";

function App() {
  let time = new Date().toLocaleString();

  // const ShowTime = () => {
  //   let today = new Date();
  //   let hour = today.getHours();
  //   let min = today.getMinutes();
  //   let sec = today.getSeconds();
  //   // Set AM or PM
  //   const amPm = hour >= 12 ? "PM" : "AM";

  //   // 12hr Format
  //   hour = hour % 12 || 12;
  //    console.log(`${hour}:${min}:${sec} ${amPm}`);
  //   setTimeout(ShowTime, 1000);
  // };

  // // Add Zeros
  // function addZero(n) {
  //   return (parseInt(n, 10) < 10 ? "0" : "") + n;
  // }

  return (
    <div className="App">
      {/* <Clock format={"HH:mm:ss"} ticking={true} timezone={"US/Pacific"} /> */}
      <time>{time}</time>
      <h1>
        <span id="greeting"></span>
        <span id="name"></span>
      </h1>
      <h2>What Is Your Focus For Today?</h2>
      {/* <h2 id="focus">{}</h2> */}
    </div>
  );
}

export default App;
