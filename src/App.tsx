import React, {useState} from 'react';
import './App.css';
import ProjectsPage from "./projects/ProjectsPage";
import Background from "./components/background";
function App() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
   <>
       <div className="container">

         
           <div className="row">
               <div className="col-sm-6 col-md-6 col-lg-6">
                   <img src="./assets/logo.png" width={'120px'} alt=""/>
               </div>
               <div className="col-sm-6 col-md-6 col-lg-6 text-center">
                   <button className="hamburger-menu-button" onClick={toggleMenu}>
                       <div className={`bar ${isMenuOpen ? 'open' : ''}`}></div>
                       <div className={`bar ${isMenuOpen ? 'open' : ''}`}></div>
                       <div className={`bar ${isMenuOpen ? 'open' : ''}`}></div>
                   </button>
                   <div className={`menu-items ${isMenuOpen ? 'open' : ''}`} >
                       <p>Home</p>
                       <p>Projects</p>
                       <p>Ideas</p>
                       <p>Contact</p>
                   </div>
               </div>
           {/*    <div className="col-sm-12 col-md-4 col-lg-4 log-btn">
                   <button className="log">Login</button>
                   
               </div>*/}
           </div>
           <div className="row">
               <Background/>
           </div>
       </div>
     <blockquote cite="Benjamin Franklin">
           Tell me and I forget, teach me and I may remember, involve me and I learn.
     </blockquote>
       
       <ProjectsPage/>
   </>
  );
}

export default App;
