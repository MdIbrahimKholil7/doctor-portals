import React from 'react';
import bg3 from '../../../../img/images/appointment.png'
const ContactUs = () => {
    return (
        <div
        style={{
            background: `url(${bg3})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
        }}
        className='h-[100vh] mt-20 p-9  md:p-20 flex justify-center items-center flex-col'
        >
            <div className='text-center mb-9'> 
                <h1 className='text-secondary text-2xl font-bold'>Contact Us</h1>
                <h2 className='text-3xl text-white'>Stay connected with us</h2>
            </div>
            <div className=' flex justify-center w-full md:w-[50%] mx-auto'>
                <form className='w-full text-center'>
                    <input type="email" placeholder="Email address" className="input block input-bordered w-full " />
                    <input type="text" placeholder="Subject" className="input input-bordered w-full block my-5" />
                    <textarea className="textarea textarea-bordered w-full h-[136px]"  placeholder="Your message"></textarea>
                </form>
            </div>
        </div>
    );
};

export default ContactUs;