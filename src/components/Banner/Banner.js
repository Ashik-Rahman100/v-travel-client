import React from 'react';
import banner2 from '../../images/banner/banner1.jpg';
import banner1 from '../../images/banner/banner2.jpg';
import banner3 from '../../images/banner/banner3.jpg';
import './Banner.css';


const Banner = () => {
    return (
        <div>
            
            <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
         <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active"    aria-current="true" aria-label="Slide 1"></button>
             <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
         </div>
         <div className="carousel-inner">
           <div className="carousel-item active carousel">
            <img  className="d-block w-100 img-fluid" src ={banner1} alt="..."/>
             <div className="carousel-caption d-none d-md-block mb-5">
              <h1 className ='mb-5 fw-bold ' style ={{fontSize:'50px', color:'white'}}>Enjoy Vacation With <span style= {{color:'aqua'}}>V-Travel </span></h1>
              <button className ='my-btn'>JOIN US</button>
            </div>
          </div>
         <div className="carousel-item">
           <img  className="d-block w-100 img-fluid" src ={banner2} alt="..."/>
           <div className="carousel-caption d-none d-md-block">
           </div>
          </div>
         <div className="carousel-item">
           <img  className="d-block w-100 img-fluid" src ={banner3} alt="..."/>
            <div className="carousel-caption d-none d-md-block">
            <h1 className ='mb-5 fw-bold mb-5' >Traveling For <span className='text-danger mb-5 fst-italic'>Fun</span>  </h1>

            <h4>V-travel an approach to travelling which focuses on experiencing a country, city or particular place by connecting to its history, people, food and culture.</h4>
            
          </div>
       </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
       <span className="carousel-control-prev-icon" aria-hidden="true"></span>
       <span className="visually-hidden">Previous</span>
      </button>
     <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
       <span className="carousel-control-next-icon" aria-hidden="true"></span>
       <span className="visually-hidden">Next</span>
     </button>
    </div>
        </div>
    );
};

export default Banner;