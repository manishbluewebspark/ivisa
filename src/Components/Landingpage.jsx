import React, { useState } from 'react';
//import img from 'https://thejurni.io/uploads/1625049748.gif'
import ToggleSwitch from './ToggleSwitch';
import AboutusCard from './Aboutus/AboutusCard';
import { Link } from 'react-router-dom';
import TopHeader from './Header/TopHeader';
import UaeVisa from './UaeVisa';




const Landingpage = () => {
    const [activeTab, setActiveTab] = useState('tab-1');

    const [isActive, setActive] = useState(false);

const handleClick = () => {
  setActive(prevState => !prevState);
};
    return (
        <>
            <TopHeader></TopHeader>
            <UaeVisa></UaeVisa>
            <section className='aboutus-card'>
                <div className="container">
                    <h3 className='aboutus-card-h text-center mt-5 mb-5'>What Our Clients Say About Us</h3>
                    <div className='mb-5'>
                        <AboutusCard/>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Landingpage;
