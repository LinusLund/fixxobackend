import React, { useEffect } from 'react'
import Navbar from '../Sections/Navbar';
import Footer from '../Sections/Footer';
import {ProductContextType, useProductContext } from '../Contexts/contexts';
import ProductDetails from '../Sections/ProductDetails';
import { useParams } from 'react-router-dom';


const ProductDetailsView :React.FC = () => {

  const {id} = useParams<string>()
  const productContext = useProductContext() as ProductContextType

  useEffect(() => {
    productContext.get(id)
  }, [])

  return (
    <>
    <Navbar /> 
    <ProductDetails product = {productContext.product}/>
    <Footer />
    </>
  
  )
}

export default ProductDetailsView