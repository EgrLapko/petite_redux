import React from 'react';
import { NavLink } from 'react-router-dom';

import { navbarLinks } from '../navbarLinks';

const InnerNav = ({type}) => {

    const ifType = () => {
        let category

        if(type === "Bras"){category='bra'}
        else if (type === "Panties"){category='panty'}
        else if (type === "Accessories"){category='accessories'}
        else if (type === "Sleepwear"){category='sleepwear'}

        if(type) {
            return (
                navbarLinks.map(link => link.category === category &&
                    <li className="inner-link" key={link.id}>
                        <NavLink to={link.path} activeClassName="link-active"> 
                            {link.text} 
                        </NavLink>
                    </li>
                )
            )
        } 
    } 

    return (
        <div className="inner-nav">
            <ul className="inner-links-list">
                { ifType() }
            </ul>   
        </div>
    )
}

export default InnerNav
