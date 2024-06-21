import React from 'react';

const EntryVisaHeader = (props) => {
    return (
        <div>
            <section className='header-sec'>
            <div className="container header-con">
                 <h2 className='text-center'>{props.title}</h2>
                 <h6 className='text-center'>{props.descp}</h6>
            </div>
            <div className='Entryvisa-head pb-4'>
            <div className='card-img'></div>
            <div className='card-img'></div>
            <div className='card-img'></div>
            <div className='card-img'></div>
            <div className='card-img'></div>
            <div className='card-img'></div>
            <div className='card-img'></div>
            <div className='card-img'></div>

            </div>
            </section>
        </div>
    );
}

export default EntryVisaHeader;
