import React, { useState } from 'react';
import GetAppointment from './GetAppointment/GetAppointment';
import Treatment from './Treatment/Treatment';
import Footer from '../../Shared/Footer/Footer'
const Appointments = () => {
    const [selected, setSelected] = useState(new Date())
    return (
        <div>
            <GetAppointment 
            selected={selected}
            setSelected={setSelected}
            />
            <Treatment
            selected={selected}
            />
            <Footer/>
        </div>
    );
};

export default Appointments;