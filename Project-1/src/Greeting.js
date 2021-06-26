import React, { useState } from "react";

function Greeting() {
  const [msg, setMsg] = useState("");

  const handleInputChange = (e) => {
    console.log(e.target.value);
  };
  return (
    <div>
      <h4> Greetings </h4>

      <input placeholder="Enter your name" onChange={handleInputChange} />

      {msg.length > 0 ? (
        <div>
          <h5> Hello {msg} </h5>
        </div>
      ) : null}

      <h5> Hello {msg} </h5>
    </div>
  );
}

export default Greeting;
