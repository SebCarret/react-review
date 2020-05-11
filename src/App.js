import React, {useState} from 'react';
import { Container, Row, Col } from 'reactstrap';

import Child from './Child';

const styles = {
  container: {height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center'},
  h1: {textAlign: 'center', marginBottom: 10, color: '#DC3545'},
  h2: {textAlign: 'center', marginTop: 25, marginBottom: 25}
};

function App() {

  const [glace, setGlace] = useState('');

 var datas = [
   {name: "Bâtonnets", img: "./batonnets.jpg"},
   {name: "Cornets", img: "./cornets.jpg"},
   {name: "Coupe", img: "./coupe.jpg"}
 ];

 const choose = (toto, tata) => {
   console.log('valeur de tata : ' + tata)
   setGlace(toto)
 };

 var iceCreams = datas.map((glace, i) => {
   return (<Child key={i} nameFromApp={glace.name} imgSrc={glace.img} onChooseClick={choose}/>)
 });

  return (
    <Container style={styles.container}>
      <Row>
        <Col>
          <h1 style={styles.h1}>Quel est votre choix ?</h1>
        </Col>
      </Row>
      <Row>
        <Col>
          <h2 style={styles.h2}>Vous avez choisi : {glace}</h2>
        </Col>
      </Row>
      <Row>
        {/* <Child />
        <Child />
        <Child /> */}
        {iceCreams}
      </Row>
    </Container>
  );
}

export default App;
