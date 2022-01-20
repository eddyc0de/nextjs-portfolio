import styles from './ProfileCard.module.css';
import ReactTypingEffect from 'react-typing-effect';

const ProfileCard = () => {
  const componentClasses = [
    'd-flex',
    'flex-column',
    'justify-content-center',
    'align-items-center',
  ];
  const imageClasses = ['img-fluid', 'rounded-circle', styles.picture];
  const descriptionClasses = ['mx-2', styles.descriptionWrapper];

  return (
    <div className={componentClasses.join(' ')}>
      <img
        src="./images/profile-picture.jpeg"
        alt="Profile picture"
        className={imageClasses.join(' ')}
      />
      <h1 className="mx-2 my-2">Edgar. Frontend Developer.</h1>
      <div className={descriptionClasses.join(' ')}>
        <ReactTypingEffect
          className={styles.description}
          text={
            'As a Frontend Developer, I love bringing ideas and projects to life, creating an exceptional online experience and polished final result.'
          }
          speed={40}
          eraseSpeed={20}
          eraseDelay={5000}
          typingDelay={1000}
        />
      </div>
    </div>
  );
};

export default ProfileCard;
