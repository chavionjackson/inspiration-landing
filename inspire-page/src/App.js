import "./App.css";
import React from "react";

function App() {
  //Time
  let time = new Date().toLocaleString();
  console.log(time[11])

  //Greeting
  let greeting = ["Good Morning", "Good Afternoon", "Good Evening"]

  if(time[19] === "A"){
    greeting = greeting[0]
  } else if(time[19] === "P" && time[11] < 6){
    greeting = greeting[1]
  } else {
    greeting = greeting[2]
  }

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
      <time id="time">{time}</time>
      <h1>{greeting}, Chevy</h1>
      <h2>What Is Your Focus For Today?</h2>
      {/* <h2 id="focus">{}</h2> */}
    </div>
  );
}

export default App;
