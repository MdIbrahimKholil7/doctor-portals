
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import auth from '../../../_firebase_init';
import Loading from '../../Shared/Loading/Loading';

const Alluser = () => {
    const [user] = useAuthState(auth)
    const { data: users, loading } = useQuery(['booking'], () => fetch(`http://localhost:5000/users`)
        .then(res => res.json()))
    console.log(users)
    if (loading) {
        return <Loading />
    }

    const makeAdmin = () => {
        fetch(`http://localhost:5000/users/admin/${user?.email}`, {
            method: "PUT",
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
    }

    return (
        <div className='mt-24'>
            <div className=' text-center'>
                <h1 className='text-black'>All User</h1>
            </div>
            {
                users?.length && <div className=''>
                    <table class="table text-center">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Job</th>
                                <th>Remove</th>
                            </tr>
                        </thead>
                        <tbody>

                            {
                                users?.map((i, index) => <tr key={i._id}>
                                    <td>{index + 1}</td>
                                    <td>{i.email}</td>
                                    {
                                        i.role !== 'Admin' && <td><button onClick={makeAdmin} className='btn bg-accent'>Make Admin</button></td>
                                    }
                                    <td><button className='btn bg-accent'>Remove User</button></td>
                                </tr>

                                )
                            }
                        </tbody>
                    </table>
                </div>
            }
        </div>
    );
};
export default Alluser;