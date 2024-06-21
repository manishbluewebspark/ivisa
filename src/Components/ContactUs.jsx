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
                        <div className="col-lg-4 card-con-contactus">
                            <div className='cont-opt card'>
                                <div><i class="fa fa-phone fa-phone-icon"></i>
                                </div>
                                <h4>Call Us</h4>
                                <p>123-456-7890</p>
                            </div>
                        </div>
                        <div className="col-lg-4 card-con-contactus">
                            <div className='cont-opt card'>
                                <div><i class="fa fa-envelope fa-email-icon"></i>
                                </div>
                                <h4>Call Us</h4>
                                <p>123-456-7890</p>
                            </div>
                        </div>
                        <div className="col-lg-4 card-con-contactus">
                            <div className='cont-opt card'>
                                <div><i class="fa  fa-map-marker fa-location-icon"></i>
                                </div>
                                <h4>Call Us</h4>
                                <p>123-456-7890</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div>
                                <img src={contactusimg} alt="" height={500} width={500} />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div>
                                <form>
                                    <h4>Send Us a message</h4>
                                    <div class="row contact-form-row">
                                        <div class="col-lg-6">
                                            <input type="text" class="form-control" placeholder="First name*" />
                                        </div>
                                        <div class="col-lg-6">
                                            <input type="text" class="form-control" placeholder="Last name*" />
                                        </div>
                                    </div>
                                    <div class="row contact-form-row">
                                        <div class="col-lg-12">
                                            <input type="email" class="form-control" placeholder="E-mail*" />
                                        </div>
                                    </div>
                                    <div class="row contact-form-row">
                                        <div class="col-lg-12">
                                            <input type="text" class="form-control" placeholder="Mobile" />
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-lg-12 contact-textarea">
                                            <textarea name="" id="" class="form-control" placeholder="Write here.."  ></textarea>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-lg-12 text-center">
                                            <button className='btn btn-warning w-25'>Submit</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <hr />

        </>

    );
}

export default ContactUs;
