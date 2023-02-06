import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Nav from './Nav'

export default function MobileNav() {
    const router = useRouter()
    const [mobileActive, setMobileActive] = useState(false)

    useEffect(() => {
        if (mobileActive) return document.body.classList.add('overflow-hidden')
        document.body.classList.remove('overflow-hidden')
    }, [mobileActive])

    useEffect(() => {
        router.events.on('routeChangeComplete', () => setMobileActive(false))
    }, [router.events])

    return (
        <>
            <button
                type='button'
                className={`lg:hidden menu z-50 ${mobileActive ? 'open' : ''}`}
                onClick={() => setMobileActive(!mobileActive)}
            >
                <div />
                <div />
                <div />
            </button>
            <div
                className={`fixed lg:hidden z-40 w-full h-screen left-0 top-0 bg-white transition-all duration-300 ${
                    mobileActive ? 'visible opacity-100' : 'invisible opacity-0'
                }`}
            >
                <div className='flex h-full flex-col justify-center items-center gap-8 text-2xl font-bold uppercase text-center'>
                    <Nav />
                    <div className='space-x-4'>
                        <a
                            href='https://dashboard.rulelogic.io/account/sign-up'
                            className='py-[0.55rem] px-4 border-2 border-gray-400 border-opacity-60 rounded-full font-bold'
                        >
                            Register
                        </a>
                        <a
                            href='https://dashboard.rulelogic.io/account/sign-in'
                            className='py-[0.55rem] px-7 bg-primary hover:bg-opacity-80 text-white border border-primary hover:border-opacity-80 border-opacity-60 transition-colors duration-300 rounded-full font-bold'
                        >
                            Login
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}
