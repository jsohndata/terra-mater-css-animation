import {Container, Row, Col} from 'react-bootstrap';

export default function Footer() {

  const gitHubUrl = "https://github.com/jsohndata/css-animation";
  return (
    <footer>
      <Container>
        <Row>
          <Col className="text-center">
            <p><a href={gitHubUrl} target="_blank" rel="noreferrer" style={{"color": "brown", "textDecoration": "none" }}>Code in GitHub</a></p>
          </Col>
      </Row>
      </Container>
    </footer>
  )
}