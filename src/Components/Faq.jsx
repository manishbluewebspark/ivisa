import React, { useState } from 'react';
import Header from './Header/Header';

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const title = "FAQ";
  const descp = "Everything you need to know about Dubai Visa";

  const faqs = [
    {
      question: 'what are the different type of visa ?',
      answer: 'The purpose of your visit will determine the type of visa you need to apply for. It could be a Dubai Tourist Visa(14/30/60 day, Regular, Express and multi-entry Visa), transit visa.'
    },
    {
      question: 'what should be the validity on my passport',
      answer: 'For Dubai Tourist Visa, the passport should be valid for at least six months from the date of travel.'
    },
    {
      question: 'is there an age criteria for applying UAE visa',
      answer: 'Yes, there is. Females below 18 years of age and males below 19 years of age need to apply for a UAE Visit Visa along with their father, mother or husband to avoid any chances of rejection.'
    }
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <>
    <Header title={title} descp={descp}></Header>
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
                </button>
              </h5>
            </div>
            <div
              id={`collapse${index}`}
              className={`collapse ${activeIndex === index ? 'show' : ''}`}
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
