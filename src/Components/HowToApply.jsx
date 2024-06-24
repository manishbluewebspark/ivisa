import React, { useState } from 'react';
import img2 from '../images/applicationform.jpg';
import img1 from '../images/choeseyourvisa.jpg';
import img3 from '../images/visa-payment.png';
import img4 from '../images/visa.jpg';
import Header from './Header/Header';

const HowToApply = () => {
  const [activeTab, setActiveTab] = useState(1);
  const title = "How To Apply";
  const descp = "Everything you need to know in just a few steps";

  const renderContent = () => {
    switch (activeTab) {
      case 1:
        return (
          <div className="card howtoapply-card">
            <div className="card-body">
              <div className="row">
                <div className="col-lg-6 text-center">
                  <img src={img1} alt="Visa Options" height={300} width={300} className="img-fluid" />

                </div>
                <div className="col-lg-6 howtoapply-right">
                  <h3 className="mt-4">Simple Steps You Can Follow:</h3>
                  <ol className="simple-steps">
                    <li>Open <a href="https://example.com">UAE VISA</a> page</li>
                    <li>Choose your suitable Visa type</li>
                    <li>Choose Visa service type (Regular, Express)</li>
                  </ol>
                </div>
              </div>
            </div>
            </div>
        );
      case 2:
        return (
          <div className="card howtoapply-card">
            <div className="card-body">
              <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-12 col-12 text-center">
                  <img src={img2} alt="Visa Options" height={300} width={300} lassName="img-fluid" />

                </div>
                <div className="col-lg-6 col-md-6 col-sm-12 col-12 howtoapply-right ">
                  <h3 className="mt-4">Simple Steps You Can Follow:</h3>
                  <ol className="simple-steps">
                    <li>Apply to visa which you need</li>
                    <li>Fill the personal info like (Name, Phone, ...etc)</li>
                    <li>Upload your documents (Passport, Picture, ...etc)</li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
        );
      case 3:
        return (
          <div className="card howtoapply-card">
            <div className="card-body">
              <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-12 col-12  text-center">
                  <img src={img3} alt="Visa Options" height={300} width={300} className="img-fluid" />

                </div>
                <div className="col-lg-6 col-md-6 col-sm-12 col-12 howtoapply-right">
                  <h3 className="mt-4">Simple Steps You Can Follow:</h3>
                  <ol className="simple-steps">
                    <li>Select the payment method that you like</li>
                    <li>Proceed with the payment</li>
                    <li>You will get the Reference Number after the payment</li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
        );
      case 4:
        return (
          <div className="card howtoapply-card pt-0">
            <div className="card-body">
              <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-12 col-12 text-center">
                  <img src={img4} alt="Visa Options" width={300} height={300} className="img-fluid" />

                </div>
                <div className="col-lg-6 col-md-6 col-sm-12 col-12 howtoapply-right">
                  <h3 className="mt-4">Simple Steps You Can Follow:</h3>
                  <ol className="simple-steps">
                    <li>Wait for Visa Processing</li>
                    <li>You will receive a Email or Whatsapp message</li>
                    <li>Download the Visa Application</li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };
  return (
    <>
      <section>
        <Header title={title} descp={descp}></Header>
      </section>
      <div className="container my-2">
        <div className="row mx-5">
          <div className="col-12">
            <div className="steps-container d-flex justify-content-between">
              <div
                className={`step ${activeTab === 1 ? 'active' : ''}`}
                onClick={() => setActiveTab(1)}
              >
                <div className="icon">
                  <i class="fa fa-cc-visa"></i>                  </div>
                <div className="text">1: Choose UAE VISA</div>
              </div>
              <div
                className={`step ${activeTab === 2 ? 'active' : ''}`}
                onClick={() => setActiveTab(2)}
              >
                <div className="icon">
                  <i class="fa fa-edit"></i>                  </div>
                <div className="text">2: Fill Application</div>
              </div>
              <div
                className={`step ${activeTab === 3 ? 'active' : ''}`}
                onClick={() => setActiveTab(3)}
              >
                <div className="icon">
                  <i class="fa fa-dollar"></i>
                </div>
                <div className="text">3: Pay the Visa Fees</div>
              </div>
              <div
                className={`step ${activeTab === 4 ? 'active' : ''}`}
                onClick={() => setActiveTab(4)}
              >
                <div className="icon">
                  <i class="fa fa-download"></i>
                </div>
                <div className="text">4: Receive the Visa</div>
              </div>
            </div>
          </div>
        </div>

        <div className="row mx-5">
          <div className="col-12">
            {renderContent()}
          </div>
        </div>
      </div>
    </>
  );
}

export default HowToApply;
