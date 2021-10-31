import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

const ServiceDetail = () => {
    const [services, setServices] = useState()

    const{id} = useParams();
    
    useEffect(()=>{
        fetch('https://howling-spider-32011.herokuapp.com/services')
        .then(res=>res.json())
        .then(data =>setServices(data))
    },[])

    // console.log(services);
    const matchService = services?.find(service =>service?._id === id);
    // const{title,img,name,time,price,dis}  = matchService;

    return (
        <div>
            <div className="card m-3 w-75 mx-auto bg-dark text-white">
             <img src={matchService?.img} className="card-img-top"  alt="..."/>
            <div className="card-body">
               <h5 className="card-title text-warning">{matchService?.title}</h5>
               
               <h4>Price: <span style={{color:'tomato'}}>${matchService?.price}</span>/Travelling</h4>
               <p className="card-text">Traveller : <small className="text-muted">{matchService?.name}</small> | Duration: <small> {matchService?.time} Day</small></p>
               <p className="card-text"> <span className ='fw-bold text-warning'>Discription: </span>{matchService?.dis}</p>
              
              <Link to='/booking'><button className = 'details'>Booking Now</button></Link>
             </div>
          </div>
        </div>
    ); 
};

export default ServiceDetail;