import React, {useState} from "react";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    return(
     <>
         <div className="col-sm-6 col-md-6 col-lg-6 text-center">
             <button className="hamburger-menu-button" onClick={toggleMenu}>
                 <div className={`bar ${isMenuOpen ? 'open' : ''}`}></div>
                 <div className={`bar ${isMenuOpen ? 'open' : ''}`}></div>
                 <div className={`bar ${isMenuOpen ? 'open' : ''}`}></div>
             </button>
             <div className={`menu-items ${isMenuOpen ? 'open' : ''}`} >
             
                 <p>Home</p>
            
                         
                 <p>Applications</p>
                
                         
                 <p>Components</p>
               
                         
                 <p>Contact</p>
                  
             </div>
         </div>
     
     </>   
    )
}

export default Navbar;