import "./Alumn.css";
import { Container, Row, Col } from 'react-bootstrap';

const Alumn = ({ value }) => {
  const alumn_profiles = value.map((alumn, index) => (
    <Col key={index}>
      <div className="alumn_info">
        <div className="alumn_pic">
          <img src={alumn.person_pic} alt="not_available" />
        </div>
        <div className="alumn_name">
          <h6>{alumn.person_name}</h6>
        </div>
        <div className="alumn_desc">
          <p>{alumn.person_desc}</p>
        </div>
      </div>
    </Col>
  ));

  return (
    <div className="alumn_content">
      <Container fluid>
        <Row xs={1} sm={2} md={3}>
          {alumn_profiles}
        </Row>
      </Container>
    </div>
  );
}

export default Alumn;



