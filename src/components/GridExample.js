import React,{Component} from 'react';
import { Container, Row, Col } from 'react-bootstrap';


class GridExample extends Component {

    render(){

        return(
            <div>
                <br />
                <br />
                <br />
                <Container>
                    <Row className="justify-content-md-center">
                        <h3>Variable width content#</h3>  
                    </Row>
                    <Row className="justify-content-md-center">
                        <p>
                            Set the column value (for any breakpoint size) to "auto" to size columns based on the natural width of their content.
                        </p>
                    </Row>

                    <br />
                    <br />

                    <Row className="justify-content-md-center">
                        <Col xs lg="1">
                            1 of 3
                        </Col>
                        <Col md="auto">
                            
                            Variable width content
                        </Col>
                        <Col xs lg="2">
                            3 of 3
                        </Col>
                    </Row>
                    <br />
                    <br />
                    <br />

                    <Row className="justify-content-md-center">
                        <h3>Responsive grids#</h3>  
                    </Row>
                    <Row className="justify-content-sm-center">
                        <Col sm={4}>One</Col>
                        <Col sm={4}>Second</Col>
                        <Col sm={4}>Three</Col>
                    </Row>

                    <br />
                    <br />

                    {/* 
                        ````````````````````
                        Auto-layout columns  
                        
                        ````````````````````
                        
                    */}
                    <br />
                    <br />
                    <br />

                    <Row className="justify-content-md-center">
                        <h3>Auto-layout columns</h3>  
                    </Row>
                    <Row className="justify-content-sm-center">
                        <Col>1 of 3</Col>
                        <Col>2 of 3</Col>
                        <Col>3 of 3</Col>
                    </Row>

                    <br />
                    <br />
                </Container>
                
            </div>
        )
    };

};

export default GridExample;