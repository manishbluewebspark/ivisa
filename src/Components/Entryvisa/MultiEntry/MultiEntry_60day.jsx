import React, { useEffect, useState } from 'react';
import EntryVisaHeader from '../../Header/EntryVisaHeader';
import { Link } from 'react-router-dom';
import ToggleSwitch from '../../ToggleSwitch';
import axios from 'axios';

const MultiEntry60day = () => {
    const title = "60 Days";
    const descp = "Multiple Entry VISA";
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
                const response = await axios.get(`https://thesoftwareexperts.com/cdksolar/admin/api/prices_by_page/60/7/multiple`, { headers });
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
                    <h4>Get To Know About 60 Days UAE Multiple Entry Visa</h4>
                    <ul>
                        <li>If you need an extended stay in the UAE, which also requires exiting and entering more than once, the 60 days multiple entry Dubai visa is the one you should select. The 60 days multiple entry visa UAE is valid for 60 days from the date of issue, and the duration of stay is 60 days in the country.</li>
                        <li>This is a long term Dubai visa when compared with the other options, such as the 30 days UAE visit visa and the 14 days Dubai visa, which are short-term visas. The UAE visit visa cost for 60 days is greater than that of the short-term visas.</li>
                        <li>More details about the 60 days Dubai multiple entry visa price, requirements, and application process are discussed below.</li>
                    </ul>

                </div>
            </section>
            <section>
                <div className='container fortenentryvisaone'>
                    <h4>Dubai 60 Days Visit Visa Price Details</h4>
                    <ul>
                        <li>The 60 days Dubai multiple entry visa cost will vary according to the type of visa you select. The Dubai 60 days multiple entry visa has two options to choose from. Regular visa and express visa.</li>
                        <li>The Dubai visa Processing time for a regular 60 days Dubai multiple entry tourist visa is around 1-3 days, and the cost will be USD 490. If you don’t need multiple entries, you can also go with the 60 days Dubai, UAE single entry visa.</li>
                        <li>On the other hand, the express visa option of the 60 days single entry visa uae is recommended for travellers who are on a tight schedule and need to enter the UAE as soon as possible.</li>
                        <li>With the express option, travellers can get the 60 days multiple entry tourist visa UAE in less than 24 hours, making it an ideal choice for those who need to travel to Dubai on short notice. The express 60 days UAE multiple entry visa cost is USD 560.</li>
                    </ul>

                </div>
            </section>
            <section>
                <div className='container fortenentryvisaone'>
                    <h4>Tourist Visa UAE Requirements for a UAE 60 days visit visa</h4>
                    <p>The following documents are required to apply for a 60 day tourist visa to Dubai</p>
                    <ul>
                        <li>Digital copy of the applicant’s passport with a minimum validity of six months.</li>
                        <li>A coloured passport-size photograph of the applicant.</li>
                    </ul>

                </div>
            </section>
            <section>
                <div className='container fortenentryvisaone'>
                    <h4>Apply For A UAE Visit Visa 60 Days Online</h4>
                    <p>eDubai visa portal is one of the best Dubai visa service providers, where you can get your UAE Visit Visa and Dubai Tourist Visa. Through this Dubai visa application portal, you can conveniently apply for a 60 days visit visa UAE and other e.Dubai visa services.</p>
                    <ul>
                        <li>Step 1 : Go to edubaivisa.ae</li>
                        <li>Step 2: Open the “Apply Now” page.</li>
                        <li>Step 3: Under the “Choose Your Visa” option, select the 60 days multiple entry UAE visa, fill in the required details, and submit the form.</li>
                        <li>Step 4: Fill in the payment details on the next page and proceed with the payment.</li>
                    </ul>

                </div>
            </section>
            <section>
                <div className='container fortenentryvisaone'>
                    <h4>Get your 60 days Tourist Visa UAE Online</h4>
                    <ul>
                        <li>Your 60 days UAE multiple entry visa application will be successfully submitted after you complete the 60 days Dubai visa fee payment.</li>
                        <li>After approval, the 60 days multiple entry visa Dubai will be sent to your email or WhatsApp.</li>
                    </ul>

                </div>
            </section>
        </>
    );
}

export default MultiEntry60day;
