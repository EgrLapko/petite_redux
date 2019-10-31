import React from 'react';
import { NavLink, Link } from 'react-router-dom';

export default function NavbarSliderItem(props) {
    return (
        <div className="slider-item">
            <Link to={props.path}><img className="nav-menu-image" src={props.image} alt="menu-item" /></Link>
            <NavLink to={props.path} className="nav-menu-title" activeClassName="link-active"><h3>{props.text}</h3></NavLink>
        </div>
    )
}
