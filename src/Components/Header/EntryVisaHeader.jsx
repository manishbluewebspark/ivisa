import React from 'react';
import headeicon1 from '../../images/headicon1.png';
import headeicon2 from '../../images/headicon2.png';
import headeicon3 from '../../images/headicon3.png';
import headeicon4 from '../../images/headicon4.png';
import headeicon5 from '../../images/headicon5.png';
import headeicon6 from '../../images/headicon6.png';
import headeicon7 from '../../images/headicon7.png';
import headeicon8 from '../../images/headicon8.png';





const EntryVisaHeader = (props) => {
    return (
        <div>
            <section className='header-sec'>
                <div className="container header-con">
                    <h2 className='text-center'>{props.title}</h2>
                    <h6 className='text-center'>{props.descp}</h6>
                </div>
                <div className='container'>
                <div className='row Entryvisa-head pb-4'>
                    <div className='card-img'>
                        <img src={headeicon1} height={60} width={60} alt="" />
                    </div>
                    <div className='card-img'>
                        <img src={headeicon2} height={60} width={60} alt="" />
                    </div>
                    <div className='card-img'>
                        <img src={headeicon3} height={60} width={60} alt="" />
                    </div>
                    <div className='card-img'>
                        <img src={headeicon4} height={60} width={60} alt="" />
                    </div>
                    <div className='card-img'>
                        <img src={headeicon5} height={60} width={60} alt="" />
                    </div>
                    <div className='card-img'>
                        <img src={headeicon6} height={60} width={60} alt="" />
                    </div>
                    <div className='card-img'>
                        <img src={headeicon7} height={60} width={60} alt="" />
                    </div>
                    <div className='card-img'>
                        <img src={headeicon8} height={60} width={60} alt="" />
                    </div>
                </div>

                </div>
            </section>
        </div>
    );
}

export default EntryVisaHeader;
