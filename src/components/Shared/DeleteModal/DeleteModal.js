import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../_firebase_init';
import useAdmin from '../../hooks/useAdmin';
import Loading from '../../Shared/Loading/Loading';
const DeleteModal = ({ setModal, refetch, modal }) => {
    const { _id, name } = modal
    const [user] = useAuthState(auth)
    const [admin] = useAdmin(user)
    const deleteDoctor = () => {
       
        if (admin) {
            fetch(`http://localhost:5000/delete-doctor/${_id}`, {
                method: 'DELETE',
                headers:{
                    authorization:`Bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(res => res.json())
                .then(data => {
                    setModal(null)
                    refetch()
                    console.log(data)
                })
        }
    }
    return (
        <div>

            <input type="checkbox" id="delete-modal" class="modal-toggle" />
            <div class="modal">
                <div class="modal-box py-24">
                    <h3 class="font-bold text-lg">Are you sure you want to delete <span className='text-red-500'>Mr {name}</span></h3>
                    <div class="modal-action">
                        <button onClick={deleteDoctor} className='btn bg-red-500 outline-none border-0'>Delete</button>
                        <label for="delete-modal" class="btn">Cancel</label>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default DeleteModal;