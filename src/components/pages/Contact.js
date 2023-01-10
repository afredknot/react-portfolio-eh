import React, { useState } from 'react';
import '../Form/style.css';
import { validateEmail } from '../../utils/helpers';

function Form() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [message, setInput] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e) => {
    // Getting the value and name of the input which triggered the change
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    // Based on the input type, we set the state of either email, username, and password
    if (inputType === 'email') {
      setEmail(inputValue);
    } else if (inputType === 'name') {
      setName(inputValue);
    } else {
      setInput(inputValue);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!validateEmail(email) || !name) {
      setErrorMessage('Email is invalid');
      return;
    }
    //  if (!checkInput(input)) {
    //   setErrorMessage(
    //     `Please enter message text`
    //   );
    //   return;

    setName('');
    setInput('');
    setEmail('');
  };

  return (
    <div>
      <h1>Contact Me Here</h1>
      <form className="form">
        Name
        <input
          value={name}
          name="name"
          onChange={handleInputChange}
          type="text"
          placeholder="name"
        />
        
        Email
        <input
          value={email}
          name="email"
          onChange={handleInputChange}
          type="email"
          placeholder="email"
        />
        Message
        <input
          value={message}
          name="message"
          onChange={handleInputChange}
          type="textarea"
          placeholder="Contact"
          required
        />
        <button type="button" onClick={handleFormSubmit}>
          Submit
        </button>
      </form>
      {errorMessage && (
        <div>
          <p className="error-text">{errorMessage}</p>
        </div>
      )}
    </div>
  );
}
export default Form;
