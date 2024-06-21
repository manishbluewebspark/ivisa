import React, { useState } from 'react';
import img from '../images/hero-img.png'
import ToggleSwitch from './ToggleSwitch';
import AboutusCard from './Aboutus/AboutusCard';
import { Link } from 'react-router-dom';



const Landingpage = () => {
    const [activeTab, setActiveTab] = useState('tab-1');
    return (
        <>
            <section className='landing-section-one'>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6" >
                            <div className='left-con-sec-one mt-2 mb-5'>
                                <div className="wlc-text mb-4">
                                    <h1>Welcome to </h1>
                                    <h1>eDubai Visa Portal</h1>
                                </div>
                                <div className='wlc-text'>
                                    <p className="mb-4">Apply Now For Your UAE Visit Visa and Dubai Tourist Visa Online in <span className='text-warning' >3 Simple Steps.</span></p>
                                </div>
                                <div className="mb-4 d">
                                    <div className="wlc-text-span d-flex ">
                                        <span className="s1"> <h6>Step 1</h6><p>Fill the Application</p></span>
                                        <span className="s2"> <h6>Step 2</h6><p>Pay the Fee</p></span>
                                        <span className="s3"> <h6>Step 3</h6> <p>Get Your VISA</p></span>
                                    </div>
                                </div>
                                <div className='sec-one-apl-btn'>
                                    {/* <button className="btn btn-warning text-white">Apply Now</button> */}
                                    <Link className='btn btn-warning text-white' to="/apply"> Apply Now</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className='right-con-sec-one'>
                                <div className='mt-5'>
                                    <img src={img} alt="" width={500} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
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
                                                <div className="col-md-4 col-alg">
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
                                                                 <h6><i className="fa fa-check"></i> Service Type</h6>
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
                                                                    <button className="btn btn-warning">APPLY NOW</button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                {/* <!-- Card 2 --> */}
                                                <div className="col-md-4 col-alg">
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
                                                                 <h6><i className="fa fa-check"></i> Service Type</h6>
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
                                                                    <button className="btn btn-warning">APPLY NOW</button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                {/* <!-- Card 3 --> */}
                                                <div className="col-md-4 col-alg">
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
                                                                 <h6><i className="fa fa-check"></i> Service Type</h6>
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
                                                                    <button className="btn btn-warning">APPLY NOW</button>
                                                                </div>
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
                                                                 <h6><i className="fa fa-check"></i> Service Type</h6>
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
                                                                    <button className="btn btn-warning">APPLY NOW</button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="col-md-6 col-alg">
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
                                                                 <h6><i className="fa fa-check"></i> Service Type</h6>
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
                                                                    <button className="btn btn-warning">APPLY NOW</button>
                                                                </div>
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
                                            <div className="col-md-4 col-alg">
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
                                                                 <h6><i className="fa fa-check"></i> Service Type</h6>
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
                                                                    <button className="btn btn-warning">APPLY NOW</button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="col-md-4 col-alg">
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
                                                                 <h6><i className="fa fa-check"></i> Service Type</h6>
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
                                                                    <button className="btn btn-warning">APPLY NOW</button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="col-md-4 col-alg">
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
                                                                 <h6><i className="fa fa-check"></i> Service Type</h6>
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
                                                                    <button className="btn btn-warning">APPLY NOW</button>
                                                                </div>
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
            <hr />
            <section className='aboutus-card'>
                <div className="container">
                    <h3 className='aboutus-card-h text-center mt-5 mb-5'>What Our Clients Say About Us</h3>
                    <div className='mb-5'>
                        <AboutusCard/>
                    </div>
                </div>
            </section>
            <hr />
        </>
    );
}

export default Landingpage;
