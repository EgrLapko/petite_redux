import React from 'react'

const PopUp = ({ popUp, text }) => {
    return (
        <div className={`pop-up ${popUp && "pop-active"}`}>
            <p className="message"> {text} </p>
        </div>
    )
}

export default PopUp;
