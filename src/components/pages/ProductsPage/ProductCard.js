import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link, useRouteMatch } from 'react-router-dom';

import { addItem } from '../../../redux/cart/cart-actions';
import { toggleIndiPage, setSingleItem } from '../../../redux/indi-slider/indi-actions';
import { selectSingleItem } from '../../../redux/indi-slider/indi-selector'
import { selectCartItems } from '../../../redux/cart/cart-selectors';

const ProductCard = ({item, toggleIndiPage, setSingleItem, cartItems }) => {
    const { imgSmall_1, imgSmall_2, title, category, price, id } = item;

    let { url } = useRouteMatch();

    const [ didLoad, onLoad ] = useState(false);

    const style = didLoad ? {} : { backgroundColor: 'rgba(105, 105, 105, .2)', height: '33rem' }

    const onLoadFunc = () => {
        onLoad(true)
    }

    return (
        <div className="product-card">
            <Link to={`${url}/${id}&${title}`}>
                <img
                    style={style}
                    onLoad={onLoadFunc}
                    className="card-image" 
                    src={imgSmall_1}
                    alt="item"
                    onMouseOver = {e => {e.currentTarget.src = imgSmall_2}}
                    onMouseOut = {e => {e.currentTarget.src = imgSmall_1}}   
                    onClick={() => { setSingleItem(item); toggleIndiPage() }}
                />
            </Link>
            <div className="bottom-info">
                <h3 className="category">{category}</h3>
                <h3 className="card-title" onClick={() => { setSingleItem(item); toggleIndiPage() }}>
                    <Link to={`${url}/${id}&${title}`}>
                        {title}
                    </Link>
                </h3>
                <div className="bottom-container">
                    <p className="price">${price}</p>   
                    {
                        cartItems.find(item => item.id === id)
                        ?
                        <div className="if-in-cart">
                            <i className="fas fa-shopping-bag"/>
                        </div>
                        : null
                    }
                </div>
            </div>
        </div>
    )
};

const mapStateToProps = state => ({
    singleItem: selectSingleItem(state),
    cartItems: selectCartItems(state)
})

const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item)),
    toggleIndiPage: () => dispatch(toggleIndiPage()),
    setSingleItem: item => dispatch(setSingleItem(item)),
})

export default connect(mapStateToProps, mapDispatchToProps)(ProductCard);
