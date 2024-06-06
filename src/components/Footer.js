import React from 'react';

function Footer() {
  const footerStyle = {
    backgroundColor: '#2c3e50',
    height: '200px',
    width: '100vw',
    color: 'white',
    marginLeft: '-14%',
    marginBottom: '-10%',
    padding: '30px',
  };

  const listStyle = {
    marginTop: '-10px',
    listStyle: 'none',
  };

  const h4Style = {
    marginLeft: '20px',
  };

  return (
    <div style={footerStyle}>
      <h3 style={{color:'white'}}>Thank You For Visiting!</h3>
      <h4 style={h4Style}>Contact Us : </h4>
      <ul style={listStyle}>
        <li>📞 +91 8919979555</li>
        <li>📧 quotegalaxy@gmail.com</li>
        <li>📍 1-222 Bhimavaram, Andhra Pradesh, India</li>
      </ul>
    </div>
  );
}

export default Footer;
