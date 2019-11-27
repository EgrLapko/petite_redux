import React from 'react';
import ProductCard from './ProductCard';

export default function ProductsPreview({title, items}) {
    return (
        <div className="products-preview">
            <h1 className="title"> {title} </h1>
            <div className="preview">
                {
                    items
                        .filter((item, idx) => idx < 4)
                        .map((item) => {
                            return (
                                <ProductCard key={item.id} item={item} />
                            )
                        })
                }
            </div>
        </div>
    )
}
