import React, { useState } from 'react';
import { useQuery } from 'react-query';
import DeleteModal from '../../Shared/DeleteModal/DeleteModal';
import Loading from '../../Shared/Loading/Loading';

const ManageDoctor = () => {
    const { data, loading,refetch } = useQuery('manageDoctor', () => fetch('https://mysterious-plateau-40111.herokuapp.com/manageDoctor').then(res => res.json())
    )
    const [modal, setModal] = useState(null)
    if (loading) {
        return <Loading />
    }
    const handleDelete = (doctor) => {
        setModal(doctor)
    }
    return (
        <div className='mt-52'>
            <div class="overflow-x-auto">
                <table class="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Specialty</th>
                            <th>Image</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data?.map((doctor, index) => <tr
                                key={doctor._id}
                            >
                                <td>{index + 1}</td>
                                <td>{doctor.name}</td>
                                <td>{doctor.specialize}</td>
                                <td>
                                    <div class="w-20 rounded">
                                        <img src={doctor.img} alt={doctor.name} />
                                    </div>
                                </td>
                                <td>
                                    <label onClick={() => handleDelete(doctor)} for="delete-modal" className="bg-red-500 btn-xs btn">Delete</label>
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
            {
                modal && <DeleteModal
                setModal={setModal}
                modal={modal}
                refetch={refetch}
                />
            }
        </div>
    );
};

export default ManageDoctor;