import React from 'react';
import {Row, Col} from 'react-materialize'

import Card from '../Card/index'




const Index = () => {
    return (
        <div>
        <Row>
            <Col m={4} s={12}>
            <Card >
                <h5 className="center-align black-text">React</h5>
                       <p className=" black-text">Not sure what you're going to do with love this icon now you've found it? 
                        Check out our guide on getting started. Or deep dive into how to use a 
                        specific styling trick or method in our docs.</p>
                       
                        </Card>
                       </Col>

                       <Col m={4} s={12}>
                <Card>
                <h5 className="center-align black-text">React-materialize</h5>
                       <p className=" black-text">Not sure what you're going to do with love this icon now you've found it? 
                        Check out our guide on getting started. Or deep dive into how to use a 
                        specific styling trick or method in our docs.</p>
                       
                        </Card>
                       </Col>

                       <Col m={4} s={12}>
                <Card>
                <h5 className="center-align black-text">Firebase</h5>
                       <p className=" black-text">Not sure what you're going to do with love this icon now you've found it? 
                        Check out our guide on getting started. Or deep dive into how to use a 
                        specific styling trick or method in our docs.</p>
                       
                        </Card>
                       </Col>
                        </Row>
                        {/* second row */}
                        <Row>
            <Col m={4} s={12}>
            <Card >
                <h5 className="center-align black-text">Git</h5>
                       <p className=" black-text">Not sure what you're going to do with love this icon now you've found it? 
                        Check out our guide on getting started. Or deep dive into how to use a 
                        specific styling trick or method in our docs.</p>
                       
                        </Card>
                       </Col>

                       <Col m={4} s={12}>
                <Card>
                <h5 className="center-align black-text">GitHub</h5>
                       <p className=" black-text">Not sure what you're going to do with love this icon now you've found it? 
                        Check out our guide on getting started. Or deep dive into how to use a 
                        specific styling trick or method in our docs.</p>
                       
                        </Card>
                       </Col>

                       <Col m={4} s={12}>
                <Card>
                <h5 className="center-align black-text">Heroku/Netlify</h5>
                       <p className=" black-text">Not sure what you're going to do with love this icon now you've found it? 
                        Check out our guide on getting started. Or deep dive into how to use a 
                        specific styling trick or method in our docs.</p>
                       
                        </Card>
                       </Col>
                        </Row>
        </div>
    )
}

export default Index;