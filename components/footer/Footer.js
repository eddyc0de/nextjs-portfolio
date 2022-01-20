import styles from './Footer.module.css';
import { Row, Col, Container } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Container className='d-flex justify-content-center align-items-center h-100'>
        <Row className=''>
          <Col>
            <p>Site desgined and created by Edgar. Copyright &copy; 2022.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
