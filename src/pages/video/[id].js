import { useEffect, useState } from 'react';
import { VIDEO_DESCRIP } from '../../api';
import Video from '../../components/Video';
import PropTypes from 'prop-types';
import Head from 'next/head';

const VideoPage = ({ video }) => {
    const [videoDetails, setVideoDetails] = useState([]);

    useEffect(() => {
        const videoItem = video.items.map(({ snippet, statistics }) => {
            return { snippet, statistics };
        });
        setVideoDetails(videoItem);
    }, [video]);

    if (videoDetails.length === 0) return null;
    return (
        <>
            <Head>
                <meta name="description" content="Página com detalhes do vídeo" />
                <title>Detalhes | iSearch</title>
            </Head>
            <Video
                title={videoDetails[0].snippet.title}
                descrip={videoDetails[0].snippet.description}
                like={videoDetails[0].statistics.likeCount}
                dislike={videoDetails[0].statistics.dislikeCount}
                views={videoDetails[0].statistics.viewCount}
            />
        </>
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
