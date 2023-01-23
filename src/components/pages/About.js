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
         My name is Daniel and I am working to become a fully employed Fullstack Developer.</p>
        <p> My main focuses are fullstack and devops and team management. I've managed many teams in the past, from 3 people to over 50. I look forward to being able to bring some well rounded experience to your place of employed coders.

      </p>
    </div>
  );
}
