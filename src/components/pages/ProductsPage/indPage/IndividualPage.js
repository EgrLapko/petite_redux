import React, { useState } from 'react';
import { connect } from 'react-redux';

import { toggleIndiPage, removeSingleItem } from '../../../../redux/indi-slider/indi-actions';
import { selectSingleItem } from '../../../../redux/indi-slider/indi-selector';
import { addItem } from '../../../../redux/cart/cart-actions';
import { selectCartItems } from '../../../../redux/cart/cart-selectors';

import Title from '../../../misc/Title';


const IndividualPage = ({ indiVisible, toggleIndiPage, singleItem , removeSingleItem, cartItems, addItem }) => {
    const { title, description, price, category, imgBig_1, imgBig_2, sizes, color, cup, id } = singleItem;

    const [chosenParameters, setParameters] = useState({ size: '', cup: ''});

    const pickSize = (size) => {
        setParameters({ ...chosenParameters, size: size });
    }

    const pickCup = (cup) => {
        setParameters({ ...chosenParameters, cup: cup });
    }

    const clearSizes = () => {
        setParameters({ size: '', cup: '' })
    }



    return (
        <div className={`indi-wrapper ${indiVisible ? "opened" : ''}`}>
            <div className="indi-container">
                <div className="info-container">
                    <div className="info-images">
                        <img 
                            src={imgBig_1} 
                            alt="product"
                        />
                        <img 
                            src={imgBig_2} 
                            alt="product"
                        />
                    </div>
                    <div className="info-text">
                        <div className="text-container">
                            <Title text={title} />
                            <h3 className="indi-category">{ category }</h3>
                            <h3 className="indi-price">${price}</h3>
                            <h3 className="indi-description">{ description }</h3>
                            <h3 className="indi-color">Color: { color }</h3>
                        </div>
                        <div className="extra-info">
                            {
                                sizes &&
                                <div className="sizes">
                                    <p className="size-type">Size: {chosenParameters.size} </p>
                                    <ul className="info-size">
                                        {
                                            sizes.map((size, index) => {
                                                return (
                                                    <li 
                                                        className={`size-item ${chosenParameters.size === size && 'active-size'}`} 
                                                        key={index} 
                                                        onClick={() => pickSize(size)}
                                                    > 
                                                        {size} 
                                                    </li>
                                                )
                                            })
                                        }
                                    </ul>
                                </div>
                            }
                            {
                                cup &&
                                <div className="sizes">
                                    <p className="size-type">Cup: {chosenParameters.cup} </p>
                                    <ul className="info-size">
                                        {
                                            cup.map((cup, index) => {
                                                return (
                                                    <li 
                                                        className={`size-item ${chosenParameters.cup === cup && 'active-size'}`} 
                                                        key={index} 
                                                        onClick={ () => pickCup(cup) }
                                                    > 
                                                        {cup} 
                                                    </li>
                                                )
                                            })
                                        }
                                    </ul>
                                </div>
                            }

                            {
                                !singleItem.cup && singleItem.sizes ?
                                <button 
                                    className={`shop-btn ${chosenParameters.size !== '' ? 'shop-active' : cartItems.find(item => item.id === id) && 'shop-active'}`} 
                                    onClick={() => addItem(singleItem)}
                                >
                                    <i className="fas fa-shopping-bag"/> 
                                    <p className="btn-text"> {cartItems.find(item => item.id === id) ? "In cart" : "add to cart"} </p>
                                </button>
                                : null
                            }
                            {
                                singleItem.cup && singleItem.sizes ?
                                <button 
                                    className={`shop-btn ${chosenParameters.size !==  '' && chosenParameters.cup !==  '' ? 'shop-active' : cartItems.find(item => item.id === id) && 'shop-active'}`}
                                    onClick={() => addItem(singleItem)}
                                >
                                    <i className="fas fa-shopping-bag"/>
                                    <p className="btn-text"> {cartItems.find(item => item.id === id) ? "In cart" : "add to cart"} </p>
                                </button>
                                : null
                            }
                            {
                                singleItem.cup && !singleItem.sizes ?
                                <button 
                                    className={`shop-btn ${chosenParameters.cup !== '' ? 'shop-active' : cartItems.find(item => item.id === id) && 'shop-active'}`}
                                    onClick={() => addItem(singleItem)}
                                >
                                    <i className="fas fa-shopping-bag"/>
                                    <p className="btn-text"> {cartItems.find(item => item.id === id) ? "In cart" : "add to cart"} </p>
                                </button>
                                : null
                            }
                            {
                                !singleItem.cup && !singleItem.sizes ?
                                <button 
                                    className="shop-btn shop-active"
                                    onClick={() => addItem(singleItem)}
                                >
                                    <i className="fas fa-shopping-bag"/> {cartItems.singleItem && "In Cart"}
                                    <p className="btn-text"> {cartItems.find(item => item.id === id) ? "In cart" : "add to cart"} </p>
                                </button>
                                : null
                            }
                        </div>
                    </div>       
                </div>  
                <button className="btn close-btn" 
                        onClick={() => { toggleIndiPage(); setTimeout(() => {removeSingleItem()}, 200); clearSizes()  }}
                >
                     &#10005;
                </button>
            </div>   
        </div>
    )
}

const mapStateToProps = (state) => ({
    singleItem: selectSingleItem(state),
    cartItems: selectCartItems(state)
})

const mapDispatchToProps = dispatch => ({
    toggleIndiPage: () => dispatch(toggleIndiPage()),
    removeSingleItem: () => dispatch(removeSingleItem()),
    addItem: item => dispatch(addItem(item))
})

export default connect(mapStateToProps, mapDispatchToProps)(IndividualPage);
