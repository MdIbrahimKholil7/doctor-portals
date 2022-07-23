import { format } from 'date-fns';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../../_firebase_init';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'


const OpenModal = ({ treatment, setTreatment, selected, refetch }) => {
    const { name, slots, _id, price } = treatment || {}
    const [user] = useAuthState(auth)
    // const MySwal = withReactContent(Swal)
    const handleForm = async event => {
        event.preventDefault()
        console.log(event.target.slot.value)
        const book = {
            treatmentId: _id,
            treatmentName: name,
            slot: event.target.slot.value,
            date: format(selected, 'PP'),
            patientName: user.displayName,
            email: user.email,
            phone: event.target.number.value,
            price: price
        }
        console.log(book)
        try {
         /*    const { data } = await axios.post('https://mysterious-plateau-40111.herokuapp.com/book', book) */

            fetch('https://mysterious-plateau-40111.herokuapp.com/book', {
                method: "POST",
                headers: {
                    "content-type": "application/json"
                },
                body: JSON.stringify(book)
            }).then(res => res.json())
                .then(data => {
                    if (data.success) {
                        Swal.fire({
                            position: 'top-center',
                            icon: 'success',
                            title: 'Your appointment successful',
                            showConfirmButton: false,
                            timer: 5000
                        })
                    } else {
                        Swal.fire({
                            position: 'top-center',
                            icon: 'error',
                            title: `You have already booked this appointment on ${data?.result?.date}`,
                            showConfirmButton: false,
                            timer: 5000
                        })
                    }

                })

            

        } catch (error) {
            console.log(error)
        }
        refetch()
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
                            <select name='slot' className="input input-bordered w-full" >
                                {
                                    slots.length && slots.map((elem, index) => <option value={elem} key={index}>{elem}</option>)
                                }
                            </select>
                            <input type="text" name='name' value={user.displayName} readOnly placeholder="Full Name" className="input input-bordered w-full" required />
                            <input type="number" name='number' placeholder="Phone Number" className="input input-bordered w-full" required />
                            <input type="email" value={user.email} readOnly name='email' placeholder="Email" className="input input-bordered w-full" required />
                            <input type="submit" value='SUBMIT' className='w-full bg-accent text-white rounded-lg py-3' />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OpenModal;