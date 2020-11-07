import styles from '../styles/Header.module.css';
import PropTypes from 'prop-types';

const Header = ({ title }) => {
    return (
        <>
            <header className={styles.header}>
                <h3 className={styles.title}>{title}</h3>
            </header>
        </>
    );
};

export default Header;

Header.propTypes = {
    title: PropTypes.oneOfType([PropTypes.string, PropTypes.bool])
};
