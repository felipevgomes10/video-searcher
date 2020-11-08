import PropTypes from 'prop-types';
import styles from '../styles/Input.module.css';
import Button from '../components/Button';

const Input = ({ label, id, type, value, onChange, onBlur, error, searched }) => {
    return (
        <div className={`${styles.wrapper} ${searched ? styles.wrapperTop : ''}`}>
            {!searched && (
                <label className={styles.label} htmlFor={id}>
                    {label}
                </label>
            )}
            <div className={styles.inputBtn}>
                <input
                    className={`${styles.input} ${searched && styles.colapsed}`}
                    type={type}
                    name={id}
                    id={id}
                    value={value}
                    onChange={onChange}
                    onBlur={onBlur}
                    placeholder={searched ? 'Pesquisar' : ''}
                />
                {searched && <Button className={styles.btn} />}
            </div>
            {error && <span className={styles.error}>{error}</span>}
        </div>
    );
};

export default Input;

Input.propTypes = {
    label: PropTypes.string,
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    type: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.func,
    onBlur: PropTypes.func,
    error: PropTypes.string,
    searched: PropTypes.bool
};
