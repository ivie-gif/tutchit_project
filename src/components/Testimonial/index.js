import React from 'react';

import Card from '../Card/index';


import {Row, Col} from 'react-materialize'

const Index = () => {
    return (
        <div>

        <Row>
            <Col  m={4} s={12}>
            <Card>
            <h5 className="center-align black-text">Emmanuel</h5>
                       <p className=" black-text">Not sure what you're going to do with love this icon now you've found it? 
                        Check out our guide on getting started. Or deep dive into how to use a 
                        specific styling trick or method in our docs.</p>
            </Card>
            </Col>
            <Col  m={4} s={12}>
            <Card>
            <h5 className="center-align black-text">Bisola</h5>
                       <p className=" black-text">Not sure what you're going to do with love this icon now you've found it? 
                        Check out our guide on getting started. Or deep dive into how to use a 
                        specific styling trick or method in our docs.</p>
            </Card>
            </Col>
            <Col  m={4} s={12}>
            <Card>
            <h5 className="center-align black-text">Luke</h5>
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