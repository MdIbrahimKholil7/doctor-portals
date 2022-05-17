import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../../Shared/Loading/Loading';

const ManageDoctor = () => {
    const { data, loading } = useQuery('manageDoctor', () => fetch('http://localhost:5000/manageDoctor').then(res => res.json())
    )
    if (loading) {
        return <Loading />
    }

    console.log(data)
    return (
        <div>

            <div class="overflow-x-auto">
                <table class="table w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Specialty</th>
                            <th>Image</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.map((doctor, index) => <tr
                                key={doctor._id}
                            >
                                <td>{index + 1}</td>
                                <td>{doctor.name}</td>
                                <td>{doctor.specialty}</td>
                                <td>
                                    <div class="w-20 rounded">
                                        <img src={doctor.img} alt={doctor.name}/>
                                    </div>
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default ManageDoctor;