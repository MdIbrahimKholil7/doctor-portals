import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../_firebase_init';

const MyItem = () => {
    const [item, setItem] = useState([])
    const [user] = useAuthState(auth)
    useEffect(() => {
        (async () => {
            const { data } = await axios.get(`http://localhost:5000/myData?email=${user.email}`)
            console.log(data)
            setItem(data)
        })()
    }, [user])
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