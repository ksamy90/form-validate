import React, { useState } from "react";
import "./index.css";

const App = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState(false);
  const addUser = (e) => {
    e.preventDefault();
    if (firstName.length > 5 && lastName.length > 5 && email.length > 5) {
      setError(false);
      alert("user successfully added");
      setFirstName("");
      setEmail("");
      setLastName("");
    } else {
      setError(true);
    }
  };
  return (
    <div className="container">
      <form onSubmit={addUser}>
        {error && <p className="error">please input correct data</p>}
        <input
          type="text"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          placeholder="First Name"
        />
        <input
          type="text"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          placeholder="Last Name"
        />
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
        />
        <button>Register</button>
      </form>
    </div>
  );
};

export default App;
