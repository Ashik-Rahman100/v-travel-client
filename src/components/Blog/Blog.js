import React from 'react';
import img1 from '../../images/blog/bd.jpg';
import img3 from '../../images/blog/nepal.jpg';
import img2 from '../../images/blog/thiland.jpg';
const Blog = () => {
    return (
<div className='container'>
<h1 className= 'text-center mt-5 pb-3 fw-bold '>OUR <span className ='text-warning'>BLOG</span></h1>
<div className="row row-cols-1 row-cols-md-3 g-4 pb-3">
  <div className="col">
    <div className="card h-100">
      <img  className="card-img-top" src ={img1} alt="..."/>
      <div className="card-body">
        <h5 className="card-title fw-bold" style={{color:'tomato'}}>Cox's Bazar </h5>
        <p className="card-text text-start">Cox’s Bazar is a town on the southeast coast of Bangladesh. It’s known for its very long, sandy beachfront, stretching from Sea Beach in the north to Kolatoli Beach in the south. Aggameda Khyang monastery is home to bronze statues and centuries-old Buddhist manuscripts. South of town, the tropical rainforest of Himchari National Park has waterfalls and many birds. North, sea turtles breed on nearby Sonadia Island. </p>
        <button className='details'>More..</button>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card h-100">
      <img  className="card-img-top" src = {img2} alt="..."/>
      <div className="card-body">
        <h5 className="card-title fw-bold" style={{color:'tomato'}}>Land Mark Park</h5>
        <p className="card-text text-start">Thailand is a Southeast Asian country. It's known for tropical beaches, opulent royal palaces, ancient ruins and ornate temples displaying figures of Buddha. In Bangkok, the capital, an ultramodern cityscape rises next to quiet canalside communities and the iconic temples of Wat Arun, Wat Pho and the Emerald Buddha Temple (Wat Phra Kaew). Nearby beach resorts include bustling Pattaya and fashionable Hua Hin.</p>
        <button className='details'>More..</button>
      </div>
    </div>
  </div>
  <div className="col ">
    <div className="card h-100">
      <img  className="card-img-top" src ={img3} alt="..."/>
      <div className="card-body">
        <h5 className="card-title fw-bold" style={{color:'tomato'}}>Kanchenjunga Himalaya</h5>
        <p className="card-text text-start ">The Great Himalayas form a climatic barrier between the monsoonal  The barren, uninhabitable highlands also are a major impediment to human travel; and their steep rocky banks make foot traffic difficult. The few passes are at elevations between 16,000 and 19,000 feet (5,000 and 6,000 metres). In the lower, forested Lesser Himalayas to the south,elevation of about 5,000 feet (1,500 metres).</p>
        <button className='details'>More..</button>
      </div>
    </div>
  </div>
</div>
</div>
    );
};

export default Blog;