import React from 'react';

import { connect } from 'react-redux';
import { addItem } from '../../../redux/cart/cart-actions';

function ProductCard({item, addItem}) {
    const {imgSrc, imgOver, title, category, price} = item;
    return (
        <div className="product-card">
            <img 
                className="card-image" 
                src={imgSrc} alt="item" 
                onMouseOver = {e => {e.currentTarget.src = imgOver}}
                onMouseOut = {e => {e.currentTarget.src = imgSrc}}    
            />
            <div className="bottom-info">
                <h3 className="category">{category}</h3>
                <h3 className="card-title">{title}</h3>
                <div className="bottom-container">
                    <p className="price">${price}</p>
                    <p className="cart" onClick={() => addItem(item)}>Add to cart</p>
                </div>
            </div>
        </div>
    )
};

const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item))
})

export default connect(null, mapDispatchToProps)(ProductCard);
