import Image from 'next/image';
import PropTypes from 'prop-types';

const Button = ({ className }) => {
    return (
        <button className={className}>
            <Image src="/search.svg" height={30} width={30} />
        </button>
    );
};

export default Button;

Button.propTypes = {
    className: PropTypes.string
};
