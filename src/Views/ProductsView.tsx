import React,{useEffect} from 'react'
import Navbar from '../Sections/Navbar';
import Footer from '../Sections/Footer';
import BreadcrumbSection  from '../Sections/BreadcrumbSection';
import FeaturedProducts from '../Sections/FeaturedProducts';
import { ProductContextType, useProductContext } from '../Contexts/contexts';



const ProductsView :React.FC = () => {
  const {all,getAll} = useProductContext() as ProductContextType
  useEffect(() => {
    getAll()
  },[])


  return (
     <>
     <Navbar />
     <FeaturedProducts title="All Products" products={all} />
     <Footer />
    </>
  )
}

export default ProductsView