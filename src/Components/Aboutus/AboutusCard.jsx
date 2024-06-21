import React from 'react';
import '../Aboutus/aboutuscard.css'
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';


const AboutusCard = () => {
    const cards = [
        { title: 'Card 1', content: 'This is card 1 content' },
        { title: 'Card 2', content: 'This is card 2 content' },
        { title: 'Card 3', content: 'This is card 3 content' },
        { title: 'Card 4', content: 'This is card 4 content' },
        { title: 'Card 5', content: 'This is card 5 content' },
      ];
    
      return (
        <Carousel
          showThumbs={false}
          showStatus={false}
          infiniteLoop
          useKeyboardArrows
          autoPlay
          centerMode
          centerSlidePercentage={33.33}
          interval={2000000}
          transitionTime={500}
          swipeable
        >
          {cards.map((card, index) => (
            <div className="card carousel-card" key={index}>
                <div className='carousel-header'>
                    <div className='card-img'></div>
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
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem quod saepe obcaecati tenetur repudiandae ducimus laudantium animi,</p>
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
