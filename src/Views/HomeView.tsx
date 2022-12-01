import React,{useEffect} from 'react';
import Navbar from '../Sections/Navbar';
import Showcase from '../Sections/Showcase';
import NewArrivals from '../Sections/NewArrivals';
import Footer from '../Sections/Footer';
import FeaturedProducts from '../Sections/FeaturedProducts';
import PamelaSection from '../Sections/PamelaSection';
import GridSection from '../Sections/GridSection';
import GridSection2 from '../Sections/GridSection2';
import InfoBoxes from '../Sections/infoBoxes';
import BreadcrumbSection from '../Sections/BreadcrumbSection';
import { ProductContextType, useProductContext } from '../Contexts/contexts';






const HomeView :React.FC = () => {
  const {featured, flashSale, getFeatured, getFlashSale} = useProductContext() as ProductContextType

useEffect(() => {
  getFeatured(8)
},[])

useEffect(() => {
  getFlashSale(4)
},[])

  
  

  return (
    <div className = "HomePage">       
        <Navbar />
        <BreadcrumbSection currentPage='HomePage'/>
        <Showcase />
        <NewArrivals />
        <FeaturedProducts title ="Featured Products" products={featured}/>
        <PamelaSection />
        <GridSection products={flashSale} /> 
        <GridSection2 products={flashSale} />
        <InfoBoxes />
        <Footer />


    </div>
  )
}

export default HomeView