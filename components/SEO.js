import Head from 'next/head'

export default function SEO({ title, description }) {
    return (
        <Head>
            <title>{title ? `${title} | Rule Logic` : 'Rule Logic'}</title>
            <meta name='description' content={description} />
            <link
                rel='apple-touch-icon'
                sizes='180x180'
                href='/apple-touch-icon.png'
            />
            <link
                rel='icon'
                type='image/png'
                sizes='32x32'
                href='/favicon-32x32.png'
            />
            <link
                rel='icon'
                type='image/png'
                sizes='16x16'
                href='/favicon-16x16.png'
            />
            <link rel='manifest' href='/site.webmanifest' />
            <link
                rel='mask-icon'
                href='/safari-pinned-tab.svg'
                color='#0da799'
            />
            <meta name='msapplication-TileColor' content='#00aba9' />
            <meta name='theme-color' content='#0da799' />
        </Head>
    )
}