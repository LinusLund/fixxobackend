import React from 'react';
import { props } from '../Models/ProductProps';




interface detailsProductType {
  product: props;
}


const ProductDetails: React.FC<detailsProductType> = ({ product }) => {
  return (
    <section className = "detailsWrapper">
      <div className = "container">
        <div className = "flexSection">
          <div className = "bigGridBox">
            <img className = "bigImage" src ={product.imageName} alt = "Product Image"></img>
          </div>
            <div className = "smallBoxContainer">
              <div className = "smallGridBox"><img className = "littleImage" src ={product.imageName} alt = "Product Image"></img></div>
              <div className = "smallGridBox"><img className = "littleImage" src ={product.imageName} alt = "Product Image"></img></div>
              <div className = "smallGridBox"><img className = "littleImage" src ={product.imageName} alt = "Product Image"></img></div>
            </div>
        </div>
      
        <div className = "detailsInfo">
          <div className = "productInfo">
            <div className = "title">{product.name} - ${product.price}</div>
            <div className = "description">{product.description} Description missing </div>
            
            <div className = "sizeSelection">
              <span className = "title">Size:</span>
              <span className = "sizes">S</span>
              <span className = "sizes">M</span>
              <span className = "sizes">L</span>
              <span className = "sizes">XL</span>
            </div>
            
            <div className = "colorChoice">
              <span className = "title">Color:</span>
              <span className = "optionDropMenu">Choose an option</span>
            </div>
            
            <div className = "quantitySelector">
              <span className = "title">Qty:</span>
                <span className = "counter">
                  <span className = "remove">-</span>
                  <span className = "number">1</span>
                  <span className = "add">+</span>
                </span>
                <span><button className = "cartButton">ADD TO CART</button></span>
            </div>

            
            <div className = "socialMediaWrapper">
            <span className = "Title">Share:</span>
              <span className = "socialMediaLinks">
                  <a className= "logo" href="https://www.facebook.com/" target="blank"><i className="fa-brands fa-facebook-f"></i></a>
                  <a className= "logo" href="https://www.instagram.com/" target="blank"><i className="fa-brands fa-instagram"></i></a>
                  <a className= "logo" href="https://twitter.com/" target="blank"><i className="fa-brands fa-twitter"></i></a>
                  <a className= "logo" href="https://www.google.com/" target="blank"><i className="fa-brands fa-google"></i></a>
                  <a className= "logo" href="https://www.linkedin.com/" target="blank"><i className="fa-brands fa-linkedin"></i></a>
              </span>
            </div>
          </div>
        </div>

      </div>
    </section>

  )
}

export default ProductDetails