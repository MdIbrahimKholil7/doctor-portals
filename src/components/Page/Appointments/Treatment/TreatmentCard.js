import React from 'react';

const TreatmentCard = ({ service }) => {
    const { name, slots } = service
    return (
        <div>
            <div className="card lg:max-w-lg bg-base-100 shadow-xl">
                <div className="card-body items-center text-center">
                    <h2 className="card-title text-secondary">{name}</h2>
                    <p>{slots[0]}</p>
                    <p className={`${!slots.length && 'text-red-500'}`}>{slots.length ? `${slots.length > 1 ? slots.length + ' spaces' : slots.length + ' space'} available` : 'Try another day'}</p>
                    <div className="card-actions">
                        <button className="bgGradient px-5 py-2 text-white rounded-lg text-[16px]">Book Appointment</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TreatmentCard;