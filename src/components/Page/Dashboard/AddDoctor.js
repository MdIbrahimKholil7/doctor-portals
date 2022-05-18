import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { useQuery } from 'react-query';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loading from '../../Shared/Loading/Loading'
const AddDoctor = () => {

    const { register, handleSubmit, watch, reset, formState: { errors } } = useForm();
    const { data: services } = useQuery('doctorService', () => fetch('http://localhost:5000/doctorService').then(res => res.json()))
    const [loading, setLoading] = useState(false)

    const onSubmit = async data => {

        const image = data.image[0]
        const formData = new FormData()
        formData.append('image', image)
        setLoading(true)
        const url = `https://api.imgbb.com/1/upload?key=${process.env.REACT_APP_Api_Key_Img}`
        fetch(url, {
            method: 'POST',
            body: formData
        }).then(res => res.json())
            .then(datas => {
                if (datas.success) {
                    const doctorDetails = {
                        name: data.name,
                        email: data.email,
                        specialize: data.specialty,
                        img: datas.data.url
                    }
                    fetch('http://localhost:5000/addDoctor', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',
                            authorization: `Bearer ${localStorage.getItem('accessToken')}`
                        },
                        body: JSON.stringify(doctorDetails)
                    }).then(res => res.json())
                        .then(result => {


                            if (result.insertedId) {
                                setLoading(false)
                                toast('Doctor add successful')
                            }
                            reset()
                        })
                }
            })
    }
    return (
        <div className='flex justify-center items-center h-screen'>
            {
                loading && <Loading />
            }

            <div className={`card bg-base-100 shadow-xl w-96 mt-96  ${loading && 'hidden'}`}>
                <div className="card-body">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Your Name"
                                className="input input-bordered w-full max-w-xs"
                                {...register("name", {
                                    required: {
                                        value: true,
                                        message: 'Name is Required'
                                    }
                                })}
                            />
                            <label className="label">
                                {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
                            </label>
                        </div>

                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                type="email"
                                placeholder="Your Email"
                                className="input input-bordered w-full max-w-xs"
                                {...register("email", {
                                    required: {
                                        value: true,
                                        message: 'Email is Required'
                                    },
                                    pattern: {
                                        value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                        message: 'Provide a valid Email'
                                    }
                                })}
                            />
                            <label className="label">
                                {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                                {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                            </label>
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Specialization</span>
                            </label>
                            <select className="input input-bordered w-full" name="" id=""  {...register('specialty')}>
                                {
                                    services?.map(service => <option
                                        key={service._id}
                                        value={service.name}
                                    >
                                        {service.name}
                                    </option>)
                                }
                            </select>
                        </div>
                        <div className='my-3'>
                            <label className="label">
                                <span>Choose a img</span>
                            </label>
                            <input
                                type="file"
                                /*  accept='image/png, image/jpeg, image/jpg' */
                                className=" input-bordered p-2"
                                {...register("image", {
                                    required: {
                                        value: true,
                                        message: 'image is Required'
                                    },

                                })}
                            />
                        </div>
                        <input className='btn w-full max-w-xs text-white' type="submit" value="Add" />
                    </form>
                </div>
            </div>
            <ToastContainer />
        </div>
    );

}
export default AddDoctor;