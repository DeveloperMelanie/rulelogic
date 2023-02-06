import Link from 'next/link'
import MobileNav from './MobileNav'
import Nav from './Nav'

export default function Header() {
    return (
        <header className='w-full py-3 text-[1.04rem] shadow-md'>
            <div className='container px-8 flex justify-between items-center'>
                <div className='flex items-center gap-12'>
                    <Link href='/' className='flex gap-3 items-center'>
                        <img
                            src='/assets/logo.png'
                            alt='Rule Logic'
                            className='w-full max-w-[80px]'
                        />
                    </Link>
                    <nav className='space-x-6 hidden lg:flex'>
                        <Nav />
                    </nav>
                </div>
                <div className='space-x-4 hidden lg:block'>
                    <a
                        href='https://dashboard.rulelogic.io/account/sign-up'
                        className='py-[0.55rem] px-4 border-2 border-gray-400 border-opacity-60 rounded-full font-bold'
                    >
                        Log In
                    </a>
                    <a
                        href='https://dashboard.rulelogic.io/account/sign-in'
                        className='py-[0.55rem] px-7 bg-primary hover:bg-opacity-80 text-white border border-primary hover:border-opacity-80 border-opacity-60 transition-colors duration-300 rounded-full font-bold'
                    >
                        Register
                    </a>
                </div>
                <MobileNav />
            </div>
        </header>
    )
}
