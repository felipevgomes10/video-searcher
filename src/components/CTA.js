import PropTypes from 'prop-types';
import styles from '../styles/CTA.module.css';

const CTA = ({ children }) => {
    return <button className={styles.cta}>{children}</button>;
};

export default CTA;

CTA.propTypes = {
    children: PropTypes.string.isRequired
};
