import React from "react";
import Code from "./data1";
import "./App.css";


function App() {

// and
  // const div = {
  //   background : "green"
  // color : "fff"
  // display : "flex"
  // justifyContent : "space-around"
  // }


  return (
  // React.createElement("h2", null , "islam mohamed")


  <div/* style={div}   or*/    className="div1">
    <Code name = "islam"  age=  "27"  city= "mansoura" />
    <Code name = "mo"  age=  "22"  city= "mancity" />

    </div>

  );
}

export default App;
