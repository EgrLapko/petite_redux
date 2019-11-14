import React, { Component } from 'react'
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import Products from './Products';
import ProductsOverview from './ProductsOverview';

import { firestore, convertCollectionsSnapshotsToMap } from '../../../firebase/firebase.utils';
import { updateCollections } from '../../../redux/shop/shop-actions';
import WithSpinner from '../../spinner/WithSpinner';

const ProductsOverviewWithSpinner = WithSpinner(ProductsOverview);
const ProductsWithSpinner = WithSpinner(Products);
class ProductsPage extends Component {
    state = {
        loading: true
    };
     
    unsubscribeFromSnapshot = null;

    componentDidMount() {
        const { updateCollections } = this.props;
        const collectionRef = firestore.collection('collections');

        this.unsubscribeFromSnapshot = collectionRef.onSnapshot(async snapshot => {
            const collectionsMap = convertCollectionsSnapshotsToMap(snapshot);
            updateCollections(collectionsMap);
            this.setState({ loading: false });
        })
    }

    render() { 
        const { match } = this.props;
        const { loading } = this.state;
        return (
            <div className="products-page">
                <Route exact path={`${match.path}`} render={(props) => <ProductsOverviewWithSpinner isLoading={loading} {...props} />}/>
                <Route path={`${match.path}/:categoryId`} render={(props) => <ProductsWithSpinner isLoading={loading} {...props} />} />
            </div>
        )
    }
};

const mapDispatchToProps = dispatch => ({
    updateCollections: collectionsMap => dispatch(updateCollections(collectionsMap))
})

export default connect(null, mapDispatchToProps)(ProductsPage);
 