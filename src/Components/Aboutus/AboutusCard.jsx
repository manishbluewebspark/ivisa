import React, { useEffect, useState } from 'react';
import '../Aboutus/aboutuscard.css'
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';


const AboutusCard = () => {
    const cards = [
        { title: 'Rajesh Kumar', content: 'The visa application process was incredibly smooth and efficient. I received my visa much faster than expected', url:'https://www.edubaivisa.ae/icons/Igor-Mpoual.png' },
        { title: 'Vikram Mehta', content: 'I appreciated the clear instructions provided throughout the application. It made the whole process hassle-free.' , url:'https://www.edubaivisa.ae/icons/Nipuna-Nanayakkara.png'  },
        { title: 'Pooja Sharma', content: 'The customer service was outstanding. They promptly responded to all my queries and guided me step-by-step.' ,  url:'https://www.edubaivisa.ae/icons/Alelei.png'  },
        { title: 'Ankita Gupta', content: 'I was impressed with the professionalism of the staff. They were knowledgeable and helped me choose the right visa option.', url:'https://www.edubaivisa.ae/icons/Yasmine-El-Madani.png' },
        { title: 'Deepika Singh', content: 'Overall, a great experience. I would definitely recommend this service to anyone needing a UAE visa.', url:'https://www.edubaivisa.ae/icons/Pinar-Avci.png' },
      ];

    const [centerSlidePercentage, setCenterSlidePercentage] = useState(100);

      const updateCenterSlidePercentage = () => {
        const windowWidth = window.innerWidth;
    
        if (windowWidth >= 1024) {
          setCenterSlidePercentage(33.33);  // For large screens
        } else if (windowWidth >= 992) {
          setCenterSlidePercentage(60);  // For medium screens
        } else if (windowWidth >= 768) {
          setCenterSlidePercentage(33.33);  // For small screens (tablets)
        } else if (windowWidth >= 576) {
          setCenterSlidePercentage(80);  // For extra small screens (large phones)
        } else {
          setCenterSlidePercentage(100);  // For very small screens (small phones)
        }
      };
    
      useEffect(() => {
        // Set the initial centerSlidePercentage
        updateCenterSlidePercentage();
    
        // Update centerSlidePercentage on window resize
        window.addEventListener('resize', updateCenterSlidePercentage);
    
        // Cleanup event listener on component unmount
        return () => {
          window.removeEventListener('resize', updateCenterSlidePercentage);
        };
      }, []);

    
      return (
        <Carousel
          showThumbs={false}
          showStatus={false}
          infiniteLoop
          useKeyboardArrows
          autoPlay
          centerMode
          centerSlidePercentage={centerSlidePercentage}
          interval={2000000}
          transitionTime={500}
          swipeable
        >
          {cards.map((card, index) => (
            <div className="card carousel-card" key={index}>
                <div className='carousel-header'>
                    <div className='card-img'><img src={card.url} alt="Card Image" />
                    </div>
                    <div className='mt-4'>{card.title}</div>
                </div>
                <div className='mt-4'>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                </div>
                <div  className='carousel-content mt-4'>
                    <p>{card.content}</p>
                </div>
                <div className='mt-4 mb-5'>
                    <img src="https://www.edubaivisa.ae/images/testimonial-google-icon.svg" height={20} width={35} alt="testimonial google icon" />
                </div>
            </div>
          ))}
        </Carousel>
      );
}

export default AboutusCard;
