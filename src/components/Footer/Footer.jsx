import {Container, Row, Col} from 'react-bootstrap';

export default function Footer() {

  const gitHubUrl = "https://github.com/jsohndata/terra-mater-css-animation";
  return (
    <footer>
      <Container>
        <Row>
          <Col className="text-center">          
            <p><a href={gitHubUrl} target="_blank" rel="noreferrer" style={{"color": "brown", "textDecoration": "none" }}>Code in GitHub</a></p>            
          </Col>
      </Row>
      </Container>

      <p id="mozarts-ghost"><a href="https://mozartsghost.band/rock?on=terra-mater-css-animation"
        alt="Click on it and press control-shift."
        title="Click on it and press control-shift.">π</a></p>
    </footer>
  )
}