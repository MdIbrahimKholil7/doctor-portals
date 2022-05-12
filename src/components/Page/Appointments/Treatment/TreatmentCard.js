import React from 'react';

const TreatmentCard = ({ service, setTreatment }) => {
    const { name, slots } = service || {}
    return (
        <div>
            <div className="card lg:max-w-lg bg-base-100 shadow-xl">
                <div className="card-body items-center text-center">
                    <h2 className="card-title text-secondary">{name}</h2>
                    <p>{slots[0]}</p>
                    <p > {slots.length} {slots.length > 1 ? 'spaces' : 'space'} available
                    </p>
                    {!slots.length && <><span className={`${!slots.length && 'text-red-500'} uppercase`}>Try another day</span></>}
                    <div className="card-actions">
                        
                    <label
                        for="bookingModal"
                        disabled={slots.length === 0}
                        onClick={() => setTreatment(service)}
                        class={`btn btn-sm btn-secondary text-white uppercase ${slots.length === 0 ? 'bg-gray-500':'bgGradient'}`}
                        >Book Appointment</label>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TreatmentCard;