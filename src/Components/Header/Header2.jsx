import React from 'react';
import bgblog from '../../images/imgbloghead.jpg';

const Header2 = (props) => {
    
    return (
        <>
        <section className='header-sec'>
            <div className="container header-con">
                 <h2 className='text-center'>{props.title}</h2>
                 <h6 className='text-center'>{props.descp}</h6>
            </div>
        </section>
        </>
    );
}

export default Header2;
