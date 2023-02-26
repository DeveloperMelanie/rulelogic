import Link from 'next/link'
import MobileNav from './MobileNav'
import Nav from './Nav'

export default function Header() {
    return (
        <header className='w-full flex text-[1.04rem] shadow-md font-heading h-[86px]'>
            <div className='app-container px-8 flex justify-between items-center'>
                <div className='flex h-full gap-12'>
                    <Link href='/' className='flex gap-3 items-center z-50'>
                        <img
                            src='/assets/logo.png'
                            alt='RuleLogic'
                            className='w-full max-w-[80px]'
                        />
                    </Link>
                    <nav className='space-x-6 hidden lg:flex items-center'>
                        <Nav />
                    </nav>
                </div>
                <div className='hidden lg:flex gap-4 items-center'>
                    <a
                        href='https://dashboard.rulelogic.io/account/sign-in'
                        className='py-[0.55rem] px-4 border-2 border-gray-400 border-opacity-60 rounded-full font-bold block hover:scaled hover:border-neutral-800 transition-all'
                    >
                        Log In
                    </a>
                    <Link
                        href='/thanksForRegistering'
                        className='py-[0.46rem] block px-7 bg-primary hover:bg-opacity-90 text-white border border-primary border-opacity-60 hover:border-opacity-90 hover:scaled transition-all rounded-full font-bold'
                    >
                        Register
                    </Link>
                </div>
                <MobileNav />
            </div>
        </header>
    )
}
