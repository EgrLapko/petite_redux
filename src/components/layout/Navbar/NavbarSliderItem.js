import React from 'react';
import { Link } from 'react-router-dom';

export default function NavbarSliderItem(props) {
    return (
        <div className="slider-item">
            <Link to={props.path}><img className="nav-menu-image" src={props.image} alt="menu-item" /></Link>
            <Link to={props.path}><h3 className="nav-menu-title">{props.text}</h3></Link>
        </div>
    )
}
