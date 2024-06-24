import React, { useEffect, useState } from 'react';
import ToggleSwitch from './ToggleSwitch';
import { Link } from 'react-router-dom';
import axios from 'axios';


const UaeVisa = () => {
    
    const [activeTab, setActiveTab] = useState('single');
    const [isActive, setActive] = useState(false);

    const [visaPrices, setVisaPrices] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    
    const handleClick = () => {
      setActive(prevState => !prevState);
    };

    const username = 'admin';
    const password = '1234';
    //const encodedCredentials =  btoa(`${username}:${password}`);
    const encodedCredentials = 'Basic ' + btoa(username + ':' + password);
    const headers = {
      'Authorization': encodedCredentials,
      'X-API-KEY': 'CODEX@123',
    };

    useEffect(() => {
        const fetchVisaPrices = async () => {
            try {
                const response = await axios.get(`https://thesoftwareexperts.com/cdksolar/admin/api/prices/${activeTab}`, { headers });
                setVisaPrices(response.data);
                setLoading(false);
            } catch (error) {
                setError(error);
                setLoading(false);
            }
        };

        fetchVisaPrices();
    }, [activeTab]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

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
                                    checked={activeTab === 'single'}
                                    onChange={() => setActiveTab('single')}
                                />
                                <input
                                    type="radio"
                                    id="button-2"
                                    name="tab"
                                    checked={activeTab === 'multiple'}
                                    onChange={() => setActiveTab('multiple')}
                                />
                                <div className='text-center mb-2 switch'>
                                    <span className='sig-db-btn '>
                                        <a className={activeTab === "single" ? 'tabs_active' : null} htmlFor="button-1" onClick={() => setActiveTab('single')}>Single Entry</a>
                                        <a className={activeTab === "multiple" ? 'tabs_active' : null} htmlFor="button-2" onClick={() => setActiveTab('multiple')}>Multiple Entry</a>
                                    </span>
                                </div>
                            </div>

                            <div id="shadow">
                                <div id="content" className='mt-4'>
                                    {activeTab === 'single' && (
                                        <div id="tab-1">
                                            <div className="row">
                                                {visaPrices.map((visa) => (
                                                    <div className="col-lg-4 col-md-4  col-alg">
                                                        <div className="card card-con">
                                                            <div className="card-body">
                                                                <div className="row">
                                                                    <div className="col card-font">
                                                                        <h3>{visa.duration}</h3>
                                                                        <p>{visa.visa_type}</p>
                                                                    </div>
                                                                    <div className="col text-right">
                                                                        <ToggleSwitch/>
                                                                    </div>
                                                                </div>
                                                                <div className="row">
                                                                    <div className="col card-font">
                                                                        <h1>${visa.price}</h1>
                                                                    </div>
                                                                    <div className='divider'></div>
                                                                </div>
                                                                <div className="row">
                                                                    <div className="col card-info">
                                                                    <h6><i  className={isActive ? 'fa fa-check  eee' : 'fa fa-check'}></i> Service Type</h6>
                                                                        <p>{visa.service_type}</p>
                                                                        <h6><i className="fa fa-check"></i> Processing Time</h6>
                                                                        <p>{visa.processing_time}</p>
                                                                        <h6><i className="fa fa-check"></i> Validity</h6>
                                                                        <p>{visa.validity}</p>
                                                                        <h6><i className="fa fa-check"></i> Stay Period</h6>
                                                                        <p>{visa.stay_period}</p>
                                                                    </div>
                                                                </div>
                                                                <div className="row">
                                                                    <div className="col card-btn">
                                                                        <Link className='text-white text-decoration-none btn btn-warning' to={`/apply/${encodeURIComponent(visa.duration +' '+ visa.visa_type)}`}> 
                                                                            Apply Now
                                                                        </Link>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    )}

                                    {activeTab === 'multiple' && (
                                        <div id="tab-2">
                                            <div className="row">
                                            {visaPrices.map((visa) => (
                                                <div className="col-md-6 col-alg">
                                                    <div className="card card-con">
                                                        <div className="card-body">
                                                            <div className="row">
                                                                <div className="col card-font">
                                                                    <h3>{visa.duration}</h3>
                                                                    <p>{visa.visa_type}</p>
                                                                </div>
                                                                <div className="col text-right">
                                                                    <ToggleSwitch/>
                                                                </div>
                                                            </div>
                                                            <div className="row">
                                                                <div className="col card-font">
                                                                    <h1>${visa.price}</h1>
                                                                </div>
                                                                <div className='divider'></div>
                                                            </div>
                                                            <div className="row">
                                                                <div className="col card-info">
                                                                 <h6><i className="fa fa-check"></i> Service Type</h6>
                                                                    <p>{visa.service_type}</p>
                                                                    <h6><i className="fa fa-check"></i> Processing Time</h6>
                                                                    <p>{visa.processing_time}</p>
                                                                    <h6><i className="fa fa-check"></i> Validity</h6>
                                                                    <p>{visa.validity}</p>
                                                                    <h6><i className="fa fa-check"></i> Stay Period</h6>
                                                                    <p>{visa.stay_period}</p>
                                                                </div>
                                                            </div>
                                                            <div className="row">
                                                                <div className="col card-btn">
                                                                <button className="btn btn-warning"><Link className='text-white text-decoration-none' to="/apply"> Apply Now</Link></button>                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                             ))}
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
