import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../components/Form/style.css'

function NavTabs({ currentPage, handlePageChange }) {
  return (
    <Navbar.Text className="justify-content-center align-content-center"><h2>ᴅᴀɴɪᴇʟ ɴᴇʟꜱᴏɴ</h2>
     <Nav className ="justify-content-center align-items-center"  defaultActiveKey="/about">
     
      
      <li className="nav-item">
       
        <a
          href="#about"
          onClick={() => handlePageChange('About')}
          className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
        >
          About Me
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#portfolio"
          onClick={() => handlePageChange('Portfolio')}
          className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}
        >
          Portfolio
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#Contact"
          onClick={() => handlePageChange('Contact')}
          className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
        >
          Contact
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#resume"
          onClick={() => handlePageChange('Resume')}
          className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
        >
          Resume
        </a>
      </li>
    </Nav>
    </Navbar.Text>
  );
}

export default NavTabs;
