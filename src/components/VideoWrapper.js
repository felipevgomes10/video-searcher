import styles from '../styles/VideoWrapper.module.css';
import PropTypes from 'prop-types';
import Link from 'next/link';

const VideoWrapper = ({ thumb, title, descrip, id }) => {
    return (
        <li className={styles.list}>
            <img className={styles.img} src={thumb} alt={title} />
            <div className={styles.descriptions}>
                <h3 className={styles.name}>{title}</h3>
                <p className={styles.descrip}>{descrip}</p>
                <Link
                    href={{
                        pathname: '/video/[id]',
                        query: { id }
                    }}
                    className={styles.link}>
                    <a>Detalhes</a>
                </Link>
            </div>
        </li>
    );
};

export default VideoWrapper;

VideoWrapper.propTypes = {
    thumb: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    descrip: PropTypes.string.isRequired
};
