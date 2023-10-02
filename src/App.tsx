import React from 'react';
import './App.css';
import ProjectsPage from "./projects/ProjectsPage";
import Background from "./components/background";
import Navbar from "./components/Navbar/Navbar";

function App() {
 

    return (
   <>
       <div className="container">

         
           <div className="row" id="menu-container">
               <div className="col-sm-6 col-md-6 col-lg-6">
                   <img src="./assets/logo.png" width={'120px'} alt=""/>
               </div>
             <Navbar/>
           {/*    <div className="col-sm-12 col-md-4 col-lg-4 log-btn">
                   <button className="log">Login</button>
                   
               </div>*/}
           </div>
           <div className="row">
               <Background/>
           </div>
       </div>
       <ProjectsPage/>
     <blockquote cite="Benjamin Franklin" style={{fontSize:"2rem"}}>
           Tell me and I forget, teach me and I may remember, involve me and I learn.
     </blockquote>
       
   </>
  );
}

export default App;
