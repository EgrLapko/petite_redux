import React from 'react'

export default function CustomButton({ children, isGoogleSignIn, ...otherProps }) {
    return (
        <button className='btn' {...otherProps} >
            {children}
        </button>
    )
};
