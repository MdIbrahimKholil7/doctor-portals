import React, { useState } from 'react';
import chair from '../../../../img/images/chair.png'
import bg1 from '../../../../img/images/bg.png'
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import './GetaAppointment.css'
import { format } from 'date-fns';
const GetAppointment = ({selected,setSelected}) => {
    return (
        <div
            style={{
                background: `url(${bg1})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
            }}
            className="hero min-h-screen">
            <div className="hero-content justify-evenly flex-col lg:flex-row-reverse lg:w-[90%]">
                <img src={chair} alt='' className=" rounded-lg w-[374px] md:w-[500px] lg:w-[440px] xl:w-[594px]  shadow-2xl" />
                <div className='flex-1'>
                    <DayPicker
                        mode="single"
                        selected={selected}
                        onSelect={setSelected}
                        
                    />
                    
                </div>
                
            </div>
        </div>
    );
};

export default GetAppointment;