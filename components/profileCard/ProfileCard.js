import styles from './ProfileCard.module.css';
import ReactTypingEffect from 'react-typing-effect';
import { Button } from 'react-bootstrap';

const ProfileCard = () => {
  const componentClasses = [
    'd-flex',
    'flex-column',
    'justify-content-center',
    'align-items-center',
  ];
  const imageClasses = ['img-fluid', 'rounded-circle', styles.picture];
  const descriptionClasses = ['mx-3', styles.descriptionWrapper];

  return (
    <div className={componentClasses.join(' ')}>
      <img
        src="./images/profile-picture.jpeg"
        alt="Profile picture"
        className={imageClasses.join(' ')}
      />
      <h1 className="mx-3 my-3">Edgar. Frontend Developer.</h1>
      <div className={descriptionClasses.join(' ')}>
        <ReactTypingEffect
          className={styles.description}
          text={
            'As a Frontend Developer, I love bringing ideas and projects to life, creating an exceptional online experience and polished final result.'
          }
          speed={40}
          eraseSpeed={20}
          eraseDelay={8000}
          typingDelay={1500}
        />
      </div>
      <a href="#contact">
        <Button className="btn btn-primary">Get in touch!</Button>
      </a>
    </div>
  );
};

export default ProfileCard;
