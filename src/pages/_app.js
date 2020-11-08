/* eslint-disable react/prop-types */
import '../styles/globals.css';
import Header from '../components/Header';
import { useState } from 'react';

function MyApp({ Component, pageProps }) {
    const [searched, setSearched] = useState(false);

    return (
        <>
            <Header title={!searched && 'iSearch'} />
            <Component {...pageProps} searched={searched} setSearched={setSearched} />
        </>
    );
}

export default MyApp;
