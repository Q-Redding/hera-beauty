import React, { useEffect } from 'react';

import SecondaryBanner from '../SecondaryBanner';
import SectionTitle from '../SectionTitle';
import useGetProducts from '../../hooks/useGetProducts';
import ProductCard from '../ProductCard';

const TopProducts = () => {
    const { products, getTopProducts } = useGetProducts();

    useEffect(() => {
        getTopProducts();
    }, []);

    return (
        <div>
            <div className="container mx-auto">
                <div className="flex items-center justify-between mx-10 mb-6">
                    <SectionTitle text="Top Products" />
                </div>
                {/* Products */}
                <div className="flex flex-wrap justify-center">
                    {products.map(product => (
                        <ProductCard
                            key={product.id}
                            id={product.id}
                            name={product.name}
                            brand={product.brand}
                            imgUrl={product.api_featured_image}
                            price={product.price}
                        />
                    ))}
                </div>
            </div>
            <SecondaryBanner />
        </div>
    );
};

export default TopProducts;  