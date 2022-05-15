import React, { useEffect } from 'react';
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAuthState, useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../../../_firebase_init';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loading from '../../../Shared/Loading/Loading'
const SignUp = () => {
    const [user] = useAuthState(auth)
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);
    const [
        createUserWithEmailAndPassword,
        createUser,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    const navigate = useNavigate()
    const location = useLocation()
    let from = location?.state?.from?.pathname || "/";
    useEffect(() => {
        if (createUser || gUser) {
            navigate(from)
        }

    }, [createUser, navigate, from, gUser])
    let userError;
    if (loading || gLoading || updating) {
        return <Loading />
    }
    if (gError || error) {
        userError = error.message || gError.message
    }

    const onSubmit = data => {
        console.log(data)
        createUserWithEmailAndPassword(data.email, data.password)
        toast(<p>Please check your email for verification</p>)
        /*  await updateProfile({ displayName: data.name }); */
        console.log('user created')
    }
    return (
        <div className='flex justify-center items-center h-screen '>
            <div className="card bg-base-100 shadow-xl w-96">
                <div className="card-body">
                    <h2 className=" text-accent text-2xl font-bold text-center">Sign Up</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-control ">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Name"
                                className="input input-bordered w-full  "
                                {...register("name", {
                                    required: {
                                        value: true,
                                        message: 'Name is required'
                                    },
                                    minLength: {
                                        value: 3,
                                        message: 'Name must be 4 character'
                                    },
                                    validate: {
                                        number: v => typeof (v) === 'number' && 'Number not allowed',
                                        message: v => !v && ['email']
                                    }
                                })}
                            />

                            {errors.name?.type === 'required' && <small className='text-red-500 mt-2'>{errors.name.message}</small>}
                            {errors.name?.type === 'minLength' && <small className='text-red-500 mt-2'>{errors.name.message}</small>}
                            {errors.name?.type === 'validate' && <small className='text-red-500 mt-2'>{errors.name.message}</small>}
                        </div>
                        <div className="form-control ">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                type="email"
                                placeholder="Email"
                                className="input input-bordered w-full  "
                                {...register("email", {
                                    required: {
                                        value: true,
                                        message: 'Email is required'
                                    },
                                    pattern: {
                                        value: /^[\w._-]+[+]?[\w._-]+@[\w.-]+\.[a-zA-Z]{2,6}$/,
                                        message: 'Please provide a valid Email'
                                    },

                                })}
                            />

                            {errors.email?.type === 'required' && <small className='text-red-500 mt-2'>{errors.email.message}</small>}
                            {errors.email?.type === 'pattern' && <small className='text-red-500 mt-2'>{errors.email.message}</small>}


                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input
                                type="password"
                                placeholder="Password"
                                className="input input-bordered w-full "
                                {...register("password", {
                                    required: {
                                        value: true,
                                        message: 'Password is required'
                                    },
                                    minLength: {
                                        value: 6,
                                        message: 'Password should contain at least 7 character'
                                    }
                                })}
                            />

                            {errors.password?.type === 'required' && <small className='text-red-500 mt-2'>{errors.password.message}</small>}


                            {errors.password?.type === 'minLength' && <small className='text-red-500 mt-2'>{errors.password.message}</small>}

                        </div>
                        <p className='text-red-500 mb-2'>{userError}</p>
                        <input type="submit" value='Sign Up' className='btn w-full mt-5' />
                        <div className='mt-4 text-center'>
                            <p>Already have an account ? <Link className='underline text-green-700' to='/login'>Login</Link></p>
                        </div>
                        <div className="divider">OR</div>
                        <button onClick={() => signInWithGoogle()} className="btn hover:bg-accent btn-outline w-full">Continue With Google</button>
                        <ToastContainer />
                    </form>

                </div>
            </div>
        </div>
    );
};

export default SignUp;