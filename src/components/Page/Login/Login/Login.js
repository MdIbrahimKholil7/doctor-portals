import React from 'react';
import { useAuthState, useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../../_firebase_init';
import Loading from '../../../Shared/Loading/Loading';
const Login = () => {
    const [user]=useAuthState(auth)
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const [
        signInWithEmailAndPassword,
        loginUser,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);
      const navigate=useNavigate()
      const location=useLocation()
      let from = location.state?.from?.pathname || "/";
     if(loading || gLoading){
         return <Loading/>
     }
     if(loginUser || gUser){
        navigate(from)
     }
    const onSubmit = data => {
        signInWithEmailAndPassword(data.email,data.password)
        console.log('login')
    }
    return (
        <div className='flex justify-center items-center h-screen '>
            <div className="card bg-base-100 shadow-xl w-96">
                <div className="card-body">
                    <h2 className="card-title text-accent text-2xl font-bold">Login</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>
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
                                    }
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

                        <input type="submit" value='Login' className='btn w-full mt-5' />
                        <div className='mt-4'>
                            <p>New to Doctors Portal ? <Link className='underline text-green-700' to='/signup'>Create New Account</Link></p>
                        </div>
                        <div className="divider">OR</div>
                        <button onClick={()=>signInWithGoogle()} className="btn hover:bg-accent btn-outline w-full">Continue With Google</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;