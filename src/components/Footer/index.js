import React from 'react';

import {Footer} from 'react-materialize'



const Index = () => {
    return (
        <div>
            <Footer
  className="example"
  copyrights="&copy 2015 Copyright Text"
  links={<ul><li><a className="grey-text text-lighten-3" href="/">Home</a></li><li><a className="grey-text text-lighten-3" href="#feature">Features</a></li><li><a className="grey-text text-lighten-3" href="#testimonial">Testimonials</a></li></ul>}
  moreLinks={<a className="grey-text text-lighten-4 right" href="#!">More Links</a>} 
> 
  <h5 className="white-text">
   Who We Are
  </h5>
  <p className="grey-text text-lighten-4">
    You can use rows and columns here to organize your footer content.
  </p>
</Footer>
        </div>
    )
}

export default Index;