import React, { useState } from "react";

function FormComponent() {

  const [name,setName] = useState("");
  const [email,setEmail] = useState("");
  const [message,setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if(name === "" || email === ""){
      setMessage("All fields are required");
      return;
    }

    setMessage("Form submitted successfully!");
  }

  return(
    <div>
      <h2>User Form</h2>

      <form onSubmit={handleSubmit}>

        <input
          placeholder="Enter Name"
          value={name}
          onChange={(e)=>setName(e.target.value)}
        />

        <input
          placeholder="Enter Email"
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
        />

        <button type="submit">
          Submit
        </button>

      </form>

      {message && <p>{message}</p>}

    </div>
  );
}

export default FormComponent;