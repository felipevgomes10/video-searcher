import styles from '../styles/Welcome.module.css';
import PropTypes from 'prop-types';
import hero from '../../public/bg-small.jpg';

const Welcome = () => {
    return (
        <div className={styles.welcome}>
            <img src={hero} alt="hero-img" className={styles.img} />
            <div className={styles.bg}></div>
        </div>
    );
};

export default Welcome;

Welcome.propTypes = {
    style: PropTypes.object
};
