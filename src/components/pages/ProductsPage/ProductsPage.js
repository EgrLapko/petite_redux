import React from 'react';
import { Route } from 'react-router-dom';

import Products from './Products';

export default function ProductsPage({match}) {
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
};