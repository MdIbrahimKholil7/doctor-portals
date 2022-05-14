import React from 'react';

const TestimonialCard = ({ elem }) => {
    const { desc, name, img, address } = elem
    return (
        <div className='mb-5'>
            <div className="  p-0 mx-3 shadow-xl image-full">
                <div className="card-body p-4">
                    <p>{desc}</p>
                    <div className="card-actions items-center justify-start mt-6">
                        <div className="avatar">
                            <div className="w-[64px] h-[64px] rounded-full ring ring-secondary ring-offset-base-100 ring-offset-2 mr-5">
                                <img className='' src={img} alt='clientImage'/>
                            </div>
                        </div>
                        <div>
                            <h1>{name}</h1>
                            <h2>{address}</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TestimonialCard;