import React, { useEffect, useState } from 'react';
import EntryVisaHeader from '../../Header/EntryVisaHeader';
import { Link } from 'react-router-dom';
import ToggleSwitch from '../../ToggleSwitch';
import axios from 'axios';

const MultiEntry30day = () => {
    const title = "30 Days";
    const descp = "Multiple Entry VISA";
    const duration = "30 Days";
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
                const response = await axios.get(`https://thesoftwareexperts.com/cdksolar/admin/api/prices_by_page/30/6/multiple`, { headers });
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
                                                <Link className='text-white text-decoration-none btn btn-warning' to={`/apply/${encodeURIComponent(visa.duration + ' ' + visa.visa_type)}`} state={{ visa: visa }}>
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

            </section>
            <section>
                <div className='container fortenentryvisaone'>
                    <h4>Explore Dubai with Ease: Get a 30 Days Multiple Entry Visa Dubai</h4>
                    <ul>
                        <li>If your travel requires you to stay for a short time but also enter and exit the UAE more than once, you should go for one of the Dubai multiple entry tourist visas. The 30 days multiple entry UAE visa is of them. This Dubai e visa removes the hassle of getting a single entry visa every time for the same duration.</li>
                        <li>The 30 days Dubai multiple entry visa is valid for 60 days from the date of issue, you can stay in the UAE for up to 30 days from the date of entry. If you do not want to enter and exit more than once, you can choose the single-entry 30 days Dubai visa option as well.</li>
                        <li>It is important to note that visitors with a 30 day visa to Dubai are not allowed to work or engage in any form of employment during their stay. The Dubai multiple entry visa for 30 days is only valid for tourism, visiting family members, or attending business meetings.</li>
                    </ul>

                </div>
            </section>
            <section>
                <div className='container fortenentryvisaone'>
                    <h4>How much does a 30 days Dubai multiple entry visa cost</h4>
                    <ul>
                        <li>The Dubai visit visa cost, price will depend on the type of visa you select. There are two variants for the 30 days multiple entry visit UAE visa. One is a regular visa, and the other is an express visa. A regular Dubai visa processing time is around 1-3 days. But you can get the same visa in less than 24 hours by making use of the express edubai visa services option.</li>
                        <li>The cost for a regular 30 Days Multiple Entry Visa to Dubai, UAE is USD 400. The express option of the UAE multiple entry visit visa fee is USD 470 as all the procedures are completed, and your visa will be issued within 24 hours. The visa cost for a 30 days UAE visa is less than the UAE visit visa cost for 60 days.</li>
                    </ul>

                </div>
            </section>
            <section>
                <div className='container fortenentryvisaone'>
                    <h4>Documents required for a 30 Days Multiple Entry Dubai Visa</h4>
                    <p>In order to apply for a 30 days tourist visa UAE you should have:</p>
                    <ul>
                        <li>Digital copy of the applicant’s passport with a minimum validity of six months.</li>
                        <li>A coloured passport-size photograph of the applicant.</li>
                    </ul>

                </div>
            </section>
            <section>
                <div className='container fortenentryvisaone'>
                    <h4>Apply For a 30 Days UAE Multiple Entry Visa Online</h4>
                    <p>The application process involves submitting a completed visa application form, along with supporting documents such as a valid passport, passport-size photographs, and paying the Dubai multiple entry tourist visa fees. To obtain a Dubai visit visa multiple entry, you must first apply for it through an authorized visa consultancy.</p>
                    <p>edubai visa servicesoffer a suitable and convenient way to apply for a UAE multiple entry visa. Open edubaivisa.ae</p>
                    <ul>
                        <li>Click on 'Apply Now'</li>
                        <li>Under the “Choose Your visa” dropdown, select 30 days multiple entry visa. Now fill in the required details and submit the form.</li>
                        <li>This will open the payment section page. Fill in the payment details and proceed with the payment.</li>
                    </ul>

                </div>
            </section>
            <section>
                <div className='container fortenentryvisaone'>
                    <h4>Get your 30 days multi entry visa to Dubai</h4>
                    <p>The application process involves submitting a completed visa application form, along with supporting documents such as a valid passport, passport-size photographs, and paying the Dubai multiple entry tourist visa fees. To obtain a Dubai visit visa multiple entry, you must first apply for it through an authorized visa consultancy.</p>
                    <p>edubai visa servicesoffer a suitable and convenient way to apply for a UAE multiple entry visa. Open edubaivisa.ae</p>
                    <ul>
                        <li>Your 30 days UAE multiple entry visa application will be successfully submitted after the payment is completed.</li>
                        <li>The approved visa will be sent to your email or WhatsApp.</li>
                    </ul>

                </div>
            </section>
        </>
    );
}

export default MultiEntry30day;
