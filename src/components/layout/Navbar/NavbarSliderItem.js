import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { toggleMobileMenu, dropAllSliders } from '../../../redux/navbar-slider/slider-actions';

const NavbarSliderItem = ({ path, image, text, toggleMobileMenu, dropAllSliders}) => {
    return (
        <div className="slider-item">
            <Link to={path}>
                <img 
                    className="nav-menu-image" 
                    src={image} alt="menu-item" 
                    onClick={() => { toggleMobileMenu(); dropAllSliders()}}
                />
            </Link>
            <NavLink to={path} className="nav-menu-title" activeClassName="link-active" onClick={() => { toggleMobileMenu(); dropAllSliders()}}><h3>{text}</h3></NavLink>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => ({
    toggleMobileMenu: () => dispatch(toggleMobileMenu()),
    dropAllSliders: () => dispatch(dropAllSliders())
});

export default connect(null, mapDispatchToProps)(NavbarSliderItem);
