import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css';

const Service = (props) => {
    const {title,img,name,time,price,dis,_id} = props.service; 
    return (
        <div>
            
            <div className="col">
              <div className="card h-100">
               <img src={img} className="card-img-top " style = {{height:"250px"}} alt="..."/>
               <div className="card-body">
               <h5 className="card-title fw-bold" style={{color:'tomato'}}>{title}</h5>
               <p>Traveller: {name} | <span>Duration:  {time} day</span></p>
               <h4>Price: <span style={{color:'tomato'}}>${price}</span></h4>
               <p className='text-center'><span className='fw-bold '>Discription: </span> {dis?.slice(0,90)}.</p>
               
               <Link to={`/service/${_id}`}>
                  <button className = 'details'>Booking Now</button> 
               </Link>
                    
               </div>
             </div>
            </div>
        </div>
    );
};

export default Service;