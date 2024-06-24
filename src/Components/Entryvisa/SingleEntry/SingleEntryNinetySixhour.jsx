import React from 'react';
import EntryVisaHeader from '../../Header/EntryVisaHeader';
import { Link } from 'react-router-dom';

const SingleEntryNinetySixhour = () => {
    const title = "96 Hours";
    const descp = "Dubai Transit Visa"
    return (
        <>
            <EntryVisaHeader title={title} descp={descp} ></EntryVisaHeader>
            <section>
                <div className="container">
                    <div class="row mt-5">
                        <div class="col-md-6 col-alg">
                            <div class="card card-con">
                                <div class="card-body">
                                    <div class="row">
                                        <div class="col card-font mb-2">
                                            <h3 className='text-center'>Regular</h3>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col card-font">
                                            <h1>$140</h1>
                                        </div>
                                        <div className='divider'></div>
                                    </div>
                                    <div class="row">
                                        <div class="col card-info">
                                            <h6><i class="fa fa-check"></i> Service Type</h6>
                                            <p>Regular Visa-Single Entry</p>
                                            <h6><i class="fa fa-check"></i> Processing Time</h6>
                                            <p>1-3 business days</p>
                                            <h6><i class="fa fa-check"></i> Validity</h6>
                                            <p>60 days from date of issue</p>
                                            <h6><i class="fa fa-check"></i> Stay Period</h6>
                                            <p> 96 Hours from date of entry</p>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col card-btn">
                                        <button className="btn btn-warning"><Link className='text-white text-decoration-none' to="/apply"> Apply Now</Link></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-md-6 col-alg">
                            <div class="card card-con">
                                <div class="card-body">
                                    <div class="row">
                                        <div class="col card-font mb-2">
                                            <h3 className='text-center'>Express</h3>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col card-font">
                                            <h1>$200</h1>
                                        </div>
                                        <div className='divider'></div>
                                    </div>
                                    <div class="row">
                                        <div class="col card-info">
                                            <h6><i class="fa fa-check"></i> Service Type</h6>
                                            <p>Express Visa-Single Entry</p>
                                            <h6><i class="fa fa-check"></i> Processing Time</h6>
                                            <p>Within 24 hours</p>
                                            <h6><i class="fa fa-check"></i> Validity</h6>
                                            <p>60 days from date of issue</p>
                                            <h6><i class="fa fa-check"></i> Stay Period</h6>
                                            <p>96 Hours from date of entry</p>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col card-btn">
                                        <button className="btn btn-warning"><Link className='text-white text-decoration-none' to="/apply"> Apply Now</Link></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
            <section>
                <div className='container fortenentryvisaone'>
                    <h4>Dubai Transit Visa 96 hours: Everything You Need to Know</h4>
                    <ul>
                        <li>The Dubai Transit Visa is a type of entry permit given to travelers who require a layover for more than 8 hours in the airport as a part of airport transit. With this Dubai visa for layover, travelers can move around the UAE for numerous purposes, such as going on a city tour, visiting friends and family, shopping, etc. The validity of a Dubai airport transit visa is 96 hours, and it is not eligible for extension or renewal. If you need a short term visa to stay in the country for more than 96 hours, it is recommended to select the 14 days Dubai tourist visa option. This is a single entry visa, so if you need to enter the UAE more than once, a multiple entry UAE visit visa is what you should select.</li>
                    </ul>
                </div>
            </section>
            <section>
                <div className='container fortenentryvisaone'>
                    <h4>Dubai Transit Visa Price</h4>
                    <ul>
                        <li>The UAE transit visa fee for a regular visa is USD 140. The regular transit visa for Dubai takes around 1-3 days to get processed. In case you need your transit visa for UAE before that, you can utilize the express option of the same visa. With the express option, you can receive your 96 hours Dubai transit visa within 24 hours. The cost of an express transit Dubai visa is USD 200.</li>
                    </ul>

                </div>
            </section>
            <section>
                <div className='container fortenentryvisaone'>
                    <h4>Documents required to apply for a UAE Transit VIsa</h4>
<p>You should submit the following documents while applying for a Dubai transit visa for 96 hours</p>
                    <ul>
                        <li>Digital copy of the applicant’s Passport with a minimum validity of 6 months</li>
                        <li>A coloured passport-sized photograph of the applicant.</li>
                        <li>Onward flight ticket to a destination other than the one you are coming from.</li>
                    </ul>

                </div>
            </section>
            <section>
                <div className='container fortenentryvisaone'>
                    <h4>How do I get a transit visa Dubai</h4>
                    <p>e Dubai Visa services provides an easy online portal where you can apply for Dubai transit visa online. Click on the “Apply Now” button.</p>
                    <ul>
                        <li>Select “Dubai Transit visa” and proceed with the required form.</li>
                        <li>Fill in your payment details on the next page and pay the visa fee.</li>
                    </ul>
                </div>
            </section>
            <section>
                <div className='container fortenentryvisaone'>
                    <h4>Get Your 96 hour UAE visa Online</h4>
                    <ul>
                        <li>Once the payment is successfully made, the application procedures will be started. After the approval, the UAE transit visa will be sent to your email or WhatsApp.</li>
                    </ul>

                </div>
            </section>
        </>
    );
}

export default SingleEntryNinetySixhour;
