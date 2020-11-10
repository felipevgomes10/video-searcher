import Welcome from '../components/Welcome';
import styles from '../styles/Home.module.css';
import Input from '../components/Input';
import CTA from '../components/CTA';
import useForm from '../Hooks/useForm';
import { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import Container from '../components/Container';
import videoIcon from '../../public/video.png';
import VideoWrapper from '../components/VideoWrapper';
import { NEXT_PAGE, SEARCH_VIDEOS } from '../api';
import useDebounce from '../Hooks/useDebounce';

const Home = ({ searched, setSearched, results, setResults, setTerm }) => {
    const { value, error, onChange, onBlur, validate } = useForm();
    const formRef = useRef();
    const [nextPage, setNextPage] = useState('');

    const url = SEARCH_VIDEOS(value);

    const fetcher = (req) => fetch(req).then((r) => r.json());

    useDebounce(
        () => {
            if (results.length !== 0) {
                const pagination = NEXT_PAGE(nextPage, value);

                const handleScroll = () => {
                    const windowHeight = document.body.scrollHeight - window.innerHeight;
                    const scroll = window.pageYOffset;
                    const condition = scroll === windowHeight;
                    if (condition && nextPage) {
                        const fetchNextPage = async () => {
                            const page = await fetcher(pagination);
                            setNextPage(page.nextPageToken);
                            const items = [page].map((item) => item.items);
                            const snippets = items[0].map(({ id, snippet }) => {
                                return { id, snippet };
                            });
                            setResults((results) => [...results, ...snippets]);
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
            }
        },
        [nextPage, value, results],
        150
    );

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
            const data = json.items.map(({ id, snippet }) => {
                return { id, snippet };
            });
            setResults(data);
            setTerm(value);
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
                                    result.snippet.thumbnails.high.url ||
                                    result.snippet.thumbnails.medium.url ||
                                    result.snippet.thumbnails.default.url
                                }
                                title={result.snippet.title}
                                descrip={result.snippet.description}
                                id={result.id.videoId}
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
    setSearched: PropTypes.func,
    results: PropTypes.array,
    setResults: PropTypes.func,
    setTerm: PropTypes.func
};
