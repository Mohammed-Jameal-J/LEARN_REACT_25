import React, { useState } from 'react';

function NameForm() {
  // Declare a state variable `name` with an initial value of an empty string
  const [name, setName] = useState('');

  // Handle input change and update the name state
  const handleInputChange = (event) => {
    setName(event.target.value);
  };

  // Handle form submit
  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Hello, ${name}!`);
  };

  return (
    <div>
      <h1>React Form</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Enter your name:
          <input
            type="text"
            value={name}
            onChange={handleInputChange}
            placeholder="Your name"
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default NameForm;
