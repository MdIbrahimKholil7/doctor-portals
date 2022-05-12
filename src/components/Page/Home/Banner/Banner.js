import React from 'react';
import chair from '../../../../img/images/chair.png'
import bg1 from '../../../../img/images/bg.png'
import PrimaryBtn from '../../../Shared/PrimaryBtn/PrimaryBtn';
const Banner = () => {
    return (
        <div
            style={{
                background: `url(${bg1})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
            }}
            className="hero min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={chair} alt='' className=" rounded-lg w-[374px] md:w-[500px] lg:w-[470px] xl:w-[594px]  shadow-2xl" />
                <div className='flex-1'>
                    <h1 className="text-4xl md:text-5xl  font-bold">Your New Smile Starts Here</h1>
                    <p className="py-6 lg:text-xl">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <PrimaryBtn>Get Started</PrimaryBtn>
                </div>
            </div>
        </div>
    );
};

export default Banner;