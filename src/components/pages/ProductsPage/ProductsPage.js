import React, { Component } from 'react'
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import ProductsContainer from './ProductsContainer';
import ProductsOverviewContainer from './ProductsOverviewContainer';

import { fetchCollectionsStart } from '../../../redux/shop/shop-actions';

class ProductsPage extends Component {


    componentDidMount() { 
        const { fetchCollectionsStart } = this.props;

        fetchCollectionsStart();
    }

    render() { 
        const { match } = this.props;
        
        return (
            <div className="products-page">
                <Route exact path={`${match.path}`} component={ProductsOverviewContainer}/>
                <Route path={`${match.path}/:categoryId`} component={ProductsContainer}
                />
            </div>
        )
    }
};

const mapDispatchToProps = dispatch => ({
    fetchCollectionsStart: () => dispatch(fetchCollectionsStart())
});

export default connect(null, mapDispatchToProps)(ProductsPage);
 