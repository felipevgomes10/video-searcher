import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
    render() {
        return (
            <Html lang="pt-BR">
                <Head>
                    <link rel="shortcut icon" href="/vercel.svg" type="image/svg" />
                    <link
                        href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500&display=swap"
                        rel="stylesheet"
                    />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;
