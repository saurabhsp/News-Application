import React from 'react';

const Footer = () => {
  const getCurrentYear = () => {
    return new Date().getFullYear();
  };

  return (
    <footer style={{ backgroundColor: 'black', color: '#fff', padding: '1px', textAlign: 'center' }}>
      <p>&copy; {getCurrentYear()} Saurabh Pakhale All Rights Are Reserved</p>
    </footer>
  );
};

export default Footer;
