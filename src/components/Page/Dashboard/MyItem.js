import axios from 'axios';
import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../../_firebase_init';
import axiosPrivate from '../../api/axiosPrivate';
import Loading from '../../Shared/Loading/Loading'
const MyItem = () => {
    const [item, setItem] = useState([])
    const [user] = useAuthState(auth)
    const navigate = useNavigate()
    const [load, setLoad] = useState(true)
    useEffect(() => {
        if (user?.email) {
            try {
                fetch(`http://localhost:5000/myData?email=${user?.email}`, {
                    method: "GET",
                    headers: {
                        'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                    }
                })
                    .then(res => {
                        console.log(res)
                        if (res.status === 401 || res.status === 403) {
                            signOut(auth)
                            navigate('/')
                            localStorage.removeItem('accessToken')
                        }
                        return res.json()
                    }).then(data => {
                        setItem(data)
                        setLoad(false)
                    })
            } catch (error) {
                console.log(error)
                console.log('this is error', error)
            }
        }
    }, [user, navigate])
    console.log(item)
    if (load) {
        return <Loading />
    }

    return (
        <div>
            {
                item.length && <div className=''>
                    <table class="table  bg-red-500 ">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Date</th>
                                <th>Time</th>
                                <th>Treatment</th>

                            </tr>
                        </thead>
                        <tbody>

                            {
                                item.map(i => <tr key={i._id}>
                                    <td>{i.patientName}</td>
                                    <td>{i.date}</td>
                                    <td>{i.slot}</td>
                                    <td>{i.treatmentName}</td>
                                </tr>)
                            }



                        </tbody>
                    </table>
                </div>
            }
        </div>
    );
};

export default MyItem;