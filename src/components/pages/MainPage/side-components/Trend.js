import React from 'react';
import {Link} from 'react-router-dom';


export default function Trend({ title, desc, imgUrl, link }) {
    const divStyle = {backgroundImage: `url(${imgUrl})`};
    return (
        <div className="trends-card">    
            <div className="trends-wrapper" style={divStyle} />  
            <Link to={link}>
                <div className="trends-info">
                    <h2 className="trends-title" > {title}</h2>
                    <p className="trends-description">{desc}</p> 
                </div> 
            </Link>                   
        </div> 
    )
}



