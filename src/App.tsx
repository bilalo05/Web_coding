import React from 'react';
import './App.css';
import ProjectsPage from "./projects/ProjectsPage";
function App() {
  return (
   <>
       <div className="container">
           <div className="row">
               <div className="col-sm-12 col-md-4 col-lg-4">
                   <img src="/assets/logo.png" width={'120px'} alt=""/>
               </div>
               <div className="col-sm-12 col-md-4 col-lg-4">
           <ProjectsPage/>
               </div>
               <div className="col-sm-12 col-md-4 col-lg-4 log-btn">
                   <button className="log">Login</button>
                   
               </div>
           </div>
       </div>
     <blockquote cite="Benjamin Franklin">
           Tell me and I forget, teach me and I may remember, involve me and I learn.
     </blockquote>
   
   </>
  );
}

export default App;
