import React from 'react';
import Header from './Header/Header';
import contactusimg from '../images/contact-us.png';

const ContactUs = () => {
    const title = "Contact Us";
    const descp = "Reach Out to Our Team";

    return (
        <>
            <Header title={title} descp={descp}></Header>
            <section className='contactus-sec'>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-4 col-sm-12 col-12 card-con-contactus">
                            <div className='cont-opt card text-center p-4 m-2'>
                                <div><i className="fa fa-phone fa-phone-icon"></i></div>
                                <h4>Call Us</h4>
                                <p>+971 50 766 7786</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-12 card-con-contactus text-center">
                            <div className='cont-opt card text-center p-2 m-2'>
                                <div><i className="fa fa-map-marker fa-location-icon"></i></div>
                                <h4>Visit Us</h4>
                                <p className='visit-us'>Tosawar LLC FZ 2048 Burjuman Business Tower 15 28A St Al Mankhool Bur Dubai Dubai UAE</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-12 col-12 card-con-contactus">
                            <div className='cont-opt card text-center p-4 m-2'>
                                <div><i className="fa fa-envelope fa-email-icon"></i></div>
                                <h4>Email Us</h4>
                                <p>Support@ivisa.com</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-12 mb-4 text-center">
                            <img src={contactusimg} alt="Contact Us" className="img-fluid" />
                        </div>
                        <div className="col-lg-6 col-md-12">
                            <form>
                                <h4>Send Us a Message</h4>
                                <div className="row contact-form-row">
                                    <div className="col-lg-6 col-md-6 mb-3">
                                        <input type="text" className="form-control" placeholder="First name*" />
                                    </div>
                                    <div className="col-lg-6 col-md-6 mb-3">
                                        <input type="text" className="form-control" placeholder="Last name*" />
                                    </div>
                                </div>
                                <div className="row contact-form-row">
                                    <div className="col-12 mb-3">
                                        <input type="email" className="form-control" placeholder="E-mail*" />
                                    </div>
                                </div>
                                <div className="row contact-form-row">
                                    <div className="col-12 mb-3">
                                        <input type="text" className="form-control" placeholder="Mobile" />
                                    </div>
                                </div>
                                <div className="row contact-form-row">
                                    <div className="col-12 mb-3">
                                        <textarea className="form-control" placeholder="Write here.."></textarea>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-12 text-center">
                                        <button className='btn btn-warning w-50'>Submit</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
            <hr />
        </>
    );
}

export default ContactUs;
