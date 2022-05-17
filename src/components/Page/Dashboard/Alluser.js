
import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../../Shared/Loading/Loading';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Alluser = () => {
    const { data: users, loading,refetch } = useQuery(['booking'], () => fetch(`http://localhost:5000/users`)
        .then(res => res.json()))
    console.log(users)
    if (loading) {
        return <Loading />
    }

    const makeAdmin = (i) => {
        fetch(`http://localhost:5000/users/admin/${i?.email}`, {
            method: "PUT",
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        }).then(res=>res.json())
        .then(data=>{
            if(data.modifiedCount>0){
                toast('Admin create successful')
                refetch()
            }
        })
    }

    return (
        <div className='mt-[700px]'>
            <div className=' text-center mb-6'>
                <h1 className='text-black font-bold text-3xl'>All User</h1>
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
                                        i.role === 'Admin' ? <td><button  className='btn bg-accent'>Admin</button></td>:<td><button onClick={()=>makeAdmin(i)} className='btn bg-accent'>Make Admin</button></td>
                                    }
                                    <td><button className='btn bg-accent'>Remove User</button></td>
                                </tr>
                                )
                            }
                        </tbody>
                    </table>

                    <ToastContainer/>
                </div>
            }
        </div>
    );
};
export default Alluser;