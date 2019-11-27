import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { selectCollectionFetching } from '../../../redux/shop/shop-selectors';
import WithSpinner from '../../spinner/WithSpinner';
import ProductsOverview from './ProductsOverview';

const mapStateToProps = createStructuredSelector({
    isLoading: selectCollectionFetching
});

const ProductsOverviewContainer = compose (
    connect(mapStateToProps),
    WithSpinner
)(ProductsOverview)

export default ProductsOverviewContainer;