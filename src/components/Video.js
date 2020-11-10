import styles from '../styles/Video.module.css';
import Statistics from './Statistics';

const Video = ({ video, title, like, dislike, descrip, views }) => {
    return (
        <div className={styles.videoContainer}>
            <div className={styles.video}></div>
            <Statistics likeStats={like} dislikeStats={dislike} viewsStats={views} />
            <h1 className={styles.title}>{title}</h1>
            <p className={styles.descrip}>{descrip}</p>
        </div>
    );
};

export default Video;
