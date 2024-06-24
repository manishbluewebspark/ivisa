import React, { useState } from 'react';
import img from '../images/hero-img.png'
import ToggleSwitch from './ToggleSwitch';
import AboutusCard from './Aboutus/AboutusCard';
import { Link } from 'react-router-dom';

const UaeVisa = () => {
    
        const [activeTab, setActiveTab] = useState('tab-1');
    
        const [isActive, setActive] = useState(false);
    
    const handleClick = () => {
      setActive(prevState => !prevState);
    };
    return (
        <div>
             <section className='landing-setion-two'>
                <div className="container">
                    <div className='sec-two-head'>
                        <h1 className='text-center'>Choose Your Visa</h1>
                        <p className='text-center'>All visas are valid across the United Arab Emirates and can be used for all modes of transport.</p>
                    </div>
                    <div>
                        <div id="tabs">
                            <div id="switch-tabs">
                                <input
                                    type="radio"
                                    id="button-1"
                                    name="tab"
                                    checked={activeTab === 'tab-1'}
                                    onChange={() => setActiveTab('tab-1')}
                                />
                                <input
                                    type="radio"
                                    id="button-2"
                                    name="tab"
                                    checked={activeTab === 'tab-2'}
                                    onChange={() => setActiveTab('tab-2')}
                                />
                                <div className='text-center mb-2 switch'>
                                    <span className='sig-db-btn '>
                                        <a className={activeTab === "tab-1" ? 'tabs_active' : null} htmlFor="button-1" onClick={() => setActiveTab('tab-1')}>Single Entry</a>
                                        <a className={activeTab === "tab-2" ? 'tabs_active' : null} htmlFor="button-2" onClick={() => setActiveTab('tab-2')}>Multiple Entry</a>
                                    </span>
                                </div>
                            </div>

                            <div id="shadow">
                                <div id="content" className='mt-4'>
                                    {activeTab === 'tab-1' && (
                                        <div id="tab-1">
                                            <div className="row">
                                                {/* <!-- Card 1 --> */}
                                                <div className="col-lg-4 col-md-4  col-alg">
                                                    <div className="card card-con">
                                                        <div className="card-body">
                                                            <div className="row">
                                                                <div className="col card-font">
                                                                    <h3>14 Days</h3>
                                                                    <p>Dubai Visit visa</p>
                                                                </div>
                                                                <div className="col text-right">
                                                                    <ToggleSwitch/>
                                                                </div>
                                                            </div>
                                                            <div className="row">
                                                                <div className="col card-font">
                                                                    <h1>$215</h1>
                                                                </div>
                                                                <div className='divider'></div>
                                                            </div>
                                                            <div className="row">
                                                                <div className="col card-info">
                                                                  <h6><i  className={isActive ? 'fa fa-check  eee' : 'fa fa-check'}></i> Service Type</h6>
                                                                    <p>Regular Visa-Single Entry</p>
                                                                    <h6><i className="fa fa-check"></i> Processing Time</h6>
                                                                    <p>1-3 business days</p>
                                                                    <h6><i className="fa fa-check"></i> Validity</h6>
                                                                    <p>60 days from date of issue</p>
                                                                    <h6><i className="fa fa-check"></i> Stay Period</h6>
                                                                    <p>14 days from date of entry</p>
                                                                </div>
                                                            </div>
                                                            <div className="row">
                                                                <div className="col card-btn">
                                                                    <button className="btn btn-warning"><Link className='text-white text-decoration-none' to="/apply"> Apply Now</Link></button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                {/* <!-- Card 2 --> */}
                                                <div className="col-lg-4  col-md-4 col-alg">
                                                    <div className="card card-con">
                                                        <div className="card-body">
                                                            <div className="row">
                                                                <div className="col card-font">
                                                                    <h3>30 Days</h3>
                                                                    <p>Dubai Visit visa</p>
                                                                </div>
                                                                <div className="col text-right">
                                                                    <ToggleSwitch/>
                                                                </div>
                                                            </div>
                                                            <div className="row">
                                                                <div className="col card-font">
                                                                    <h1>$225</h1>
                                                                </div>
                                                                <div className='divider'></div>
                                                            </div>
                                                            <div className="row">
                                                                <div className="col card-info">
                                                                 <h6><i className="fa fa-check"></i> Service Type</h6>
                                                                    <p>Regular Visa-Single Entry</p>
                                                                    <h6><i className="fa fa-check"></i> Processing Time</h6>
                                                                    <p>1-3 business days</p>
                                                                    <h6><i className="fa fa-check"></i> Validity</h6>
                                                                    <p>60 days from date of issue</p>
                                                                    <h6><i className="fa fa-check"></i> Stay Period</h6>
                                                                    <p>30 days from date of entry</p>
                                                                </div>
                                                            </div>
                                                            <div className="row">
                                                                <div className="col card-btn">
                                                                <button className="btn btn-warning"><Link className='text-white text-decoration-none' to="/apply"> Apply Now</Link></button>                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                {/* <!-- Card 3 --> */}
                                                <div className=" col-lg-4 col-md-4 col-alg">
                                                    <div className="card card-con">
                                                        <div className="card-body">
                                                            <div className="row">
                                                                <div className="col card-font">
                                                                    <h3>60 Days</h3>
                                                                    <p>Dubai Visit visa</p>
                                                                </div>
                                                                <div className="col text-right">
                                                                    <ToggleSwitch/>
                                                                </div>
                                                            </div>
                                                            <div className="row">
                                                                <div className="col card-font">
                                                                    <h1>$350</h1>
                                                                </div>
                                                                <div className='divider'></div>
                                                            </div>
                                                            <div className="row">
                                                                <div className="col card-info">
                                                                 <h6><i className="fa fa-check"></i> Service Type</h6>
                                                                    <p>Regular Visa-Single Entry</p>
                                                                    <h6><i className="fa fa-check"></i> Processing Time</h6>
                                                                    <p>1-3 business days</p>
                                                                    <h6><i className="fa fa-check"></i> Validity</h6>
                                                                    <p>60 days from date of issue</p>
                                                                    <h6><i className="fa fa-check"></i> Stay Period</h6>
                                                                    <p>60 days from date of entry</p>
                                                                </div>
                                                            </div>
                                                            <div className="row">
                                                                <div className="col card-btn">
                                                                <button className="btn btn-warning"><Link className='text-white text-decoration-none' to="/apply"> Apply Now</Link></button>                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="row">
                                                {/* <!-- Card 4 --> */}
                                                <div className="col-md-6 col-alg">
                                                    <div className="card card-con">
                                                        <div className="card-body">
                                                            <div className="row">
                                                                <div className="col card-font">
                                                                    <h3>30 Days</h3>
                                                                    <p>For GCC Residents</p>
                                                                </div>
                                                                <div className="col text-right">
                                                                    <ToggleSwitch/>
                                                                </div>
                                                            </div>
                                                            <div className="row">
                                                                <div className="col card-font">
                                                                    <h1>$390</h1>
                                                                </div>
                                                                <div className='divider'></div>
                                                            </div>
                                                            <div className="row">
                                                                <div className="col card-info">
                                                                 <h6><i className="fa fa-check"></i> Service Type</h6>
                                                                    <p>Regular Visa-Single Entry</p>
                                                                    <h6><i className="fa fa-check"></i> Processing Time</h6>
                                                                    <p>1-3 business days</p>
                                                                    <h6><i className="fa fa-check"></i> Validity</h6>
                                                                    <p>60 days from date of issue</p>
                                                                    <h6><i className="fa fa-check"></i> Stay Period</h6>
                                                                    <p>30 days from date of entry</p>
                                                                </div>
                                                            </div>
                                                            <div className="row">
                                                                <div className="col card-btn">
                                                                <button className="btn btn-warning"><Link className='text-white text-decoration-none' to="/apply"> Apply Now</Link></button>                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="col-md-6 col-alg">
                                                    <div className="card card-con">
                                                        <div className="card-body">
                                                            <div className="row">
                                                                <div className="col card-font">
                                                                    <h3>96 Hours</h3>
                                                                    <p>Dubai Transit Visa</p>
                                                                </div>
                                                                <div className="col text-right">
                                                                    <ToggleSwitch/>
                                                                </div>
                                                            </div>
                                                            <div className="row">
                                                                <div className="col card-font">
                                                                    <h1>$140</h1>
                                                                </div>
                                                                <div className='divider'></div>
                                                            </div>
                                                            <div className="row">
                                                                <div className="col card-info">
                                                                 <h6><i className="fa fa-check"></i> Service Type</h6>
                                                                    <p>Regular Visa-Single Entry</p>
                                                                    <h6><i className="fa fa-check"></i> Processing Time</h6>
                                                                    <p>1-3 business days</p>
                                                                    <h6><i className="fa fa-check"></i> Validity</h6>
                                                                    <p>60 days from date of issue</p>
                                                                    <h6><i className="fa fa-check"></i> Stay Period</h6>
                                                                    <p>96 hours from date of entry</p>
                                                                </div>
                                                            </div>
                                                            <div className="row">
                                                                <div className="col card-btn">
                                                                <button className="btn btn-warning"><Link className='text-white text-decoration-none' to="/apply"> Apply Now</Link></button>                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>


                                        </div>
                                    )}
                                    {activeTab === 'tab-2' && (
                                        <div id="tab-2">
                                            <div className="row">
                                            <div className="col-md-6 col-alg">
                                                    <div className="card card-con">
                                                        <div className="card-body">
                                                            <div className="row">
                                                                <div className="col card-font">
                                                                    <h3>30 Days</h3>
                                                                    <p>Multiple Entry Visa</p>
                                                                </div>
                                                                <div className="col text-right">
                                                                    <ToggleSwitch/>
                                                                </div>
                                                            </div>
                                                            <div className="row">
                                                                <div className="col card-font">
                                                                    <h1>$400</h1>
                                                                </div>
                                                                <div className='divider'></div>
                                                            </div>
                                                            <div className="row">
                                                                <div className="col card-info">
                                                                 <h6><i className="fa fa-check"></i> Service Type</h6>
                                                                    <p>Regular Visa-Multiple Entry</p>
                                                                    <h6><i className="fa fa-check"></i> Processing Time</h6>
                                                                    <p>1-3 business days</p>
                                                                    <h6><i className="fa fa-check"></i> Validity</h6>
                                                                    <p>60 days from date of issue</p>
                                                                    <h6><i className="fa fa-check"></i> Stay Period</h6>
                                                                    <p>30 days from date of entry</p>
                                                                </div>
                                                            </div>
                                                            <div className="row">
                                                                <div className="col card-btn">
                                                                <button className="btn btn-warning"><Link className='text-white text-decoration-none' to="/apply"> Apply Now</Link></button>                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="col-md-6 col-alg">
                                                    <div className="card card-con">
                                                        <div className="card-body">
                                                            <div className="row">
                                                                <div className="col card-font">
                                                                    <h3>60 Days</h3>
                                                                    <p>Multiple Entry Visa</p>
                                                                </div>
                                                                <div className="col text-right">
                                                                    <ToggleSwitch/>
                                                                </div>
                                                            </div>
                                                            <div className="row">
                                                                <div className="col card-font">
                                                                    <h1>$520</h1>
                                                                </div>
                                                                <div className='divider'></div>
                                                            </div>
                                                            <div className="row">
                                                                <div className="col card-info">
                                                                 <h6><i className="fa fa-check"></i> Service Type</h6>
                                                                    <p>Regular Visa-Multiple Entry</p>
                                                                    <h6><i className="fa fa-check"></i> Processing Time</h6>
                                                                    <p>1-3 business days</p>
                                                                    <h6><i className="fa fa-check"></i> Validity</h6>
                                                                    <p>60 days from date of issue</p>
                                                                    <h6><i className="fa fa-check"></i> Stay Period</h6>
                                                                    <p>60 days from date of entry</p>
                                                                </div>
                                                            </div>
                                                            <div className="row">
                                                                <div className="col card-btn">
                                                                <button className="btn btn-warning"><Link className='text-white text-decoration-none' to="/apply"> Apply Now</Link></button>                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default UaeVisa;
