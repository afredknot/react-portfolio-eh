import React from 'react';

export default function Resume() {
  return (
    <div>
      <div className="resume text-center">
        <h1 className="text-center">Resume</h1>
        <a href="https://docs.google.com/document/d/1hXN32ENj1t1NCtiyPV8F2jcnj7JvjEQv4lh0Bje5O4U/edit">
          <button className="text-align-center">
            Click Here to View Resume
          </button>
        </a>
      </div>
      <div className = 'container row col-lg-3'>
        

        <ul> Skills </ul>
        <p>What I can do on the Front End</p>
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>JQuery</li>
        <li>React</li>
        <li>Bootstrap</li>

        <p>What I can do on the Back</p>
        <li>APIs</li>
        <li>MySql</li>
        <li>MongoDB, Mongoose</li>
        <li>REST</li>
        <li>Node.js</li>
        <li>Express.js</li>
        <li>GraphQL</li>
      </div>
    </div>
  );
}
