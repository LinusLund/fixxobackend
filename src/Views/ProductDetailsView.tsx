import React from 'react'
import Navbar from '../Sections/Navbar';
import Footer from '../Sections/Footer';
import BreadcrumbSection  from '../Sections/BreadcrumbSection'
import { useParams } from 'react-router-dom';

const ProductDetailsView :React.FC = () => {


  return (
    <>
    <Navbar />  
    <Footer />
    </>
  
  )
}

export default ProductDetailsView