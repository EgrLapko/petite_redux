import React from 'react'

export default function Title(props) {
    return (
        <div className="main-title">
            <h2 className="main-title-text">{props.text}</h2>
            <p className="main-title-description">{props.desc}</p>
        </div>
    )
}
