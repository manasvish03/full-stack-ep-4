import React from "react";

function Dashboard({ loading, error, data }) {

  if(loading){
    return <h3>Loading...</h3>;
  }

  if(error){
    return <h3>Error occurred</h3>;
  }

  if(data.length === 0){
    return <h3>No data available</h3>;
  }

  return(
    <div>
      <h2>Dashboard</h2>

      <ul>
        {data.map((item,index)=>(
          <li key={index}>{item}</li>
        ))}
      </ul>

    </div>
  );
}

export default Dashboard;