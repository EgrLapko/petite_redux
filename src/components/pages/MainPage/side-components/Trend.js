import React from 'react';
import {Link} from 'react-router-dom';


export default function Trend(props) {
    const { title, desc, imgUrl, link } = props;
    const divStyle = {backgroundImage: `url(${imgUrl})`};
    return (
        <Link to={link}>
            <div className="trends-card">    
                <div className="trends-wrapper" style={divStyle} />              
                <div className="trends-info">
                    <h2 className="trends-title" > {title}</h2>
                    <p className="trends-description">{desc}</p> 
                    {/* <Link to = {link}> <button className="btn btn-pink">{btnName}</button></Link>   */}
                </div>
            </div> 
        </Link>
        
    )
}



