import React from 'react'

export default function Selection(props) {
    const {imgUrl, desc, title, btnName} = props;
    const divstyle = {backgroundImage: `url(${imgUrl})`};
    return (
        <div className="sel-card">  
            <div className="sel-image" style={divstyle} />        
            <div  className="sel-text-wrapper">
                <p className="sel-description" > {desc} </p>
                <h2 className="sel-title" > {title} </h2>   
                <button className="btn btn-white" > {btnName} </button>            
            </div>                     
        </div> 
    )
}
