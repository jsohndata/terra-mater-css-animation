import { Container, Row, Col } from "react-bootstrap";
import "../styles/page4.css";

export default function Page4() {

  const imgRoot = process.env.PUBLIC_URL + "/images/";

  return (
    <section id="page4">
      <Container>
        <Row>
            <Col><h2>Page4: Button Hover</h2></Col>
        </Row>        

        <Row>
          <Col className="text-center"><button className="pg4-button button1">X axis</button></Col>
          <Col className="text-center"><button className="pg4-button button2">Y axis</button></Col>
          <Col className="text-center"><button className="pg4-button button3">Scale</button></Col>
        </Row>

        <Row>
          <Col md={4}>
            <div className="profile">
              <img src={imgRoot+"pict1.webp"} alt="profile" />

              <div className="profile-text">
                <h3>Ticket to <br />Andromeda Galaxy</h3>
                <p>2.5 million light-years</p>
                <a href="https://notiempo.lol/mozartsghost/r" 
                  className="profile-button" 
                  rel="noreferrer">Buy Now!</a>
              </div>
            </div>
          </Col>

          <Col md={4}>
            <div className="profile">
              <img src={imgRoot+"pict2.webp"} alt="profile" />

              <div className="profile-text">
                <h3>Ticket to <br />Proxima Centauri</h3>
                <p>4.246 light-years</p>
                <a href="https://notiempo.lol/mozartsghost/r" 
                  className="profile-button" 
                  rel="noreferrer">Buy Now!</a>
              </div>
            </div>
          </Col>

          <Col>
            <div className="profile">
              <img src={imgRoot+"profile3.webp"} alt="profile" />

              <div className="profile-text">
                <h3>Ticket to <br />Sirius B</h3>
                <p>8.611 light-years</p>
                <a href="https://notiempo.lol/mozartsghost/r" 
                  className="profile-button" 
                  rel="noreferrer">Buy Now!</a>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    
  </section>
  )
}