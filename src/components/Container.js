import styles from '../styles/Container.module.css';
import PropTypes from 'prop-types';

const stylesContainer = {
    display: 'grid',
    gridTemplateRows: 'min-content 1fr'
};

const Container = ({ children, searched }) => {
    return (
        <div className={styles.container} style={!searched ? stylesContainer : {}}>
            {children}
        </div>
    );
};

export default Container;

Container.propTypes = {
    children: PropTypes.oneOfType([PropTypes.element, PropTypes.node]),
    searched: PropTypes.bool
};
