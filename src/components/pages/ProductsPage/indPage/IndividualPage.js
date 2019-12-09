import React from 'react';
import { connect } from 'react-redux';

import { toggleIndiPage, removeSingleItem } from '../../../../redux/indi-slider/indi-actions';
import { selectSingleItem } from '../../../../redux/indi-slider/indi-selector';
import Title from '../../../misc/Title';

const IndividualPage = ({ indiVisible, toggleIndiPage, singleItem , removeSingleItem }) => {
    const { title, description, price, category, imgBig_1, imgBig_2, sizes, color, cup } = singleItem;

    return (
        <div className={`indi-wrapper ${indiVisible ? "opened" : ''}`}>
            <div className="indi-container">
                <div className="info-container">
                    <div className="info-images">
                        <img src={imgBig_1} alt="product"/>
                        <img src={imgBig_2} alt="product"/>
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
                                    <p className="size-type">Size: </p>
                                    <ul className="info-size">
                                        {
                                            sizes.map((size, index) => {
                                                return (
                                                    <li className="size-item" key={index}> {size} </li>
                                                )
                                            })
                                        }
                                    </ul>
                                </div>
                            }
                            {
                                cup &&
                                <div className="sizes">
                                    <p className="size-type">Cup: </p>
                                    <ul className="info-size">
                                        {
                                            cup.map((cup, index) => {
                                                return (
                                                    <li className="size-item" key={index}> {cup} </li>
                                                )
                                            })
                                        }
                                    </ul>
                                </div>
                            }
                        </div>
                    </div>       
                </div>  
                <button className="btn" 
                        onClick={() => { toggleIndiPage(); setTimeout(() => {removeSingleItem()}, 200);  }}
                >
                     &#10005;
                </button>
            </div>   
        </div>
    )
}

const mapStateToProps = (state) => ({
    singleItem: selectSingleItem(state)
})

const mapDispatchToProps = dispatch => ({
    toggleIndiPage: () => dispatch(toggleIndiPage()),
    removeSingleItem: () => dispatch(removeSingleItem())
})

export default connect(mapStateToProps, mapDispatchToProps)(IndividualPage);
