import Welcome from '../components/Welcome';
import styles from '../styles/Home.module.css';
import Input from '../components/Input';
import CTA from '../components/CTA';
import useForm from '../Hooks/useForm';
import { useRef } from 'react';

const Home = ({ searched, setSearched }) => {
    const { value, error, onChange, onBlur, validate } = useForm();
    const formRef = useRef();

    const changeInput = () => {
        formRef.current.style.transform = 'translateY(-386px)';
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validate()) {
            console.log('ta certo');
            setSearched(true);
            changeInput();
        }
    };

    return (
        <div className={styles.home}>
            <Welcome />
            <form ref={formRef} className={`${styles.form}`} onSubmit={handleSubmit}>
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
        </div>
    );
};

export default Home;
