import React from 'react';
import '../../src/App.css';
import logo from '../images/ivisa-logo.jpg';
import { Link, Outlet, Routes } from 'react-router-dom';
import Dropdown from 'react-bootstrap/Dropdown';


const Navbar = () => {
  return (
    <>
      <div className="navbar-wrapper">
        <div className="container">
          <nav>
            <div className="row">
              <div className="col-lg-4 logo">
                <div>
                  <img src={logo} alt="" height={100} width={200} />
                </div>
              </div>
              <div className="col-lg-8">
                <ul className="nav-list">
                  <li><Link to="/">Home</Link></li>
                  <li >
                    <Dropdown>
                      <Dropdown.Toggle variant="success" id="dropdown-basic">
                        UAE VISA
                      </Dropdown.Toggle>

                      <Dropdown.Menu>
                        <h4 className='text-center'>ALL VISAS </h4>
                        <h6>Single Entry VISA</h6>
                        <Dropdown.Item><Link to="/SingleEntryFortenDay">14 Days Dubai Visit Visa</Link></Dropdown.Item>
                        <Dropdown.Item><Link to="/SingleEntry_30day">30 Days Dubai Visit Visa</Link></Dropdown.Item>
                        <Dropdown.Item><Link to="/SingleEntrySixty">60 Days Dubai Visit Visa</Link></Dropdown.Item>
                        <Dropdown.Item><Link to="/SingleEntry_30dayGcc">30 Days GCC Residence Visa</Link></Dropdown.Item>
                        <Dropdown.Item><Link to="/SingleEntryNinetySixhour">96 Hours Dubai Transit Visa</Link></Dropdown.Item>





                        <h6>Multiple Entry VISA</h6>
                        <Dropdown.Item><Link to="/MultiEntry_30day">30 Days Multiple Entry Visa</Link></Dropdown.Item>
                        <Dropdown.Item><Link to="/MultiEntry_60day">60 Days Multiple Entry Visa</Link></Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </li>
                  <li><Link to="/how-to-apply">HOW TO APPLY</Link></li>
                  <li><Link to="/blogs">BLOGS</Link></li>
                  <li><Link to="/contact-us">Contact Us</Link></li>
                  <li><Link to="/ar-en">AR-EN</Link></li>














                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}

export default Navbar;
