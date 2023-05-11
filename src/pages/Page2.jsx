import {Container, Row, Col} from 'react-bootstrap';
import "../styles/page2.css";

export default function Page2() {
  

  return (
    <section id="page2">
        <Container>
          <Row>
            <Col><h2>Page2: Animation Timing Function Race</h2></Col>
          </Row>

          <Row>
            <Col>
              <div className="boxrace race1">Linear</div>
              <div className="boxrace race2">Ease</div>
              <div className="boxrace race3">Ease-In</div>
              <div className="boxrace race4">Ease-Out</div>
              <div className="boxrace race5">Ease-In-Out</div>
            </Col>
          </Row>
        </Container>



    </section>
  )
}