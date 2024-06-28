import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import Header from './Header/Header';

const Faq = () => {
  const [faqs, setFaqs] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0); // Set the first FAQ to be open by default
  const title = "FAQ";
  const descp = "Everything you need to know about Dubai Visa";

  const username1 = 'admin';
  const password1 = '1234';
  const encodedCredentials = 'Basic ' + btoa(username1 + ':' + password1);
  const headers = {
    'Authorization': encodedCredentials,
    'X-API-KEY': 'CODEX@123',
  };

  useEffect(() => {
    // Fetch FAQs from your CodeIgniter API
    axios.get('https://thesoftwareexperts.com/cdksolar/admin/api/faq_all', { headers })
      .then(response => {
        setFaqs(response.data);
      })
      .catch(error => {
        console.error('Error fetching FAQs:', error);
      });
  }, []);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <>
      <Header title={title} descp={descp} />

      <div className="bg-warning text-dark text-center p-3">
        <h5>Contact Us</h5>
        <p>
          <FontAwesomeIcon icon={faWhatsapp} className="me-2" />
          <a href="https://api.whatsapp.com/send?phone=+971507667786" target="_blank" rel="noopener noreferrer" className="text-dark">
            +971 50 766 7786
          </a>
          <br />
          <FontAwesomeIcon icon={faEnvelope} className="me-2" />
          <a href="mailto:support@ivisa.com" className="text-dark">
            support@ivisa.com
          </a>
        </p>
      </div>

      <div className="container my-5">
        <div className="row d-flex justify-content-center align-item-center">
          <div className="col-lg-10">
            <div className="accordion" id="faqAccordion">
              {faqs.map((faq, index) => (
                <div className="card faq-card mt-3" key={index}>
                  <div className="card-header" id={`heading${index}`}>
                    <h5 className="mb-0">
                      <button
                        className="btn btn-link btn-faq"
                        type="button"
                        onClick={() => toggleFAQ(index)}
                      >
                        {faq.question}
                        <FontAwesomeIcon icon={faChevronDown} className={`ms-2 ${activeIndex === index ? 'rotate' : ''}`} />
                      </button>
                    </h5>
                  </div>
                  <div
                    id={`collapse${index}`}
                    className={`collapse ${activeIndex === index || (activeIndex === 0 && index === 0) ? 'show' : ''}`}
                    aria-labelledby={`heading${index}`}
                    data-parent="#faqAccordion"
                  >
                    <div className="card-body">{faq.answer}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Faq;
