import React from 'react';

import { connect } from 'react-redux';
import { addItem } from '../../../redux/cart/cart-actions';
import { toggleIndiPage, setSingleItem } from '../../../redux/indi-slider/indi-actions';

const ProductCard = ({item, addItem, toggleIndiPage, setSingleItem}) => {
    const { imgSmall_1, imgSmall_2, title, category, price, id } = item;
    return (
        <div className="product-card">
            <img 
                className="card-image" 
                src={imgSmall_1} alt="item" 
                onMouseOver = {e => {e.currentTarget.src = imgSmall_2}}
                onMouseOut = {e => {e.currentTarget.src = imgSmall_1}}   
                onClick={() => { setSingleItem(item); toggleIndiPage() }}
            />
            <div className="bottom-info">
                <h3 className="category">{category}</h3>
                <h3 className="card-title" onClick={() => { setSingleItem(item); toggleIndiPage() }}>{title}</h3>
                <div className="bottom-container">
                    <p className="price">${price}</p>
                    <p className="cart" onClick={() => addItem(item)}>Add to cart</p>
                </div>
            </div>
        </div>
    )
};

const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item)),
    toggleIndiPage: () => dispatch(toggleIndiPage()),
    setSingleItem: item => dispatch(setSingleItem(item))
})

export default connect(null, mapDispatchToProps)(ProductCard);
