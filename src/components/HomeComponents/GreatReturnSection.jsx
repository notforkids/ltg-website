import React from 'react';
import './GreatReturnSection.css';
import Container from "react-bootstrap/Container";
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import GreatReturns from '../../img/greatreturns.png';
import TimelessIndustry from '../../img/timelessindustry.png';
import LinearOperations from '../../img/linearoperations.png';

function GreatReturnSection(){
    return(
        
        <Container>
        <div>
        <h2 className="fee-main-title">THE FIRST <span className="highlight">MICROLENDING FRANCHISE</span> IN THE COUNTRY</h2>
        <h4 className="fee-main-desc">Partner with us and play an essential role in extending this mission, creating opportunities and fostering prosperity in your area</h4>
        </div>
        
        <Row>
            <Col>
                <Card className="cardheight">
                    <Card.Img variant="top" src={GreatReturns} />
                    <Card.Body>
                        <Card.Title id="cardtitle">Great Returns</Card.Title>
                        <Card.Text id= "carddesc">Compared to similarly priced FRANCHISE PACKAGES, LT&G boasts of a relatively faster ROI of 28 MONTHS!</Card.Text>
                    </Card.Body>
                </Card>
            </Col>
            <Col>
                <Card className="cardheight">
                    <Card.Img variant="top" src={TimelessIndustry} />
                    <Card.Body>
                        <Card.Title id="cardtitle">Timeless Industry</Card.Title>
                        <Card.Text id= "carddesc" >Financial Industry will always be relevant regardless of shifts in the market. You know what they say, "MONEY MAKES THE WORLD GO ROUND".</Card.Text>
                    </Card.Body>
                </Card>
            </Col>
            <Col>
                <Card className="cardheight">
                    <Card.Img variant="top" src={LinearOperations} />
                    <Card.Body>
                        <Card.Title id="cardtitle">Linear Operations</Card.Title>
                        <Card.Text id= "carddesc" >The Business System is designed to produce maximum results with minimal effort. Say GOODBYE to concerns regarding SPOILAGE, LOW INVENTORY, or EXPENSIVE RENTALS.</Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
        </Container>
    )
}

export default GreatReturnSection;