import like from '../../public/like.png';
import dislike from '../../public/dislike.png';
import view from '../../public/view.png';
import styles from '../styles/Statistics.module.css';
import PropTypes from 'prop-types';

const Statistics = ({ likeStats, dislikeStats, viewsStats }) => {
    return (
        <div className={styles.statistics}>
            <div className={styles.iconWrapper}>
                <img src={like} alt="like-icon" />
                <span>{likeStats}</span>
            </div>
            <div className={styles.iconWrapper}>
                <img src={dislike} alt="dislike-icon" />
                <span>{dislikeStats}</span>
            </div>
            <div className={styles.iconWrapper}>
                <img src={view} alt="view-icon" />
                <span>{viewsStats}</span>
            </div>
        </div>
    );
};

export default Statistics;

Statistics.propTypes = {
    likeStats: PropTypes.string,
    dislikeStats: PropTypes.string,
    viewsStats: PropTypes.string
};
