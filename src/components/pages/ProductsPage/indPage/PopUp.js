import React from 'react'

const PopUp = ({ popUp }) => {
    return (
        <div className={`pop-up ${popUp && "pop-active"}`}>
            <p className="message"> Please, choose the size </p>
        </div>
    )
}

export default PopUp;
