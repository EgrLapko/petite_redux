import React, { Component } from 'react'
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import Products from './Products';

import { firestore, convertCollectionsSnapshotToMap } from '../../../firebase/firebase.utils';
import { updateCollections } from '../../../redux/shop/shop-actions';


class ProductsPage extends Component {
    unsubscribeFromSnapshot = null;

    componentDidMount() {
        const { updateCollections } = this.props;
        const collectionRef = firestore.collection('collections');

        this.unsubscribeFromSnapshot = collectionRef.onSnapshot(async snapshot => {
            const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
            updateCollections(collectionsMap);
        });
    }

    render() {
        const { match } = this.props;
        return (
            <div className="products-page">
                <Route exact path={`${match.path}`} render={() =>
                    <div>
                        <h2>Direct page</h2>
                    </div>
                } />
                <Route path={`${match.path}/:categoryId`} component={Products} />
            </div>
        )
    }
};

const mapDispatchToProps = dispatch => ({
    updateCollections: collectionsMap => dispatch(updateCollections(collectionsMap))
});

export default connect(null, mapDispatchToProps)(ProductsPage);
 