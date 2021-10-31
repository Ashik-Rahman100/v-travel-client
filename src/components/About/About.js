import React from 'react';
import about from '../../images/about.png';
import './About.css';
const About = () => {

    return (
        <div >
            <div className = "container mt-5 text-start">
            <h1 className= 'text-center m-4 fw-bold'>About<span className ='text-warning'> US</span> </h1>
            <div className = 'row' >
                <div className = 'col-md-6 col-12'>
                    <h2 className ='fst-italic' style ={{color:'hsl(14, 100%, 45%)'}}>Who We Are?</h2>
                    <h1 className ='fw-bold mt-3'>We Are Travel Experts</h1>

                    <h4 className ='mt-4'>Luxury Tours and Tailor-Made Holidays</h4>
                    <p>V-Travel has over 260 years of experience arranging high quality travel to the world's most captivating destinations. In uncertain times such as these, our clients have always trusted us to have their best interests at heart. That is why we’ve introduced our Book with Confidence policy, providing you with the flexibility and security to plan your next journey.</p>
                    <div className="gallary-btn mb-3">
                        <button>MORE..</button>
                    </div>
                </div>
                <div className = 'col-md-6 col-12 mb-4'>
                    <img className ='img-fluid' src={about} alt="" />
                </div>
            </div>
          </div>
        </div>
    );
};

export default About;