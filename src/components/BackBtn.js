import Arrow from '../../public/arrow.svg';
import styles from '../styles/BackBtn.module.css';
import { useRouter } from 'next/router';

const BackBtn = () => {
    const router = useRouter();

    return (
        <button className={styles.btn} onClick={() => router.back()}>
            <Arrow />
        </button>
    );
};

export default BackBtn;
