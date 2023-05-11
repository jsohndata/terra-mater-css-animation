import {Container, Row, Col} from 'react-bootstrap';
import "../styles/page1.css";

export default function Page1() {

  return (
    <section id="page1">
        <Container>
          <Row className="g-5">
            <Col><h2>I. Transform</h2></Col>
          </Row>

          <Row className="g-5">
            <Col md={4}>
              <div className="box scale">
                <p className="text-white">Scale</p>
              </div>
            </Col>

            <Col md={4}>
              <div className="box scale-x">
                <p className="text-center text-white"> Scale X
                </p>
              </div>
            </Col>

            <Col md={4}>
              <div className="box rotate">
                <p className="text-center text-white"> 
                Rotate
                </p>
              </div>
            </Col>
            <Col>
              <div className="box skew">
                <p className="text-center text-white"> 
                Skew
                </p>
              </div>
            </Col>
            <Col>
              <div className="box skew2">
                <p className="text-center text-white"> 
                Skew
                </p>
              </div>
            </Col>
            <Col>
              <div className="box translate">
                <p className="text-center text-white"> 
                Translate
                </p>
              </div>
            </Col>
          </Row>
        </Container>
    </section>
  )
}