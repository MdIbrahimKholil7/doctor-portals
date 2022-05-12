import React from 'react';

const LocationCard = ({ icon, title, desc, bgColor }) => {
    return (
        <div>
            <div className={`card  lg:items-center pt-4 lg:pt-0 pb-7 lg:pb-0 lg:card-side shadow-xl ${bgColor} px-3 h-[190px] text-white`}>
                <figure><img className='w-12' src={icon} alt="Album" /></figure>
                <div className="card-body">
                    <h2 className="card-title text-xl">{title}</h2>
                    <p className='sm:text-[12px] md:text-[16px] lg:text-[16px]'>{desc}</p>
                </div>
            </div>
        </div>
    );
};

export default LocationCard;