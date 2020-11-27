import React from 'react';

import Navbar from '../Navbar/index'
import HeroSection from '../HeroSection/index'
import Feature from '../Feature/index'
import Testimonial from '../Testimonial/index'
import Footer from '../Footer/index'





const Index = () => {
    return (
        <div>

            <Navbar/>
            <HeroSection/>
           <div clasName="who-we-are" id = "about">
                <h4 className="center-align">Who We Are</h4>
                <div className="who-we-are-sec">
                    <p>Not sure what you're going to do with love this icon now you've found it? 
                        Check out our guide on getting started. Or deep dive into how to use a 
                        specific styling trick or method in our docs.
                        Not sure what you're going to do with love this icon now you've found it? 
                        Check out our guide on getting started. Or deep dive into how to use a 
                        specific styling trick or method in our docs.
                        Not sure what you're going to do with love this icon now you've found it? 
                        Check out our guide on getting started. Or deep dive into how to use a 
                        specific styling trick or method in our docs.
                        Not sure what you're going to do with love this icon now you've found it? 
                        Check out our guide on getting started. Or deep dive into how to use a 
                        specific styling trick or method in our docs.
                        </p>
                            <img src="./team.JPG" alt="team" />
                </div>
           </div>
           <div id="feature">
               <h3 className="center-align">Features</h3>
               <Feature/>
           </div>
           <div id ="testimonial">
               <h3 className="center-align">Testimonials</h3>
               <Testimonial/>
           </div>
           <div>
               <Footer/>
           </div>
        </div>
    )
}

export default Index;