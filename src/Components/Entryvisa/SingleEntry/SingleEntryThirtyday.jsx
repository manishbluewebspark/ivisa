import React, { useState } from 'react';
import EntryVisaHeader from '../../Header/EntryVisaHeader';

const SingleEntryThirtyday = () => {
    const title = " 30 Days";
    const descp = "Dubai Visit visa VISA";
    const [activeIndex, setActiveIndex] = useState(0);
    const user = JSON.parse(localStorage.getItem('user'));
    
    const toggleCollapse = (index) => {
      setActiveIndex(index === activeIndex ? -1 : index);
    };
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
                                            <h1>$215</h1>
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
                                            <p>14 days from date of entry</p>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col card-btn">
                                            <button class="btn btn-warning">APPLY NOW</button>
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
                                            <h1>$285</h1>
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
                                            <p>14 days from date of entry</p>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col card-btn">
                                            <button class="btn btn-warning">APPLY NOW</button>
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
                    <h4>Everything You Need to Know About a 30 Days Dubai Visa</h4>
                    <ul>
                        <li>A 30 days Dubai visa is recommended for vacations, family gatherings, or other reasons requiring a more extended stay than the 14 days single entry visa Dubai . The 30 days Dubai single entry visa is valid for 60 days from the date of issue, and the duration of stay is 30 days in the UAE and can be extended for a similar or different duration if required.</li>
                        <li>This is a short term single entry visa Dubai. Another short term UAE visa available in the country is the 7 days and 14 days single entry visa UAE If you are looking for a long term visa, you can choose the 60 days single entry visa UAE. if you are a resident of any of the GCC countries, there is also an option of 30 days UAE visa for gcc residents.</li>
                        <li>It is important to note that visitors with a 30 days visa for Dubai are not allowed to work or engage in any form of employment during their stay.</li>
                        <li>Detailed information about 30 days Dubai visa price, requirements and application process are given below.</li>
                    </ul>

                </div>
            </section>
            <section>
                <div className='container fortenentryvisaone'>
                    <h4>UAE Visit Visa Cost for 30 Days</h4>
                    <ul>
                       <li>The 30 days UAE visa cost varies depending on the processing time you choose. The cost for a regular 30 days single entry visa UAE is USD 225. The visa processing time in Dubai for a regular Dubai visa for 30 days will take around 1-3 working days.</li>
                       <li>There is also a express option available. Dubai Express visa processing time if you want to get your visa in less than 24 hours. The Dubai 30 days visa cost for an express visa is USD 295.</li>
                       <li>The express option of a Dubai visa for 30 days is recommended if you require your 30 days visa to Dubai urgently. The 30 days visa Dubai price may also vary according to the number of entries. 30 days multiple entry visa Dubai price is different from the single entry visa.</li>
                    </ul>

                </div>
            </section>
            <section>
                <div className='container fortenentryvisaone'>
                    <h4>Documents Required For a 30 days visit visa Dubai</h4>
                    <p>To apply for a uae visa for 30 days, you should submit the following documents.</p>
                    <ul>
                        <li>Digital copy of the applicant’s passport with a minimum validity of six months.</li>
                        <li>A coloured passport-size photograph of the applicant.</li>
                    </ul>

                </div>
            </section>
            <section>
                <div className='container fortenentryvisaone'>
                    <h4>How to Apply for a Dubai Visa</h4>
                    <p>The application process to get a UAE 30 days visit visa involves submitting an online UAE single short visa application form, uploading the supporting documents such as a valid passport, passport-size photographs, and paying the Dubai visit visa fee. Applying for a 30 days UAE single entry visa is easier than ever through e.dubai Visa Services. To apply for a visit visa UAE 30 days</p>
                    <ul>
                        <li>Go to Apply Now page.</li>
                        <li>Under the “Choose Your visa” dropdown, select 30 days single entry visa. Now fill in the required details and submit the form.</li>
                        <li>You will be taken to the payment section. Proceed to pay the Dubai visa fees for 30 days after filling in your payment details</li>
                    </ul>

                </div>
            </section>
            <section>
                <div className='container fortenentryvisaone'>
                    <h4>Receive Your 30 Days UAE Visa Online</h4>
                    <p>Wondering how to apply for a Dubai visa? For a Dubai visit visa apply online and get your visa seamlessly. This is a convenient and efficient way for individuals to obtain their visas without having to physically visit the embassy or consulate.</p>
                    <p>You can easily apply for a 14 days Dubai tourist visa online through a uae visa portal like e dubai visa services.</p>
                    <ul>
                        <li>After the payment is complete, your 30 days UAE single entry Dubai visa application will be successfully submitted.</li>
                        <li>After the approval, the visa will be sent to your Email or WhatsApp.</li>
                    </ul>

                </div>
            </section>
            <section>
            <div className="container my-5">
      <h2 className="mb-4">FAQs related to 30 days single entry visa UAE</h2>
      <div className="accordion" id="faqAccordion">
        <div className="card">
          <div className="card-header" id="headingOne">
            <h2 className="mb-0">
              <button
                className="btn btn-link btn-block text-left acc-btn-entry-visa"
                type="button"
                onClick={() => toggleCollapse(0)}
                aria-expanded={activeIndex === 0}
                aria-controls="collapseOne"
              >
                What is the entry validity of a 30 days tourist visa Dubai?
              </button>
            </h2>
          </div>
          <div
            id="collapseOne"
            className={`collapse ${activeIndex === 0 ? 'show' : ''}`}
            aria-labelledby="headingOne"
            data-parent="#faqAccordion"
          >
            <div className="card-body">
              The entry validity of a 30 days single entry tourist visa is 60 days from the date of approval. You can stay for 30 days in the UAE with this visa.
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-header" id="headingTwo">
            <h2 className="mb-0">
              <button
                className="btn btn-link btn-block text-left collapsed acc-btn-entry-visa"
                type="button"
                onClick={() => toggleCollapse(1)}
                aria-expanded={activeIndex === 1}
                aria-controls="collapseTwo"
              >
                Can I extend my 30 day Dubai visa entry validity?
              </button>
            </h2>
          </div>
          <div
            id="collapseTwo"
            className={`collapse ${activeIndex === 1 ? 'show' : ''}`}
            aria-labelledby="headingTwo"
            data-parent="#faqAccordion"
          >
            <div className="card-body">
              Yes, you can extend the visa’s entry validity to 60 more days prior to arriving in the UAE.
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-header" id="headingThree">
            <h2 className="mb-0">
              <button
                className="btn btn-link btn-block text-left collapsed acc-btn-entry-visa"
                type="button"
                onClick={() => toggleCollapse(2)}
                aria-expanded={activeIndex === 2}
                aria-controls="collapseThree"
              >
                What is the processing time for a 30 day visit visa Dubai?
              </button>
            </h2>
          </div>
          <div
            id="collapseThree"
            className={`collapse ${activeIndex === 2 ? 'show' : ''}`}
            aria-labelledby="headingThree"
            data-parent="#faqAccordion"
          >
            <div className="card-body">
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-header" id="headingFour">
            <h2 className="mb-0">
              <button
                className="btn btn-link btn-block text-left collapsed acc-btn-entry-visa"
                type="button"
                onClick={() => toggleCollapse(3)}
                aria-expanded={activeIndex === 3}
                aria-controls="collapseFour"
              >
                Can I extend my visa in UAE without exiting the country?
              </button>
            </h2>
          </div>
          <div
            id="collapseFour"
            className={`collapse ${activeIndex === 3 ? 'show' : ''}`}
            aria-labelledby="headingFour"
            data-parent="#faqAccordion"
          >
            <div className="card-body">
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-header" id="headingFive">
            <h2 className="mb-0">
              <button
                className="btn btn-link btn-block text-left collapsed acc-btn-entry-visa"
                type="button"
                onClick={() => toggleCollapse(4)}
                aria-expanded={activeIndex === 4}
                aria-controls="collapseFive"
              >
                What is a tourist single short visa Dubai?
              </button>
            </h2>
          </div>
          <div
            id="collapseFive"
            className={`collapse ${activeIndex === 4 ? 'show' : ''}`}
            aria-labelledby="headingFive"
            data-parent="#faqAccordion"
          >
            <div className="card-body">
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-header collapsed" id="headingSix">
            <h2 className="mb-0 collapsed">
              <button
                className="btn btn-link btn-block text-left collapsed "
                type="button"
                onClick={() => toggleCollapse(5)}
                aria-expanded={activeIndex === 5}
                aria-controls="collapseSix"
              >
                How much does a 30 day visit visa to Dubai cost?
              </button>
            </h2>
          </div>
          <div
            id="collapseSix"
            className={`collapse ${activeIndex === 5 ? 'show' : ''}`}
            aria-labelledby="headingSix"
            data-parent="#faqAccordion"
          >
            <div className="card-body">
            </div>
          </div>
        </div>
      </div>
    </div>
            </section>
        </>
    );
}

export default SingleEntryThirtyday;
