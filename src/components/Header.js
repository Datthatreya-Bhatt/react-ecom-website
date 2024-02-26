import React from "react";


import Cart from './Cart';

const Header = () => {
    return (
        <nav className="navbar navbar-dark bg-dark fixed-top text-white"> {/* Apply Bootstrap classes for styling */}
            <ul className="navbar-nav mx-auto d-flex flex-row"> {/* Apply Bootstrap classes for styling */}
                <li className="nav-item me-5">Home</li>
                <li className="nav-item me-3">Store</li>
                <li className="nav-item me-3">About</li>
            </ul>
            <Cart className="ml-auto" /> {/* Apply Bootstrap classes for styling */}
        </nav>
    )
};

export default Header;
