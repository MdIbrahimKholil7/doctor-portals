import { format } from 'date-fns';
import React from 'react';

const OpenModal = ({ treatment, setTreatment, selected }) => {
    const { name, slots } = treatment || {}
    const handleForm = event => {
        event.preventDefault()
        setTreatment(null)
    }
    return (
        <div>
            <input type="checkbox" id="bookingModal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box p-[19px]">
                    <label for="bookingModal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="font-bold text-lg">{name}</h3>
                    <div className='mt-12'>
                        <form onSubmit={handleForm} className='grid gap-5'>
                            <input type="text" name='date' value={format(selected, 'PP')} placeholder="Type here" className="input input-bordered w-full" disabled />
                            <select className="input input-bordered w-full" >
                                {
                                   slots.length && slots.map((elem, index) => <option value={elem} key={index}>{elem}</option>)
                                }
                            </select>
                            <input type="text" name='name' placeholder="Full Name" className="input input-bordered w-full" required />
                            <input type="number" name='number' placeholder="Phone Number" className="input input-bordered w-full" required />
                            <input type="email" name='email' placeholder="Email" className="input input-bordered w-full" required />
                            <input type="submit" value='SUBMIT' className='w-full bg-accent text-white rounded-lg py-3' />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OpenModal;