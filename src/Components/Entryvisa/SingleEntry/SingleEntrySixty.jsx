import React, { useEffect, useState } from 'react';
import EntryVisaHeader from '../../Header/EntryVisaHeader';
import { Link } from 'react-router-dom';
import ToggleSwitch from '../../ToggleSwitch';
import axios from 'axios';

const SingleEntrySixty = () => {
    const title = "60 Days";
    const descp = "Dubai Visit visa VISA";
    const duration = "60 Days";
    const [isActive, setActive] = useState(false);

    const [visaPrices, setVisaPrices] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const user = JSON.parse(localStorage.getItem('user'));

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
                const response = await axios.get(`https://thesoftwareexperts.com/cdksolar/admin/api/prices_by_page/60/3/single`, { headers });
                setVisaPrices(response.data);
                setLoading(false);
            } catch (error) {
                setError(error);
                setLoading(false);
            }
        };

        fetchVisaPrices();
    }, [duration]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }


    return (
        <>
            <EntryVisaHeader title={title} descp={descp} ></EntryVisaHeader>
            <section>
                <div className="container">
                    <div className="row mt-5">
                        {visaPrices.map((visa) => (
                            <div className="col-lg-4 col-md-4  col-alg col-alg-new">
                              <div class="card card-con">
                                <div class="card-body">
                                    <div class="row">
                                        <div class="col card-font mb-2">
                                            <h3 className='text-center'>{visa.service_type}</h3>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col card-font">
                                            <h1>${visa.price}</h1>
                                        </div>
                                        <div className='divider'></div>
                                    </div>
                                    <div className="row">
                                            <div className="col card-info">
                                                <h6><i className={isActive ? 'fa fa-check  eee' : 'fa fa-check'}></i> Service Type</h6>
                                                <p>{visa.service_type}</p>
                                                <h6><i className="fa fa-check"></i> Processing Time</h6>
                                                <p>{visa.processing_time}</p>
                                                <h6><i className="fa fa-check"></i> Validity</h6>
                                                <p>{visa.validity}</p>
                                                <h6><i className="fa fa-check"></i> Stay Period</h6>
                                                <p>{visa.stay_period}</p>
                                            </div>
                                        </div>
                                    <div class="row">
                                        <div class="col card-btn">
                                                 {user ? (
                                                <Link
                                                    className='text-white text-decoration-none btn btn-warning'
                                                    to={`/apply/${encodeURIComponent(visa.duration + ' ' + visa.visa_type)}`}
                                                    state={{ visa: visa }}
                                                >
                                                    Apply Now
                                                </Link>
                                                ) : (
                                                <Link
                                                    className='text-white text-decoration-none btn btn-warning'
                                                    to={`/login`}
                                                >
                                                    Apply Now
                                                </Link>
                                                )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            </div>
                        ))}
                    </div>

                </div>

            </section>
            <section>
                <div className='container fortenentryvisaone'>
                    <h4>An Overview of 60 Days Dubai Single Entry Visa</h4>
                    <ul>
                        <li>A 60 Days Dubai visa allows you to stay for a longer period and fulfil your travel requirements without time constraints. The 60 days UAE single entry visa is valid for 60 days from the date of issue, and the duration of stay is 60 days in the UAE.</li>
                        <li>You can select the 60 days multiple-entry UAE visa option as well if you need to enter and exit the country more than once. a 30 days Dubai visa and 14 Days Dubai visit visa are also available if you want a short term visa to enter the UAE.</li>
                        <li>Let’s take a look at the 60 days UAE visa cost, processing time, requirements, and other details.</li>
                    </ul>

                </div>
            </section>
            <section>
                <div className='container fortenentryvisaone'>
                    <h4>How Much Does a 60 Days Dubai Visit Visa Cost?</h4>
                    <ul>
                        <li>The price of a Dubai tourist visa varies according to the visa you choose. The 60 days visa Dubai price will depend upon the mode of visa you select. A regular 60 days single entry visa Dubai will cost you USD 445. A regular Dubai visa processing time for a 60 days visa to UAE is around 1-3 days, whereas the express visa will be processed within 24 hours. The express option of the 60-day Dubai visit visa price is around $515. If there is an emergency, it is advised to go for the express option instead of the regular one. The Dubai 24 hours visa price is greater than the price of regular Dubai 60 days visa because the visa procedures are completed in less than a day.</li>
                    </ul>

                </div>
            </section>
            <section>
                <div className='container fortenentryvisaone'>
                    <h4>Documents Required for a 60 Days Tourist Visa Dubai</h4>
                    <p>To apply for a 14 days tourist visa to Dubai, you should submit the following documents.</p>
                    <ul>
                        <li>Digital copy of the applicant’s passport with a minimum validity of six months.</li>
                        <li>A coloured passport-size photograph of the applicant.</li>
                    </ul>

                </div>
            </section>
            <section>
                <div className='container fortenentryvisaone'>
                    <h4>Applying for a 60 days Dubai Visa Online</h4>
                    <p>You can apply for a 60 days UAE visit visa online, through e dubai visa, one of the top e.Dubai visa services providers in Dubai. Follow the steps to apply.</p>
                    <ul>
                        <li>Open the eDubai visa 'Apply Now' page.</li>
                        <li>Choose the '60 days single entry Dubai visa' option from the 'Choose Your Visa' dropdown.</li>
                        <li>Fill in the required information and submit the form.</li>
                        <li>Proceed to the payment section, and enter your payment information to complete the payment.</li>
                    </ul>

                </div>
            </section>
            <section>
                <div className='container fortenentryvisaone'>
                    <h4>Obtain Your 60 Days Single Entry UAE visa</h4>
                    <ul>
                        <li>After paying the UAE tourist visa fee, your 60 days single entry visa UAE application will be submitted successfully.</li>
                        <li>Upon approval, the visa will be sent to you via email or WhatsApp.</li>
                    </ul>

                </div>
            </section>
        </>
    );
}

export default SingleEntrySixty;
