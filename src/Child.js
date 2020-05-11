import React from 'react';
import { Col, Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap';

const styles = {
  card: {display: 'flex', flexDirection: 'column', alignItems: 'center', padding: 10, marginBottom: 10},
  iceCream: {textAlign: 'center', fontWeight: 'bold'},
  image: {height: 250}
};

export default function Child(props){

  const {card, iceCream, image} = styles;
  const {nameFromApp, imgSrc, onChooseClick} = props;

  const IceCreamChoose = (name, image) => {
    onChooseClick(name, image)
  };

  console.log(imgSrc);

  return (
    // <Col xs="12" md="4">
    //   <Card style={card}>
    //     <CardImg top style={image} src="./coupe.jpg" alt="Review la Capsule" />
    //     <CardBody>
    //       <CardTitle style={iceCream}>Glace au choix</CardTitle>
    //       <Button color="danger">Sélectionner</Button>
    //     </CardBody>
    //   </Card>
    // </Col>
    <Col xs="12" md="4">
      <Card style={card}>
        <CardImg top style={image} src={imgSrc} alt="Review la Capsule" />
        <CardBody>
          <CardTitle style={iceCream}>{nameFromApp}</CardTitle>
          <Button color="danger" onClick={() => IceCreamChoose(nameFromApp, imgSrc)}>Sélectionner</Button>
        </CardBody>
      </Card>
    </Col>
  )

};
