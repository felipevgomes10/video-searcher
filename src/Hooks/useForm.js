import { useState } from 'react';

const useForm = () => {
    const [value, setValue] = useState('');
    const [error, setError] = useState(null);

    const validate = (value) => {
        if (value.length === 0) {
            setError('Preencha o campo');
            return false;
        } else {
            setError(null);
            return true;
        }
    };

    const onChange = ({ target }) => {
        if (error) validate(target.value);
        setValue(target.value);
    };

    return {
        value,
        setValue,
        error,
        validate: () => validate(value),
        onBlur: () => validate(value),
        onChange
    };
};

export default useForm;
