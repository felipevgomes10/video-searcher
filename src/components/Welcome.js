import Image from 'next/image';
import styles from '../styles/Welcome.module.css';
import PropTypes from 'prop-types';

const Welcome = ({ style }) => {
    return (
        <div className={styles.welcome} style={style}>
            <Image
                src="/glass-3.svg"
                alt="glass-3"
                height={200}
                width={200}
                layout="intrinsic"
                quality={30}
                loading="eager"
            />
            <Image
                src="/glass-4.svg"
                alt="glass-4"
                height={200}
                width={200}
                layout="intrinsic"
                quality={30}
                loading="eager"
            />
        </div>
    );
};

export default Welcome;

Welcome.propTypes = {
    style: PropTypes.object
};
