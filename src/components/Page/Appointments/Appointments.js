import React, { useState } from 'react';
import GetAppointment from './GetAppointment/GetAppointment';
import Treatment from './Treatment/Treatment';

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
        </div>
    );
};

export default Appointments;