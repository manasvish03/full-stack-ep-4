import React from "react";
import "./App.css";
import Button from "./components/Button";
import FormComponent from "./components/FormComponent";
import Dashboard from "./components/Dashboard";

function App(){

  const handleClick = ()=>{
    alert("Button Clicked!");
  }

  return(

    <div className="container">

      <h1>Frontend Testing Demo</h1>

      <Button text="Click Me" onClick={handleClick}/>

      <hr/>

      <FormComponent/>

      <hr/>

      <Dashboard
        loading={false}
        data={["React","Jest","Testing Library"]}
      />

    </div>

  );
}

export default App;