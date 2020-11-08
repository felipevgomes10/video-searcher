import Welcome from '../components/Welcome';
import styles from '../styles/Home.module.css';
import Input from '../components/Input';
import CTA from '../components/CTA';
import useForm from '../Hooks/useForm';
import { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import Container from '../components/Container';
import videoIcon from '../../public/video.png';
import VideoWrapper from '../components/VideoWrapper';

const Home = ({ searched, setSearched }) => {
    const { value, error, onChange, onBlur, validate } = useForm();
    const formRef = useRef();
    const [results, setResults] = useState([]);
    const [nextPage, setNextPage] = useState('');

    const url = `https://www.googleapis.com/youtube/v3/search?part=id,snippet&q=${value}&key=AIzaSyDS4id5d4AFDUP4G9vkuwFzLCTspL9uaLw`;

    const fetcher = (req) => fetch(req).then((r) => r.json());

    useEffect(() => {
        const pagination = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&order=searchSortUnspecified&pageToken=${nextPage}&q=${value}&type=video&key=AIzaSyDS4id5d4AFDUP4G9vkuwFzLCTspL9uaLw`;

        const handleScroll = () => {
            const windowHeight = document.documentElement.scrollHeight;
            const scroll = window.pageYOffset;
            const condition = scroll > windowHeight * 0.5;
            let wait = false;
            console.log(condition && !wait);
            if (condition && !wait) {
                wait = true;
                const fetchNextPage = async () => {
                    const page = await fetcher(pagination);
                    setNextPage(page.nextPageToken);
                    const items = [page].map((item) => item.items);
                    const snippets = items[0].map(({ snippet }) => snippet);
                    setResults((results) => [...results, ...snippets]);
                    setTimeout(() => {
                        wait = false;
                        console.log('mudou');
                    }, 5000);
                };
                fetchNextPage();
            }
        };

        window.addEventListener('scroll', handleScroll);
        window.addEventListener('wheel', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('wheel', handleScroll);
        };
    }, [nextPage, value]);

    const changeInput = () => {
        formRef.current.style.transform = 'translateY(-359px)';
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (validate()) {
            setSearched(true);
            changeInput();
            const json = await fetcher(url);
            setNextPage(json.nextPageToken);
            const data = json.items.map(({ snippet }) => snippet);
            setResults(data);
        }
    };

    return (
        <div className={styles.home}>
            <Welcome />
            <Container searched={searched}>
                <div className={styles.icon}>
                    <img src={videoIcon} alt="videoIcon" />
                </div>
                <h3 className={styles.h3}>Seus videos favoritos aqui</h3>
                <form
                    ref={formRef}
                    className={`${styles.form} ${!searched ? 'formGrid' : ''}`}
                    onSubmit={handleSubmit}>
                    <Input
                        id="search"
                        label="Pesquisar"
                        type="text"
                        value={value}
                        onChange={onChange}
                        onBlur={onBlur}
                        error={error}
                        searched={searched}
                    />
                    {!searched && <CTA>Buscar</CTA>}
                </form>
                {searched &&
                    results.length > 0 &&
                    results.map((result, index) => {
                        return (
                            <VideoWrapper
                                key={index}
                                thumb={
                                    result.thumbnails.high.url ||
                                    result.thumbnails.medium.url ||
                                    result.thumbnails.default.url
                                }
                                title={result.title}
                                descrip={result.description}
                            />
                        );
                    })}
            </Container>
            <style jsx>{`
                .formGrid {
                    grid-row: 2 / 3;
                    align-self: center;
                }
            `}</style>
        </div>
    );
};

export default Home;

Home.propTypes = {
    searched: PropTypes.bool,
    setSearched: PropTypes.func
};
