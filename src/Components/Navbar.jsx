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
                <Link to="/home">  <img src={logo} alt="" height={100} width={200} /> </Link>
                </div>
              </div>
              <div className="col-lg-8 d-flex justify-content-end">
                <ul className="">
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
                  <li><Link to="/how-to-apply">HOW TO APPLY</Link></li>
                  <li><Link to="/blogs">BLOGS</Link></li>
                  <li><Link to="/contact-us">Contact Us</Link></li>
                  {/* <li><Link to="/ar-en">AR-EN</Link></li> */}
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
