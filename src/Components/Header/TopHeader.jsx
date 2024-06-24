import React from 'react';
import { Link } from 'react-router-dom';

const TopHeader = () => {
    return (
        <div>
             <section className='landing-section-one'>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-12 col-sm-12 col-12" >
                            <div className='left-con-sec-one mt-2 mb-5'>
                                <div className="wlc-text">
                                    <h1>Welcome to </h1>
                                    <h1> IVisa Portal</h1>
                                </div>
                                <div className='wlc-text'>
                                    <p className="mb-4">Apply Now For Your UAE Visit Visa and Dubai Tourist Visa Online in <span className='text-warning' >3 Simple Steps.</span></p>
                                </div>
                                <div className="mb-4 mb-sm-2 d">
                                    <div className="wlc-text-span d-none d-lg-flex d-md-flex">
                                        <span className="s1"> <h6>Step 1</h6><p>Fill the Application</p></span>
                                        <span className="s2"> <h6>Step 2</h6><p>Pay the Fee</p></span>
                                        <span className="s3"> <h6>Step 3</h6> <p>Get Your VISA</p></span>
                                    </div>
                                    <div className="wlc-text-span-res d-lg-none d-md-none">
                                       <ol>
                                        <li>Fill the Application</li>
                                        <li>Pay the Fee</li>
                                        <li>Get Your VISA</li>
                                       </ol>
                                    </div>
                                </div>
                                <div className='sec-one-apl-btn'>
                                    <Link className='btn btn-warning text-white' to="/apply"> Apply Now</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className='right-con-sec-one'>
                                <div className='mt-5 d-none d-lg-block'>
                                    <img src="https://i.pinimg.com/originals/7f/30/bd/7f30bdc4a2ff3fc825b9422f8146404a.gif" class="imagehome" alt="" /> 
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
        </div>
    );
}

export default TopHeader;
