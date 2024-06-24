import React from 'react';
import logo from '../../images/ivisa-logo.jpg'
import '../Footer/footer.css'
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <>
            <section className='footer-sec'>
                <div className="container">
                    <div className="row footer-row">
                        <div className="col-lg-3">
                            <div>
                                <img src={logo} alt="" width={200} height={100} />
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className='footer-heading'>
                                <h5>Company</h5>
                            </div>
                            <div className='footer-sitemap'>
                                <p><a href="#">UAE Visa</a></p>
                                <p><a href="">Contact us</a></p>
                                <p><Link to='/terms'>Terms & Conditions</Link></p>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className='footer-heading'>
                                <h5>Resources</h5>
                            </div>
                            <div className='footer-sitemap'>
                                <p><a href="">How to Apply</a></p>
                                <p><a href="">Blog</a></p>
                                <p><a href="">FAQs</a></p>
                            </div>
                        </div>
                        <div className="col-lg-3 payment">
                            <div className='footer-heading-pay'>
                                <h5 className='text-center'>Payment Methods</h5>
                            </div>
                            <div className='footer-payment-opt'>
                                <p> <img src="https://www.edubaivisa.ae/icons/padlock.png" alt="lock icon" width="15" height="15"/>100% Secure payment options</p>
                                <div className='footer-payment-opt'>
                                    <img src="https://www.edubaivisa.ae/icons/visa.svg" alt="" width={60} height={50} />
                                    <img src="https://www.edubaivisa.ae/icons/mastercard.svg" alt="" width={60} height={50}  />
                                    <img src="	https://www.edubaivisa.ae/icons/american-express.svg" alt="" width={60} height={50}  />
                                    <img src="https://www.edubaivisa.ae/icons/apple-pay.svg" alt="" width={60} height={50}  />
                                    <img src="https://www.edubaivisa.ae/icons/samsung-pay.svg" alt="" width={60} height={50}  />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='mb-2'>
                        <p className='text-center'>This site is operated by ONLY TOURISM L.L.C, a travel agency registered in Dubai under number  Dubai, United Arab Emirates.</p>
                        <p className='text-center'>Copyright ©2024 iVisa  | All Rights Reserved</p>
                        <div className='text-center'>
                            <span> <i className="fa fa-twitter"> </i></span>
                            <span> <i className="fa fa-facebook"> </i></span>
                            <span> <i className="fa fa-instagram"></i> </span>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Footer;
