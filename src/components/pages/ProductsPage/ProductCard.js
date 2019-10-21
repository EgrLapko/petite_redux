import React from 'react'

export default function ProductCard(props) {
    return (
        <div className="product-card">
            <h3 className="card-title">{props.title}</h3>
        </div>
    )
}
