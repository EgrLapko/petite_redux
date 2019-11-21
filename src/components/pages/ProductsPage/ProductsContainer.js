import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { selectIsCollectionsLoaded } from '../../../redux/shop/shop-selectors';
import WithSpinner from '../../spinner/WithSpinner';
import Products from './Products';

const mapStateToProps = createStructuredSelector({
    isLoading: state => !selectIsCollectionsLoaded(state)
});

const ProductsContainer = compose (
    connect(mapStateToProps),
    WithSpinner
)(Products)

export default ProductsContainer;