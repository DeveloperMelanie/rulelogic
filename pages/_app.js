import { useEffect } from 'react'
import Tina from '.tina/components/TinaDynamicProvider.js'
import AOS from 'aos'
import 'aos/dist/aos.css'

import Header from 'components/Header'
import Footer from 'components/Footer'
import 'styles/globals.css'

export default function RuleLogic({ Component, pageProps }) {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            delay: 100,
            offset: 50,
        })
    }, [])

    return (
        <Tina>
            <Header />
            <Component {...pageProps} />
            <Footer />
        </Tina>
    )
}
