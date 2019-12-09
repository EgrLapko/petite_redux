import React from 'react';

import { connect } from 'react-redux';
import { selectSingleItem } from '../../../../redux/indi-slider/indi-selector';

const IndProbe = ({ singleItem }) => {
    const { title, description, price, category, imgBig_1, imgBig_2, sizes, color, cup } = singleItem;
    return (
        <div className="items-modal">
            <h1> {title} </h1>
        </div>
    )
}

const mapStateToProps = (state) => ({
    singleItem: selectSingleItem(state)
})

export default connect(mapStateToProps)(IndProbe);
