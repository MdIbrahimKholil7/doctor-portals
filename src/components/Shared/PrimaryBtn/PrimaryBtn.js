import React from 'react';

const PrimaryBtn = ({children}) => {
    return (
        <div>
             <button className="btn btn-primary bgGradient text-white font-bold text-[18px] uppercase">{children}</button>
        </div>
    );
};

export default PrimaryBtn;