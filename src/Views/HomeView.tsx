import React from 'react';
import Navbar from '../Sections/Navbar';
import Showcase from '../Sections/Showcase';
import NewArrivals from '../Sections/NewArrivals';
import Footer from '../Sections/Footer';
import FeaturedProducts from '../Sections/FeaturedProducts';
import PamelaSection from '../Sections/PamelaSection';
import { FeaturedProductsContext } from '../Contexts/contexts';
import { GridProductsContext } from '../Contexts/contexts';
import { useContext } from 'react';
import GridSection from '../Sections/GridSection';
import GridSection2 from '../Sections/GridSection2';
import InfoBoxes from '../Sections/infoBoxes';
import { props } from '../Models/ProductProps';




const HomeView :React.FC = () => {

  const featured = useContext(FeaturedProductsContext)
  const gridProducts = useContext(GridProductsContext)
  

  return (
    <div className = "HomePage">       
        <Navbar />
        <Showcase />
        <NewArrivals />
        <FeaturedProducts title ="Featured Products" products={featured}/>
        <PamelaSection />
        <GridSection products={gridProducts} /> 
        <GridSection2 products={gridProducts} />
        <InfoBoxes />
        <Footer />


    </div>
  )
}

export default HomeView