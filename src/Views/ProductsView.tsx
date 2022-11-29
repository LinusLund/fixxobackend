import React from 'react'
import Navbar from '../Sections/Navbar';
import Footer from '../Sections/Footer';
import BreadcrumbSection  from '../Sections/BreadcrumbSection';
import FeaturedProducts from '../Sections/FeaturedProducts';
import { ProductContext } from '../Contexts/contexts';
import { useContext } from 'react';


const ProductsView :React.FC = () => {

  const products = useContext(ProductContext)

  return (
     <>
     <Navbar />
     <FeaturedProducts title="All Products" products={products} />
     <Footer />
    </>
  )
}

export default ProductsView