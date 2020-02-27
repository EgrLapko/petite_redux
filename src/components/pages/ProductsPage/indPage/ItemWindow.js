import React, { useState } from 'react';
import { connect } from 'react-redux';

import { toggleIndiPage, removeSingleItem, pickSize, pickCup, clearSizes } from '../../../../redux/indi-slider/indi-actions';
import { selectSingleItem, selectChosenSize, selectChosenCup } from '../../../../redux/indi-slider/indi-selector';
import { addItem, toggleCartHidden } from '../../../../redux/cart/cart-actions';
import { selectCartItems } from '../../../../redux/cart/cart-selectors';

import Title from '../../../misc/Title';
import PopUp from './PopUp';

const ItemWindow = ({ item, goBack, url, indiVisible, toggleIndiPage, cartItems, addItem, sizeToPick, pickedSize, cupToPick, pickedCup, clearSizes, toggleCartHidden, removeSingleItem }) => {

    const { imgSmall_1, imgSmall_2, title, category, price, id, sizes, cup, description, imgBig_1, imgBig_2, color } = item;

    const pickSize = (size) => {
        sizeToPick(size);
        item.pickedSize = size
        return item 
    };

    const pickCup = (cup) => {
        cupToPick(cup);
        item.pickedCup = cup
        return item 
    };

    const addToCart = (item) => {
        addItem(item);
        toggleCartHidden();
        setTimeout(() => {
            toggleCartHidden()
        }, 1600)
    }
    


    // -------------------------------------------- POPUP MESSAGE FUNCTIONALITY
    const [popUpMessage, togglePopUp] = useState(false);

    const showPopUp = () => {
        togglePopUp(true);
        setTimeout(() => togglePopUp(false), 2000);
    }


    return (
        <div className="item-modal">
            {/* <div className="main-info">
                <h1>{title}</h1>
                <img src={imgSmall_1} alt="item"/>
                <button onClick={() => goBack(url)}>
                    Return
                </button>
            </div> */}
            <div className="main-info">
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
                                    <p className="size-type">Size: {pickedSize} </p>
                                    <ul className="info-size">
                                        {
                                            sizes.map((size, index) => {
                                                return (
                                                    <li 
                                                        className={`size-item ${pickedSize === size ? 'active-size' : item.pickedSize === size ? 'active-size' : ''}`} 
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
                                    <p className="size-type">Cup: {pickedCup} </p>
                                    <ul className="info-size">
                                        {
                                            cup.map((cup, index) => {
                                                return (
                                                    <li 
                                                        className={`size-item ${pickedCup === cup && 'active-size'}`} 
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

                            {/* -----------------------------------------------------   CONDITIONAL FOR ITEMS WITH JUST SIZES */}
                            {
                                !item.cup && item.sizes &&
                                    <button 
                                        className={`shop-btn ${pickedSize !== '' ? 'shop-active'
                                                            : cartItems.find(item => item.id === id) ? 'shop-active' 
                                                            : null }`}
                                        onClick={pickedSize ===  '' ? () => showPopUp() : () => addToCart(item)}
                                    >   
                                        <i className="fas fa-shopping-bag"/>
                                        <p className="btn-text">{cartItems.find(item => item.id === id) ? "In bag" : "add to bag"}</p>
                                    </button>
                            }

                            {/* -----------------------------------------------------   CONDITIONAL FOR ITEMS WITH SIZES AND CUP */}
                            {
                                item.cup && item.sizes &&
                                    <button 
                                        className={`shop-btn ${pickedSize !==  '' && pickedCup !==  '' ? 'shop-active'
                                                            : cartItems.find(item => item.id === id) ? 'shop-active' 
                                                            : null }`}
                                        onClick={pickedCup ===  '' | pickedSize === '' ? () => showPopUp() : () => addToCart(item)}
                                    >
                                        <i className="fas fa-shopping-bag"/>
                                        <p className="btn-text">{cartItems.find(item => item.id === id) ? "In bag" : "add to bag"}</p>
                                    </button>
                            }

                            {/* -----------------------------------------------------   CONDITIONAL FOR ITEMS WITH JUST CUPS */}
                            {
                                item.cup && !item.sizes &&
                                    <button 
                                        className={`shop-btn ${pickedCup !==  '' ? 'shop-active'
                                                            : cartItems.find(item => item.id === id) ? 'shop-active' 
                                                            : null }`}
                                        onClick={pickedCup ===  '' ? () => showPopUp() : () => addToCart(item)}
                                    >
                                        <i className="fas fa-shopping-bag"/>
                                        <p className="btn-text">{cartItems.find(item => item.id === id) ? "In bag" : "add to bag"}</p>
                                    </button>

                            }

                            {/* -----------------------------------------------------   CONDITIONAL FOR ITEMS WITHOUT SIZES*/}
                            {
                                !item.cup && !item.sizes 
                                    ? 
                                        <button 
                                            className="shop-btn shop-active"
                                            onClick={() => addToCart(item)}
                                        >
                                            <i className="fas fa-shopping-bag"/> 
                                            <p className="btn-text"> {cartItems.find(item => item.id === id) ? "In bag" : "add to bag"} </p>
                                        </button>
                                    : null
                            }
                            
                        </div>
                    </div>       
                </div>  
                <button className="btn close-btn" 
                        onClick={() => { goBack(url) }}
                >
                     <i className="far fa-times-circle"></i>
                </button>
            </div>   
        </div>
    )
};



const mapStateToProps = (state) => ({
    item: selectSingleItem(state),
    cartItems: selectCartItems(state),

    pickedSize: selectChosenSize(state),
    pickedCup: selectChosenCup(state)
})

const mapDispatchToProps = dispatch => ({
    toggleIndiPage: () => dispatch(toggleIndiPage()),
    removeSingleItem: () => dispatch(removeSingleItem()),
    addItem: item => dispatch(addItem(item)),
    toggleCartHidden: () => dispatch(toggleCartHidden()),

    sizeToPick: size => dispatch(pickSize(size)),
    cupToPick: cup => dispatch(pickCup(cup)),
    clearSizes: () => dispatch(clearSizes()),
})

export default connect(mapStateToProps, mapDispatchToProps)(ItemWindow);

