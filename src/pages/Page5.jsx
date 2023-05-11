import { Container, Row, Col } from "react-bootstrap";
import "../styles/page5.css";

export default function Page5() {

  return (
    <section className="boxcolor50">
        <Container>
          <Row>
            <Col><h2>Page5: Position with KeyFrames</h2></Col>
          </Row>

          <Row>
            <Col>
              <div className="boxslide boxcolor51">
              </div>
            </Col>

            <Col>
              <div className="boxslide boxcolor52">
              </div>
            </Col>
          </Row>
        </Container>
    </section>
  )
}