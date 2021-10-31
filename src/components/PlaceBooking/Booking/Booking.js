import React from 'react';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import './Booking.css';

const Booking = () => {
    const {logOut, user} = useAuth();
    console.log(user);
    return (
        <div >
            <h2>Booking</h2>
            <NavLink to='/myBooking'>My Booking</NavLink>
            <NavLink to = '/manageBooking'>Manage All Booking</NavLink>
            <NavLink to ='/addPlace'>Add New Place</NavLink>
            <button onClick ={logOut} className ='btn btn-primary m-3'>Log Out</button>

            <div>
            <h2 className ='text-center text-primary'>User Info</h2>
                <div className="card w-25 mx-auto mt-5" >
                   <img src={user?.photoURL} className="card-img-top" style ={{height:'200px'}} alt="..."/>
                     <div className="card-body">
                     <h4>{user?.displayName}</h4>
                       <p className="card-text">{user?.email}</p>
                    </div>
                 </div>
            </div>


        </div>
    );
};

export default Booking;