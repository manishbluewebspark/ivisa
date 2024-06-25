import React, { useState } from 'react';
import logo from '../../images/ivisa-logo.jpg'

const PaymentGateway = () => {
    const [activeTab, setActiveTab] = useState('credit-card');

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    return (
        <>
        <section className='payment-section'>
        <div className="con-payment-gateway container">
            <div className="row d-flex align-items-center justify-content-center ">
                <div className="col-lg-6">
                    <div className="card payment-gateway-card my-5">
                        <div className="card-header text-center bg-white payment-card-head">
                            <img src={logo} alt="" height={80} width={180} />
                        </div>
                        <div className="card-body">
                            <div>
                                <ul className="nav nav-tabs">
                                    <li className="nav-item nav-item-payment ">
                                        <button
                                            className={`nav-link nav-link-payment ${activeTab === 'credit-card' ? 'active' : ''}`}
                                            onClick={() => handleTabClick('credit-card')}
                                        >
                                            Credit Card
                                        </button>
                                    </li>
                                    <li className="nav-item">
                                        <button
                                            className={`nav-link nav-link-payment ${activeTab === 'scanner' ? 'active' : ''}`}
                                            onClick={() => handleTabClick('scanner')}
                                        >
                                            UPI Option
                                        </button>
                                    </li>
                                </ul>
                                <div className="tab-content mt-3">
                                    {activeTab === 'scanner' && (
                                        <div id="scanner" className="tab-pane active">
                                            <p className='text-center'> Scan and Pay</p>
                                           <div className="payment-scan-con">
                                           <div className='payment-scan'></div>
                                           </div>
                                           <p className='text-center mt-1'>Scan and Pay using any banking app </p>
                                           <hr />
                                           <form action="">
                                                <div className="mb-3">
                                                    <label htmlFor="upiid" className="form-label text-center">Enter UPI Id</label>
                                                    <input type="text" className="form-control" id="upiid" placeholder="7890123456@ybl" required />
                                                </div>
                                                <button type="submit" className="btn btn-warning w-100 text-white">Pay Now</button>
                                           </form>
                                        </div>
                                    )}
                                    {activeTab === 'credit-card' && (
                                        <div id="credit-card" className="tab-pane active">
                                            <form>
                                                <div className="mb-3">
                                                    <label htmlFor="card-number" className="form-label">Card Number</label>
                                                    <input type="text" className="form-control" id="card-number" placeholder="1234 5678 9012 3456" required />
                                                </div>
                                                <div className="mb-3">
                                                    <label htmlFor="card-holder" className="form-label">Card Holder's Name</label>
                                                    <input type="text" className="form-control" id="card-holder" placeholder="John Doe" required />
                                                </div>
                                                <div className="mb-3">
                                                    <label htmlFor="expiry-date" className="form-label">Expiry Date</label>
                                                    <div className="row">
                                                        <div className="col">
                                                            <input type="text" className="form-control" id="expiry-month" placeholder="MM" required />
                                                        </div>
                                                        <div className="col">
                                                            <input type="text" className="form-control" id="expiry-year" placeholder="YY" required />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="mb-3">
                                                    <div className="row">
                                                        <div className="col">
                                                        <label htmlFor="cvv" className="form-label">CVV</label>
                                                        <input type="text" className="form-control" id="cvv" placeholder="123" required />
                                                        </div>
                                                        <div className="col">
                                                        <label htmlFor="zipcode" className="form-label">Zip Code</label>
                                                        <input type="text" className="form-control" id="zipcode" placeholder="452000" required />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="mb-3">
                                                    <label htmlFor="billing-address" className="form-label">Billing Address</label>
                                                    <textarea className="form-control" id="billing-address" rows="3" placeholder="1234 Main St, City, Country" required></textarea>
                                                </div>
                                                <div className="mb-3">
                                                    <div className='total-payable'>
                                                        Total Payable Amount: <span></span>
                                                    </div>
                                                </div>
                                                <button type="submit" className="btn btn-warning w-100 text-white">Pay Now</button>
                                            </form>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                        <div className="card-footer">
                        <div className='footer-payment-opt d-md-block text-center'>
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
                </div>
            </div>
        </div>
        </section>
        </>
    );
};

export default PaymentGateway;
