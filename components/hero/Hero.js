import styles from './Hero.module.css';
import { Row, Col, Container } from 'react-bootstrap';
import ProfileCard from '../profileCard/ProfileCard';

const Hero = () => {
  return (
    <section id="hero" className={`d-flex align-items-center ${styles.hero}`}>
      <Container fluid className="z-index3">
        <Row>
          <Col className={styles.heroImage}>
            <ProfileCard />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Hero;
