import React from 'react';
import ProductCard from '../Components/ProductCard'
import { props } from '../Models/ProductProps';

interface featuredProductType {
    title?: string;
    products: props[];
    
  }

const FeaturedProducts :React.FC<featuredProductType> = ({title, products = []}) => {

  return (
    <>
        <section className="featured">
            <h5 className="f-title">{title}</h5>
            <div className="container">
                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 g-4">
                    {
                        products.map((product => <ProductCard key={product.articleNumber} product={product} />))
                    }

                </div>
            </div>
        </section>
    </>        
    
  )
}

export default FeaturedProducts


