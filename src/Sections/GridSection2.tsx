import React from 'react'
import BigProductBox from '../Components/BigProductBox'
import ProductCard from '../Components/ProductCard'
import { props } from '../Models/ProductProps';

interface gridProductType {
  products: props[];
}

const GridSection2: React.FC<gridProductType> = ({ products = []}) => {

  return (
    <>
      <div className="wrapper2">
        <div className="gridLayout2">
          {
            products.map((product => <ProductCard key={product.articleNumber} product={product} />))
          }
        </div>

        <div className="BoxContainer2">
          <BigProductBox />
        </div>

      </div>
    </>
  )
}

export default GridSection2