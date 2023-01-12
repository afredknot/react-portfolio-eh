import React, { useState } from 'react';
import NavTabs from './Navigation';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Resume from './pages/Resume';
import Footer from './Footer';
import '../components/Form/style.css'
// import Project from './PortfolioCards'
// import ProjectsApi from '../utils/ProjectsApi'


export default function PortfolioContainer() {

  // const [result, setResult] = useState({});
  // const [search, setSearch] = useState('');


// const Projects = (query) =>
// ProjectsApi.search(query)
//   .then((res) => setResult(res.data))
//   .catch((err) => console.log(err));

// const{
//   name = '',
//   img = '',
//   github = '',
//   deployed = '',
// } = result

  const [currentPage, setCurrentPage] = useState('About');
  const renderPage = () => {
    if (currentPage === 'About') {
      return <About />;
    }
    if (currentPage === 'Portfolio') {
      return <Portfolio />;
     
    }
    if (currentPage === 'Contact') {
      return <Contact />;
    }
    return <Resume />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
     {renderPage()}
      <Footer currentPage={currentPage} handlePageChange={handlePageChange}/>
      
    </div>
      
  );
}
