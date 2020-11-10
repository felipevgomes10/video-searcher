import { useEffect, useState } from 'react';
import { VIDEO_DESCRIP } from '../../api';
import Video from '../../components/Video';
import PropTypes from 'prop-types';

const VideoPage = ({ video }) => {
    const [videoDetails, setVideoDetails] = useState([]);

    useEffect(() => {
        const videoItem = video.items.map(({ snippet, statistics }) => {
            return { snippet, statistics };
        });
        setVideoDetails(videoItem);
    }, []);

    if (videoDetails.length === 0) return null;
    return (
        <Video
            title={videoDetails[0].snippet.title}
            descrip={videoDetails[0].snippet.description}
            like={videoDetails[0].statistics.likeCount}
            dislike={videoDetails[0].statistics.dislikeCount}
            views={videoDetails[0].statistics.viewCount}
        />
    );
};

export const getServerSideProps = async ({ params }) => {
    const videoDescrip = VIDEO_DESCRIP(params.id);
    const response = await fetch(videoDescrip);
    const video = await response.json();

    return {
        props: { video }
    };
};

export default VideoPage;

VideoPage.propTypes = {
    video: PropTypes.object
};
