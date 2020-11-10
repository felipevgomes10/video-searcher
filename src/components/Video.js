import styles from '../styles/Video.module.css';
import Statistics from './Statistics';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';

const Video = ({ title, like, dislike, descrip, views }) => {
    const { query } = useRouter();

    return (
        <div className={styles.videoContainer}>
            <iframe
                className={styles.video}
                src={`http://www.youtube.com/embed/${query.id}`}
                controls="2"
                title={title}
                type="text/html"
                frameBorder="0"
            />
            <Statistics likeStats={like} dislikeStats={dislike} viewsStats={views} />
            <h1 className={styles.title}>{title}</h1>
            <p className={styles.descrip}>{descrip}</p>
        </div>
    );
};

export default Video;

Video.propTypes = {
    title: PropTypes.string.isRequired,
    like: PropTypes.string,
    dislike: PropTypes.string,
    descrip: PropTypes.string.isRequired,
    views: PropTypes.string
};
