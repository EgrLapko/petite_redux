import React, { useState } from 'react';
import { connect } from 'react-redux';

import { toggleIndiPage, removeSingleItem, pickSize, pickCup, clearSizes } from '../../../../redux/indi-slider/indi-actions';
import { selectSingleItem, selectChosenSize, selectChosenCup } from '../../../../redux/indi-slider/indi-selector';
import { addItem, toggleCartHidden } from '../../../../redux/cart/cart-actions';
import { selectCartItems } from '../../../../redux/cart/cart-selectors';

import Title from '../../../misc/Title';
import PopUp from './PopUp';


const IndividualPage = ({ indiVisible, toggleIndiPage, singleItem, cartItems, addItem, sizeToPick, pickedSize, cupToPick, pickedCup, clearSizes, toggleCartHidden, removeSingleItem }) => {

    const { title, description, price, category, imgBig_1, imgBig_2, sizes, color, cup, id } = singleItem;

    
    const pickSize = (size) => {
        sizeToPick(size);
        singleItem.pickedSize = size
        return singleItem 
    };

    const pickCup = (cup) => {
        cupToPick(cup);
        singleItem.pickedCup = cup
        return singleItem 
    };

    const addToCart = (singleItem) => {
        addItem(singleItem);
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
        <div className={`indi-wrapper ${indiVisible ? "opened" : ''}`}>
            <PopUp popUp={popUpMessage} text={"Please, choose the size"} />
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
                                    <p className="size-type">Size: {pickedSize} </p>
                                    <ul className="info-size">
                                        {
                                            sizes.map((size, index) => {
                                                return (
                                                    <li 
                                                        className={`size-item ${pickedSize === size ? 'active-size' : singleItem.pickedSize === size ? 'active-size' : ''}`} 
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
                                !singleItem.cup && singleItem.sizes &&
                                    <button 
                                        className={`shop-btn ${pickedSize !== '' ? 'shop-active'
                                                            : cartItems.find(item => item.id === id) ? 'shop-active' 
                                                            : null }`}
                                        onClick={pickedSize ===  '' ? () => showPopUp() : () => addToCart(singleItem)}
                                    >   
                                        <i className="fas fa-shopping-bag"/>
                                        <p className="btn-text">{cartItems.find(item => item.id === id) ? "In bag" : "add to bag"}</p>
                                    </button>
                            }

                            {/* -----------------------------------------------------   CONDITIONAL FOR ITEMS WITH SIZES AND CUP */}
                            {
                                singleItem.cup && singleItem.sizes &&
                                    <button 
                                        className={`shop-btn ${pickedSize !==  '' && pickedCup !==  '' ? 'shop-active'
                                                            : cartItems.find(item => item.id === id) ? 'shop-active' 
                                                            : null }`}
                                        onClick={pickedCup ===  '' | pickedSize === '' ? () => showPopUp() : () => addToCart(singleItem)}
                                    >
                                        <i className="fas fa-shopping-bag"/>
                                        <p className="btn-text">{cartItems.find(item => item.id === id) ? "In bag" : "add to bag"}</p>
                                    </button>
                            }

                            {/* -----------------------------------------------------   CONDITIONAL FOR ITEMS WITH JUST CUPS */}
                            {
                                singleItem.cup && !singleItem.sizes &&
                                    <button 
                                        className={`shop-btn ${pickedCup !==  '' ? 'shop-active'
                                                            : cartItems.find(item => item.id === id) ? 'shop-active' 
                                                            : null }`}
                                        onClick={pickedCup ===  '' ? () => showPopUp() : () => addToCart(singleItem)}
                                    >
                                        <i className="fas fa-shopping-bag"/>
                                        <p className="btn-text">{cartItems.find(item => item.id === id) ? "In bag" : "add to bag"}</p>
                                    </button>

                            }

                            {/* -----------------------------------------------------   CONDITIONAL FOR ITEMS WITHOUT SIZES*/}
                            {
                                !singleItem.cup && !singleItem.sizes 
                                    ? 
                                        <button 
                                            className="shop-btn shop-active"
                                            onClick={() => addToCart(singleItem)}
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
                        onClick={() => { toggleIndiPage(); clearSizes(); removeSingleItem()  }}
                >
                     <i className="far fa-times-circle"></i>
                </button>
            </div>   
        </div>
    )
}

const mapStateToProps = (state) => ({
    singleItem: selectSingleItem(state),
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

export default connect(mapStateToProps, mapDispatchToProps)(IndividualPage);
