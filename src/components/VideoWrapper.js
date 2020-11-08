import styles from '../styles/VideoWrapper.module.css';
import Link from 'next/link';

const VideoWrapper = ({ thumb, title, descrip, link }) => {
    return (
        <li className={styles.list}>
            <img className={styles.img} src={thumb} alt={title} />
            <div className={styles.descriptions}>
                <h3 className={styles.name}>{title}</h3>
                <p className={styles.descrip}>{descrip}</p>
                <div className={styles.link}></div>
            </div>
        </li>
    );
};

export default VideoWrapper;
