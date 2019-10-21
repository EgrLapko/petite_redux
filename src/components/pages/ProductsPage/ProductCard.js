import React from 'react';
import CustomButton from '../../misc/CustomButton';

import { connect } from 'react-redux';
import { addItem } from '../../../redux/cart/cart-actions';

function ProductCard({item, addItem}) {
    const {imgSrc, title} = item;
    return (
        <div className="product-card">
            <img className="card-image" src={imgSrc} alt="item" />
            <CustomButton onClick={() => addItem(item)}>In Cart</CustomButton>
            <div className="bottom-info">
                
            </div>
            <h3 className="card-title">{title}</h3>
        </div>
    )
};

const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item))
})

export default connect(null, mapDispatchToProps)(ProductCard);
