import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
    return (
        <Html lang='en'>
            <Head>
                <link
                    href='https://fonts.googleapis.com/css2?family=Lato:wght@400;700;900&display=swap'
                    rel='stylesheet'
                />
                <link
                    href='https://fonts.googleapis.com/css2?family=Quicksand:wght@400;500;700&display=swap'
                    rel='stylesheet'
                />
                <script
                    async
                    src='https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7985225573205964'
                    crossOrigin='anonymous'
                />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}
