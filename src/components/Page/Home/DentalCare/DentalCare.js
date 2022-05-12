import React from 'react';
import treatMent from '../../../../img/images/treatment.png'
import PrimaryBtn from '../../../Shared/PrimaryBtn/PrimaryBtn';

const DentalCare = () => {
    return (
        <div>
            <div className="hero min-h-screen mt-24">
                <div className="hero-content justify-between p-0 flex-col lg:flex-row">
                    <img src={treatMent} alt='' className="w-[322px] md:[400px] lg:w-[458px] max-w-sm rounded-lg shadow-2xl" />
                    <div className='w-[322px] md:w-[400px] lg:w-[497px] pl-0 lg:pl-12 '>
                        <h1 className="text-4xl lg:text-5xl font-bold">Exceptional Dental Care, on Your Terms</h1>
                        <p className="py-6 text-[16px]">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <PrimaryBtn>Get Started</PrimaryBtn>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DentalCare;