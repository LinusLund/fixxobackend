import React from 'react'
import BigProductBox from '../Components/BigProductBox'
import ProductCard from '../Components/ProductCard'
import { props } from '../Models/ProductProps';

interface gridProductType {
  products: props[];
}

const GridSection :React.FC<gridProductType> = ({ products = []}) => {

  return (
    <>
      <div className="wrapper">

        <div className="BoxContainer">
          <BigProductBox />
        </div>

        <div className="gridLayout">
          {
            products.map((product => <ProductCard key={product.articleNumber} product={product} />))
          }
        </div>


      </div>
    </>
  )
}

export default GridSection