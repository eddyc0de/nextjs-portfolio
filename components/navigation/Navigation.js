import styles from './Navigation.module.css';

const Navigation = () => {
  return (
    <nav id="nav" className={styles.navigation}>
      <ul>
        <li>
          <a href="#hero">Home</a>
        </li>
        <li>
          <a href="#stack">Stack</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
