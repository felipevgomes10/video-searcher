import styles from '../styles/Header.module.css';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';
import BackBtn from './BackBtn';

const Header = ({ term }) => {
    const router = useRouter();
    const path = router.pathname === '/video/[id]';

    return (
        <>
            <header className={`${styles.header} ${path ? 'height' : ''}`}>
                {path && <BackBtn />}
                <h3 className={styles.title}>{path ? `Você buscou por: ${term}` : 'iSearch'}</h3>
            </header>
            <style jsx>{`
                .height {
                    height: 30rem;
                    align-items: flex-start;
                }

                .height h3 {
                    margin-top: 3rem;
                    width: 80%;
                    font-weight: 300;
                    font-size: 2.7rem;
                }
            `}</style>
        </>
    );
};

export default Header;

Header.propTypes = {
    title: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
    term: PropTypes.string.isRequired
};
