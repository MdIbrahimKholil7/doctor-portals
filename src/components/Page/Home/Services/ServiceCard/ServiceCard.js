import React from 'react';

const ServiceCard = ({services}) => {
    const {icon,desc,service}=services
    return (
        <div>
            <div className="card bg-base-100 shadow-xl h-[310px]">
                <figure className="px-10 pt-10">
                    <img src={icon} alt="Shoes" className="rounded-xl w-[100px]" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{service}</h2>
                    <p>{desc}</p>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;