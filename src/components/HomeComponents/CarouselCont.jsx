import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './CarouselCont.css'
import CarouselImage1 from '../../img/carousel/carousel1.jpg';
import CarouselImage2 from '../../img/carousel/carousel2.jpg';
import CarouselImage3 from '../../img/carousel/carousel3.jpg';

function CarouselCont() {
  return (
    <Carousel fade>
      <Carousel.Item>
      <img
          className="d-block w-100"
          src={CarouselImage1}
          alt="First slide"
        />
        <Carousel.Caption className='custom-caption1'>
          <div className='text-alignment1'>  
            <h1 className='carousel-title1'> BE PART OF THE FIRST AND LEADING <span class="highlight">MICROLENDING FRANCHISE</span> IN THE PHILIPPINES</h1>    
            <button className="franchise1-btn" href="#Home">
              Franchise Now!
            </button>
          </div>
        
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
      <img
          className="d-block w-100"
          src={CarouselImage2}
          alt="Second slide" 
        />
        <Carousel.Caption className='custom-caption2'>
          <div className='text-alignment2'>    
          <h1 className='carousel-title2'>Help entrepreneurs get the funds they need through <span class="highlight">Microlending solutions</span> </h1>
          <button className="franchise2-btn" href="#Home">
              Franchise Now!  
          </button>
          </div>  
          
        </Carousel.Caption>
       
      </Carousel.Item>

      <Carousel.Item>
      <img
          className="d-block w-100"
          src={CarouselImage3}
          alt="Third slide"
        />
        <Carousel.Caption className='custom-caption3'> 
        <div className='text-alignment3'>  
            <p className='carousel-title3'>Join our innovative <span class="highlight">Microlending business</span> to support MSMEs, create jobs, strengthen communities, and make a positive impact on people's lives. </p> 
     
            <button className="franchise3-btn" href="#Home">
              Franchise Now!
            </button>
            </div>  
       
        </Carousel.Caption>
      </Carousel.Item>

    </Carousel>
  );
}

export default CarouselCont;