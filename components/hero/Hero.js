import styles from './Hero.module.css';
import { Row, Col, Container } from 'react-bootstrap';
import ProfileCard from '../profileCard/ProfileCard';

const Hero = () => {
  return (
    <section id="hero" className={styles.hero}>
      <Container fluid className="vh-100">
        <Row className="vh-100">
          <Col xs="12" md="6" className="align-self-center">
            <ProfileCard />
          </Col>
          <Col xs="12" md="6" className={styles.heroImage}></Col>
        </Row>
      </Container>
    </section>
  );
};

export default Hero;
