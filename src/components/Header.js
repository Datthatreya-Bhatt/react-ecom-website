import React from "react";




const Header = () => {

   
    return (
        <nav className="navbar navbar-dark bg-dark fixed-top text-white"> {/* Apply Bootstrap classes for styling */}
            <ul className="navbar-nav mx-auto d-flex flex-row"> {/* Apply Bootstrap classes for styling */}
                <li className="nav-item me-5">Home</li>
                <li className="nav-item me-3">Store</li>
                <li className="nav-item me-3">About</li>
            </ul>
            
            <button type="button" className="btn btn-outline-info btn-sm" >
                Cart <span className="badge text-bg-secondary bg-danger">4</span>
            </button>
        </nav>
    )
};

export default Header;
