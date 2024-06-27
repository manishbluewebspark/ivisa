import { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import '../../src/App.css';
import logo from '../images/newlogo.png';
import Dropdown from 'react-bootstrap/Dropdown';
import Button from 'react-bootstrap/Button';

const NavbarResponsive = () => {

  const user = JSON.parse(localStorage.getItem('user'));

  const [showNavbar, setShowNavbar] = useState(false);

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  const navigate = useNavigate();

  const handleLogout = () => {
      // Remove user data or token here
      // Example: localStorage.removeItem('user');
      localStorage.removeItem('user');
      navigate('/login');
  };

  return (
    <nav className="res-navbar">
      <div className="container navcontainer">
        <div className="logo">
        <div>
                <Link to="/home">  <img src={logo} alt="" height={60} /> </Link>
        </div>
        </div>
        <div className="nav-menu-icon" onClick={handleShowNavbar}>
          <Hamburger />
        </div>
        <div className={`nav-elements  ${showNavbar && "active"}`}>
        <ul className="nav-list">
                  <li><Link to="/home">Home</Link></li>
                  <li >
                  
                    <Dropdown>
                      <Dropdown.Toggle variant="success" id="dropdown-basic">
                      <img src="https://static-00.iconduck.com/assets.00/united-arab-emirates-icon-512x366-f5noehgf.png" width={25} />    UAE VISA
                      </Dropdown.Toggle>

                      <Dropdown.Menu>
                        <h4 className='text-center visa-heading'>ALL VISAS </h4>
                        <h6 class="dropedown-heading">Single Entry VISA</h6>
                        <Dropdown.Item><Link to="/14-days-dubai-visit-visa">14 Days Dubai Visit Visa</Link></Dropdown.Item>
                        <Dropdown.Item><Link to="/30-days-dubai-visit-visa">30 Days Dubai Visit Visa</Link></Dropdown.Item>
                        <Dropdown.Item><Link to="/60-days-dubai-visit-visa">60 Days Dubai Visit Visa</Link></Dropdown.Item>
                        <Dropdown.Item><Link to="/30-day-gcc-residents">30 Days GCC Residence Visa</Link></Dropdown.Item>
                        <Dropdown.Item><Link to="/96-hours-dubai-visit-visa">96 Hours Dubai Transit Visa</Link></Dropdown.Item>
                        <h6 class="dropedown-heading">Multiple Entry VISA</h6>
                        <Dropdown.Item><Link to="/30-days-multi-entry-visa">30 Days Multiple Entry Visa</Link></Dropdown.Item>
                        <Dropdown.Item><Link to="/60-days-multi-entry-visa">60 Days Multiple Entry Visa</Link></Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </li>
                  <li className="how-to-apl"><Link to="/how-to-apply" >HOW TO APPLY</Link></li>
                  <li><Link to="/blogs">BLOGS</Link></li>
                  <li><Link to="/contact-us">Contact Us</Link></li>
                  <li>{user ?  <Button variant="link" onClick={handleLogout}>Logout</Button> : <Link to="/login">Login</Link>} </li>
                </ul>
        </div>
      </div>
    </nav>
  );
};

const Hamburger = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="52"
    height="24"
    viewBox="0 0 52 24"
  >
    <g id="Group_9" data-name="Group 9" transform="translate(-294 -47)">
      <rect
        id="Rectangle_3"
        data-name="Rectangle 3"
        width="42"
        height="4"
        rx="2"
        transform="translate(304 47)"
        fill="#574c4c"
      />
      <rect
        id="Rectangle_5"
        data-name="Rectangle 5"
        width="42"
        height="4"
        rx="2"
        transform="translate(304 67)"
        fill="#574c4c"
      />
      <rect
        id="Rectangle_4"
        data-name="Rectangle 4"
        width="52"
        height="4"
        rx="2"
        transform="translate(294 57)"
        fill="#574c4c"
      />
    </g>
  </svg>
);

export default NavbarResponsive;


