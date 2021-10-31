import React from 'react';
import asia from '../../images/destination/asia.jpg';
import europe from '../../images/destination/europe.jpg';
import middleEast from '../../images/destination/middle-east.jpg';
import russia from '../../images/destination/russia.jpg';
import './Destination.css';


const Destination = () => {

    return (
        <div className='conatiner destination-container text-white p-4'>
            <h1 className= 'text-center pt-3'>OUR <span className ='text-warning'>DESTINATIONS </span> </h1>
              <div className="row pt-3">
               <div className='col-md-3 col-12'>
                   <img className = 'img-fluid' src = {asia}  alt="" />
                   <h4 className ='mt-3'>ASIA</h4>
               </div>
               <div className= 'col-md-3 col-12'>    
                   <img className = 'img-fluid' src = {europe} alt="" />
                   <h4 className ='mt-3'>EUROPE</h4>
               </div>
               <div className ='col-md-3 col-12'>
                   <img className = 'img-fluid' src = {middleEast}  alt="" />
                   <h4 className ='mt-3'>MIDDLE EAST</h4>
               </div>

               <div className ='col-md-3 col-12'>
                   <img className = 'img-fluid' src = {russia}  alt="" />
                   <h4 className ='mt-3'>RUSSIA</h4>
               </div>
                
             </div>
        </div>
    );
};

export default Destination;