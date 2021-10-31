import React from 'react';
import dubai from '../../images/gallary/dubai.jpg';
import london from '../../images/gallary/london.jpg';
import moscow from '../../images/gallary/moscow.jpg';
import paris from '../../images/gallary/paris.jpg';
import singapur from '../../images/gallary/singapur.jpg';
import soudi from '../../images/gallary/soudi.jpg';
import './Gallery.css';

const Gallery = () => {
    return (
        <div>
            <div className ='container'>
            <h1 className= 'text-center mt-5 fw-bold'><span className ='text-warning'>TOUR </span> GALLAERY</h1>

                {/* Gallary Photo Album*/}
                <div className= 'row mt-3 border border-2 rounded p-3 gallary'>
                    
                    <div className  = 'col-md-4 pt-4 '>
                        <img className ='w-75 border border-3 border-primary rounded-top' src ={london}  alt="" />
                        <h4>LONDON, UK</h4>
                    </div>
                    <div className  = 'col-md-4 pt-4'>
                        <img className ='w-75  border border-3 border-success rounded-top' src ={paris} alt="" />
                        <h4>PARIS, FRANCH</h4>
                    </div>
                    <div className  = 'col-md-4 pt-4 '>
                        <img className ='w-75 border border-3 border-danger rounded-top' src ={singapur}  alt="" />
                        <h4>SINGAPUR, MALAISIA</h4>
                    </div>
                    <div className  = 'col-md-4 pt-4 '>
                        <img className ='w-75 border border-3 border-warning rounded-top' src ={dubai}  alt="" />
                        <h4>DUBAI, UAE</h4>
                    </div>
                    <div className  = 'col-md-4 pt-4 '>
                        <img className ='w-75 border border-3 border-info rounded-top' src ={soudi} alt="" />
                        <h4>MOCCA, SOUDI ARAB</h4>
                    </div>
                    <div className  = 'col-md-4 pt-4'>
                        <img className ='w-75 border border-3 border-dark rounded-top' src ={moscow}  alt="" />
                        <h4>MOSCOW, RUSSIA</h4>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Gallery;