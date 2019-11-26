import React from 'react'

export default function InstagramPhoto(props) {
    const {url, instalink} = props;
    const divstyle = {backgroundImage: `url(${url})`};
    return (
        <div className="insta-card" style={divstyle}>
            <div className="middle">
                <p className = "insta-link"> {instalink} </p>
            </div>           
        </div>
    )
}
