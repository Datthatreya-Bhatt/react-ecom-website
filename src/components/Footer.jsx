import React from "react";




const Footer = () => {
  return (
    <div className="container-fluid text-white" style={{ backgroundColor: 'skyblue', textAlign: 'center' }}>
      <h1>The Generic</h1>
      <ul className="list-unstyled d-flex justify-content-end">
        <li><img src="youtube-logo.png" alt="YouTube" className="me-2" /> youtube</li>
        <li><img src="spotify-logo.png" alt="Spotify" className="me-2" /> spotify</li>
        <li><img src="facebook-logo.png" alt="Facebook" className="me-2" /> facebook</li>
      </ul>
    </div>
  );
};

export default Footer;
