import React from 'react';
import CloseIcon from '@mui/icons-material/Close';

const Success = ({ setAdded }) => {
    return (
        <div className="success">
            <h3>
                Your item has been successfully added to the cart!
            </h3>
            <CloseIcon fontSize='small' onClick={() => setAdded()} className='cursor'/>
        </div>
    );
}

export default Success;
