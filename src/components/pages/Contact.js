import React, { useRef } from 'react';
import { useState } from 'react';
import '../Form/style.css';
import { validateEmail } from '../../utils/helpers';
import emailjs from '@emailjs/browser';
import { FormControl } from "react-bootstrap";
function Contact() {
  const [reply_to, setReplyTo] = useState('');
  const [name, setName] = useState('');
  const [message, setInput] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e) => {
    // Getting the value and name of the input which triggered the change
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    // Based on the input type, we set the state of either email, username, and password
    if (inputType === 'reply_to') {
      return setReplyTo(inputValue);
    } else if (inputType === 'name') {
      return setName(inputValue);
    } else {
      return setInput(inputValue);
    }
  };

const burger = useRef();
  const handleFormSubmit = (e) => {
    e.preventDefault();
      if (!validateEmail(reply_to) || !name) {
      setErrorMessage('Email is invalid');
      }else{
    emailjs.sendForm('service_jfns7hc', 'template_ut6g61h', burger.current, 'hOne6PSrCPKPx8tUT')
    
          .then((result) => {
            setErrorMessage('Your threw your paper airplane on a correct trajectory')
            console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
     
      
        };
      }
 
    // setName('');
    // setInput('');
    // setEmail('');
  

  return (
    <div>
      <h1 className='text-center'>Contact Me Here</h1>
    
      <form className="form text-center mb-3" ref={burger}>
        Name
        <FormControl
          size="sm mb-4"
          value={name}
          name="name"
          onChange={handleInputChange}
          type="text  "
          placeholder="name "
        />
        
        Email
        <FormControl
          value={reply_to}
          name="reply_to"
          onChange={handleInputChange}
          type="email"
          placeholder="email"
        />
        Message
        <FormControl
          value={message}
          name="message"
          onChange={handleInputChange}
          type="textarea"
          placeholder=""
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
};
export default Contact;
