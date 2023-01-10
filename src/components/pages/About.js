import React from 'react';
import profilepic from '../../img/profilepic.png'
export default function About() {
  return (
    <div>
      <h1 className='text-center'>About Me</h1>
      <div className='text-center'>
      <img src={profilepic} className="rounded"></img>
      </div>
      <p className="text-center text-wrap" >
        Welcome to my portfolio created with React.
         My name is Daniel and I am working to become a fully employed Fullstack Developer.

      </p>
    </div>
  );
}
