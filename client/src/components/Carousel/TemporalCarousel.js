import React from 'react';
import {Container, Col, Row, Carousel, Card, Badge} from "react-bootstrap";

export class TemporalCarousel extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            index: this.props.activeIndex,
            direction: this.props.direction,
        };
    }

    render() {
        return (
            <Carousel interval={null} activeIndex={this.props.activeIndex} direction={this.props.direction}
                      onSelect={this.props.onSelect}>
                <Carousel.Item>
                    <Container>
                        <Col md={{span: 8, offset: 2}}>
                            <Row>
                                <Card className="text-center">
                                    <Card.Header>Temporalité</Card.Header>
                                    <Card.Body>
                                        <Card.Title>La temporalité de réalisation est de six mois</Card.Title>
                                        <Card.Text>
                                            <Col>
                                                <Badge pill variant="secondary">
                                                    6 mois
                                                </Badge>
                                            </Col>
                                        </Card.Text>
                                        <Card.Text>
                                            Cette temporalité est idéale pour des projets de moyenne envergure qu'il
                                            faut réaliser rapidement avec investissement important.
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Row>
                            <Row>
                                <br/>
                                <br/>
                            </Row>
                        </Col>
                    </Container>
                </Carousel.Item>
                <Carousel.Item>
                    <Container>
                        <Col md={{span: 8, offset: 2}}>
                            <Row>
                                <Card className="text-center">
                                    <Card.Header>Temporalité</Card.Header>
                                    <Card.Body>
                                        <Card.Title>La temporalité de réalisation est de douze mois</Card.Title>
                                        <Card.Text>
                                            <Col>
                                                <Badge pill variant="secondary">
                                                    12 mois
                                                </Badge>
                                            </Col>
                                        </Card.Text>
                                        <Card.Text>
                                            Cette temporalité est idéale pour des projets de moyenne envergure avec une
                                            réalisation sans flux tendus, et un investissement moyen ou des projet de
                                            petite envergure avec un investissement moyen.
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Row>
                            <Row>
                                <br/>
                                <br/>
                            </Row>
                        </Col>
                    </Container>
                </Carousel.Item>
                <Carousel.Item>
                    <Container>
                        <Col md={{span: 8, offset: 2}}>
                            <Row>
                                <Card className="text-center">
                                    <Card.Header>Temporalité</Card.Header>
                                    <Card.Body>
                                        <Card.Title>La temporalité de réalisation est de vingt-quatre mois</Card.Title>
                                        <Card.Text>
                                            <Col>
                                                <Badge pill variant="secondary">
                                                    24 mois
                                                </Badge>
                                            </Col>
                                        </Card.Text>
                                        <Card.Text>
                                            Cette temporalité est idéale pour des projets de très grande envergure,
                                            potentiellement dans le domaine médical ou dans la santé permettant
                                            d'obtenir des autorisations de mise sur le marché. Cette temporalité est
                                            aussi idéale dans le cadre de projets avec une petite équipe et des
                                            financements limités.
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Row>
                            <Row>
                                <br/>
                                <br/>
                            </Row>
                        </Col>
                    </Container>
                </Carousel.Item>
            </Carousel>
        );
    }
}
