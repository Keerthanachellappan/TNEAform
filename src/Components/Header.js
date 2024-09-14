import React from 'react';
import logo from "../Components/image/logo.png";
import './Header.css'; 

const Header = () => {
  return (
    <header className="header-container">
      <img src={logo} alt="Tamil Nadu Government Logo" className="logo" />
      <div className="header-text">
        <h3>GOVERNMENT OF TAMILNADU</h3>
        <h4>TAMILNADU ENGINEERING ADMISSION - 2024</h4>
      </div>
    </header>
  );
}

export default Header;
