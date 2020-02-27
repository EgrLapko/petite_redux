import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link, Route, Redirect, useHistory,  useRouteMatch } from 'react-router-dom';

import { addItem } from '../../../redux/cart/cart-actions';
import { toggleIndiPage, setSingleItem } from '../../../redux/indi-slider/indi-actions';
import { selectSingleItem } from '../../../redux/indi-slider/indi-selector'
import { selectCartItems } from '../../../redux/cart/cart-selectors';
import { selectGridSmall } from '../../../redux/filters/filters-selectors';
import { selectIndiVisible } from '../../../redux/indi-slider/indi-selector';

import IndividualPage from './indPage/IndividualPage';
import ItemWindow from './indPage/ItemWindow';

const ProductCard = ({item, toggleIndiPage, setSingleItem, cartItems, gridSmall, indiVisible }) => {
    const { imgSmall_1, imgSmall_2, title, category, price, id, sizes, cup, description, imgBig_1, imgBig_2, color } = item;

    let { url } = useRouteMatch();

    const [ didLoad, onLoad ] = useState(false);

    const style = didLoad ? {} : { backgroundColor: 'rgba(105, 105, 105, .2)', height: '33rem' }

    const onLoadFunc = () => {
        onLoad(true)
    }

    let history = useHistory();

    const goBack = (url) => {
        history.push(url)
    }

    return (
        <React.Fragment>
            <div className={`product-card ${gridSmall && "card-small"}`}>
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

                    {/* <Link to={`${url}/item/${id}&${title}`}>
                        <h2 onClick={() => { setSingleItem(item); toggleIndiPage() }}>OPEN ME</h2>
                        <h2>OPEN ME</h2>
                    </Link> */}

                    <div className="bottom-container">
                        <p className="price">${price}</p>
                        <div className="size-box">
                            <div className="sizes uni-size">
                                {
                                    sizes &&
                                    sizes.map((size, index) => size &&
                                        <p className="size-item" key={index}> {size} </p>
                                    )
                                }
                            </div>
                            <div className="sizes cup-size">
                                {
                                    cup &&
                                    cup.map((cup, index) => cup &&
                                        <p className="cup-item" key={index}> {cup} </p>
                                    )
                                }
                            </div>
                        </div>   
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
            <Route path={`${url}/item/${id}&${title}`} render={(props) => {
                return (
                    <ItemWindow item={item} goBack={goBack} url={url} />
                )
            }}/>
            {/* <Route path={`${url}/${price}&${title}`} render={(props) => {
                return (
                    <IndividualPage {...props} />
                )
            }}/> */}
        </React.Fragment>
        
    )
};

const mapStateToProps = state => ({
    singleItem: selectSingleItem(state),
    cartItems: selectCartItems(state),
    gridSmall: selectGridSmall(state),
    indiVisible: selectIndiVisible(state),
})

const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item)),
    toggleIndiPage: () => dispatch(toggleIndiPage()),
    setSingleItem: item => dispatch(setSingleItem(item)),
})

export default connect(mapStateToProps, mapDispatchToProps)(ProductCard);
