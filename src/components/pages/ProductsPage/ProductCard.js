import React from 'react';

import { connect } from 'react-redux';
import { addItem } from '../../../redux/cart/cart-actions';

function ProductCard({item, addItem}) {
    const {imgSmall_1, imgSmall_2, title, category, price} = item;
    return (
        <div className="product-card">
            <img 
                className="card-image" 
                src={imgSmall_1} alt="item" 
                onMouseOver = {e => {e.currentTarget.src = imgSmall_2}}
                onMouseOut = {e => {e.currentTarget.src = imgSmall_1}}    
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
