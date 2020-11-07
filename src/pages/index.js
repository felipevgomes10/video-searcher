import Welcome from '../components/Welcome';
import styles from '../styles/Home.module.css';
import Header from '../components/Header';
import Input from '../components/Input';
import CTA from '../components/CTA';
import useForm from '../Hooks/useForm';
import { useRef, useState } from 'react';
import Button from '../components/Button';

const Home = () => {
    const { value, error, onChange, onBlur, validate } = useForm();
    const [searched, setSearched] = useState(false);
    const formRef = useRef();

    const changeInput = () => {
        formRef.current.style.transform = 'translateY(-297px)';
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
            <Header title={!searched && 'iSearch'} />
            <Welcome style={searched ? { opacity: 0, pointerEvents: 'none' } : {}} />
            <form ref={formRef} className={`${styles.form} ${styles.top}`} onSubmit={handleSubmit}>
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
                {searched ? <Button className={styles.btn} /> : <CTA>Buscar</CTA>}
            </form>
        </div>
    );
};

export default Home;
