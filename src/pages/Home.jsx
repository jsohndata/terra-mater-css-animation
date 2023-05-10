
import { Container, Row, Col } from 'react-bootstrap';
export default function Home() {

  return (
    <section>
      <Container>
        <Row>
          <Col>
            <h2>h2: Disney's 12 Principle of Animation</h2>
            <p><em>Illustion of Life</em> (1981) by Ollie Johnson and Frank Thomas</p>
            <ol>
              <li><strong className="text-danger">Squash and Streach</strong>: How a ball drops to the ground</li>
              <li><strong className="text-danger">Anticipation</strong>:An athelete getting ready to sprint</li>
              <li><strong className="text-danger">Staging</strong>: Creating the environment</li>
              <li><strong>Straight Ahead Action and Pose to Pose</strong></li>
              <li><strong>Follow Through and Overlapping Action</strong>: Main object stops, rest continues</li>
              <li><strong className="text-danger">Slow In and Slow Out</strong>: Ease in and out of action</li>
              <li><strong>Arcs</strong>: Natural movement</li>
              <li><strong className="text-danger">Secondary Action</strong>: Support the main action</li>
              <li><strong className="text-danger">Timing</strong>: Speed of action</li>
              <li><strong className="text-danger">Exaggeration</strong>: Push the action</li>
              <li><strong>Solid Drawing</strong>: 3D space, form, anatomy</li>
              <li><strong className="text-danger">Appeal</strong>: Appeal to the audience, is this believable?</li>
            </ol>
          </Col>
        </Row>
      </Container>
    </section>
  )
}