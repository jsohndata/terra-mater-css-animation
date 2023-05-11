import { Container, Row, Col } from "react-bootstrap";
import "../styles/page3.css";

export default function Page3() {

  return (
    <section id="page3">
        <Container>
          <Row>
            <Col><h2>III. Color Animation with KeyFrames</h2></Col>
          </Row>

          <Row>
            <Col>
              <div className="boxcolor boxcolor1">
                <p>CFBDSIR 1458 10b</p>
              </div>
            </Col>

            <Col>
              <div className="boxcolor boxcolor2">
              <p>UY Scuti</p>
              </div>
            </Col>
          </Row>
        </Container>
    </section>
  )
}