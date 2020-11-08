import Image from 'next/image';
import PropTypes from 'prop-types';

const Button = ({ className }) => {
    return (
        <button className={className}>
            <Image src="/search.svg" height={20} width={20} />
        </button>
    );
};

export default Button;

Button.propTypes = {
    className: PropTypes.string
};
