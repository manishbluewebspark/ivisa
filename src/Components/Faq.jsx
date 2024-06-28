import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import Header from './Header/Header';

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const title = "FAQ";
  const descp = "Everything you need to know about Dubai Visa";

  const faqs = [
    {
      question: 'What are the different types of visa?',
      answer: 'The purpose of your visit will determine the type of visa you need to apply for. It could be a Dubai Tourist Visa (14/30/60 day, Regular, Express, and multi-entry Visa), transit visa.'
    },
    {
      question: 'What should be the validity of my passport?',
      answer: 'For Dubai Tourist Visa, the passport should be valid for at least six months from the date of travel.'
    },
    {
      question: 'Is there an age criteria for applying UAE visa?',
      answer: 'Yes, there is. Females below 18 years of age and males below 19 years of age need to apply for a UAE Visit Visa along with their father, mother, or husband to avoid any chances of rejection.'
    },
    {
      question: 'What are the documents required for Dubai visa?',
      answer: 'The documents required for a Dubai visa include a valid passport, completed visa application form, passport-size photographs, confirmed flight ticket, and proof of accommodation.'
    },
    {
      question: 'How long does it take to process a Dubai visa?',
      answer: 'The processing time for a Dubai visa varies depending on the type of visa and application method. It can range from 1 to 5 working days.'
    },
    {
      question: 'Can I extend my Dubai visa?',
      answer: 'Yes, you can extend your Dubai visa under certain circumstances. It is advisable to apply for an extension well in advance of your visa expiry date.'
    },
    {
      question: 'What is the difference between a Dubai tourist visa and a visit visa?',
      answer: 'A Dubai tourist visa is issued for tourism purposes and allows multiple entries, while a visit visa is intended for visiting family or friends and is usually for a single entry.'
    },
    {
      question: 'Do I need travel insurance for a Dubai visa?',
      answer: 'While travel insurance is not mandatory for obtaining a Dubai visa, it is highly recommended to protect against unexpected events such as medical emergencies, trip cancellations, or lost baggage.'
    },
    {
      question: 'Can I work on a tourist visa in Dubai?',
      answer: 'No, you cannot work on a tourist visa in Dubai. A separate employment visa is required to work legally in the UAE.'
    },
    {
      question: 'What should I do if my Dubai visa application is rejected?',
      answer: 'If your Dubai visa application is rejected, you can reapply after addressing the reasons for rejection or seek guidance from visa experts for assistance.'
    },
    {
      question: 'Where can I get my international money exchanged?',
      answer: 'Exchanging money in Dubai is not a tough task. Money exchange counters can be found in banks, shopping centres, and malls where you can exchange your foreign currency. However, the majority of banks and ATMs also accept credit cards.'
    },
    {
      question: 'What is Dubai\'s weather forecast?',
      answer: 'Because Dubai is located in the Arabian Desert, its climate is primarily hot and muggy. The temperature may climb to 40 to 45 degrees Celsius in the summer, however, in the winter, when the temperature falls to 25 degrees Celsius or below, particularly between October to March, it feels nice, cold, and refreshing.'
    },
    {
      question: 'What is UAE\'s time zone?',
      answer: 'The time zone of UAE is GMT/UTC +4 hours.'
    },
    {
      question: 'Which type of telecommunication services is provided in the UAE?',
      answer: 'Du and Etisalat are the main mobile phone providers in Dubai.'
    },
    {
      question: 'What is the official currency of the UAE?',
      answer: 'The official currency of UAE is the Emirates dirham (AED).'
    },
    {
      question: 'How much cash should people travelling to the UAE bring with them?',
      answer: 'When visiting the UAE as a tourist, you must have a return ticket and hotel reservation in addition to a minimum of 3000 AED in cash or credit card.'
    },
    {
      question: 'Can single women travel to the UAE as tourists?',
      answer: 'Yes, single women can get a 30-day tourist visa, renewable once for a similar period. They must be sponsored by a tourist agency or hotel. Note that visa applications for women under 25 may have a higher chance of rejection.'
    }
  ];

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
