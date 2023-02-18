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
                className={`fixed overflow-y-auto lg:hidden z-40 w-full h-screen left-0 top-0 bg-white transition-all duration-300 ${
                    mobileActive ? 'visible opacity-100' : 'invisible opacity-0'
                }`}
            >
                <div className='flex pb-14 flex-col justify-start pt-24 items-start text-2xl font-bold uppercase text-center'>
                    <Nav />
                    <div className='fixed left-0 bottom-0 w-full px-8 py-3 bg-primary space-x-2 flex items-center text-base text-white'>
                        <a
                            href='https://dashboard.rulelogic.io/account/sign-up'
                            className='py-[0.46rem] px-4 border-2 border-white hover:scaled transition-all rounded-full font-bold'
                        >
                            Register
                        </a>
                        <a
                            href='https://dashboard.rulelogic.io/account/sign-in'
                            className='py-[0.55rem] px-7 bg-white text-black hover:scaled transition-all rounded-full font-bold'
                        >
                            Login
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}
