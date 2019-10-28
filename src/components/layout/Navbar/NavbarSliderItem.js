import React from 'react'

export default function NavbarSliderItem(props) {
    return (
        <div className="slider-item">
            <img className="nav-menu-image" src={props.image} alt="menu-item" />
            <h3 className="nav-menu-title">{props.text}</h3>
        </div>
    )
}
