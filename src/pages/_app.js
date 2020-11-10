/* eslint-disable react/prop-types */
import '../styles/globals.css';
import Header from '../components/Header';
import { useState } from 'react';

function MyApp({ Component, pageProps }) {
    const [searched, setSearched] = useState(false);
    const [results, setResults] = useState([]);
    const [term, setTerm] = useState('');

    return (
        <>
            <Header term={term} />
            <Component
                {...pageProps}
                searched={searched}
                setSearched={setSearched}
                results={results}
                setResults={setResults}
                term={term}
                setTerm={setTerm}
            />
        </>
    );
}

export default MyApp;
