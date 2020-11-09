import { useCallback, useEffect } from 'react';

const useDebounce = (effect, deps, delay = 1000) => {
    const callback = useCallback(effect, deps);

    useEffect(() => {
        const timeout = setTimeout(callback, delay);
        return () => clearTimeout(timeout);
    }, [callback, delay]);
};

export default useDebounce;
