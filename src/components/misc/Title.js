import React from 'react'

const Title = ({ text, desc }) => {
    return (
        <div className="main-title">
            <h2 className="main-title-text">{text}</h2>
            {
                desc ? <p className="main-title-description">{desc}</p> : null
            }
        </div>
    )
};

export default Title;
