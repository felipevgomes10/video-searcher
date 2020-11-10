import { useState } from 'react';
import PropTypes from 'prop-types';
import styles from '../styles/Image.module.css';

const Image = ({ classes, alt, ...props }) => {
    const [skeleton, setSkeleton] = useState(true);

    const handleLoad = ({ target }) => {
        target.style.opacity = '1';
        setSkeleton(false);
    };

    return (
        <div className={`${styles.wrapper} ${classes}`}>
            {skeleton && <div className={styles.skeleton}></div>}
            <img {...props} alt={alt} onLoad={handleLoad} className={styles.img} />
        </div>
    );
};

export default Image;

Image.propTypes = {
    alt: PropTypes.string,
    classes: PropTypes.string
};
