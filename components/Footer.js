import Link from 'next/link'
import Facebook from 'icons/Facebook'
import Twitter from 'icons/Twitter'
import LinkedIn from 'icons/LinkedIn'
import Instagram from 'icons/Instagram'

export default function Footer() {
    const actualYear = new Date().getFullYear()

    return (
        <footer className='app-container py-12'>
            <div className='flex flex-col md:flex-row gap-8 justify-between items-center mb-10'>
                <img
                    src='/assets/logo.png'
                    alt=''
                    className='w-full max-w-[250px]'
                />
                <div className='flex items-center gap-4'>
                    <a
                        href=''
                        target='_blank'
                        rel='noreferrer'
                        className='block p-2 rounded-full border-gray-300 border'
                    >
                        <Facebook width={26} height={26} />
                    </a>
                    <a
                        href=''
                        target='_blank'
                        rel='noreferrer'
                        className='block p-2 rounded-full border-gray-300 border'
                    >
                        <Twitter width={26} height={26} />
                    </a>
                    <a
                        href=''
                        target='_blank'
                        rel='noreferrer'
                        className='block p-2 rounded-full border-gray-300 border'
                    >
                        <LinkedIn width={26} height={26} />
                    </a>
                    <a
                        href=''
                        target='_blank'
                        rel='noreferrer'
                        className='block p-2 rounded-full border-gray-300 border'
                    >
                        <Instagram width={26} height={26} />
                    </a>
                </div>
            </div>
            <div className='flex flex-col md:flex-row justify-between items-center gap-6'>
                <div>
                    <span className='font-bold'>Stay in the loop</span>
                    <p>
                        Subscribe to receive biweekly tips on creative
                        automation and digital advertising!
                    </p>
                </div>
                <form className='flex flex-nowrap'>
                    <input
                        type='text'
                        required
                        placeholder='Email'
                        className='w-full md:w-auto py-[0.6rem] pl-7 md:pr-14 border border-r-0 rounded-full rounded-r-none outline-none focus:border-primary'
                    />
                    <button
                        type='submit'
                        className='flex-1 w-full md:w-auto p-[0.6rem] px-12 border border-l-0 border-primary rounded-full rounded-l-none uppercase bg-primary text-white'
                    >
                        Suscribe
                    </button>
                </form>
            </div>
            <hr className='my-14' />
            <div className='flex flex-wrap gap-16 mb-8'>
                <div>
                    <h4 className='font-bold mb-3'>Partners</h4>
                    <div className='flex flex-col gap-1'>
                        <Link href='/'>Facebook</Link>
                        <Link href='/'>Snapchat</Link>
                        <Link href='/'>Pinterest</Link>
                        <Link href='/'>Technology Partnerships</Link>
                        <Link href='/'>Viralspace</Link>
                        <Link href='/'>Ad-Lib.io</Link>
                    </div>
                </div>
                <div>
                    <h4 className='font-bold mb-3'>Resources</h4>
                    <div className='flex flex-col gap-1'>
                        <Link href='/'>Facebook</Link>
                        <Link href='/'>Snapchat</Link>
                        <Link href='/'>Pinterest</Link>
                        <Link href='/'>Technology Partnerships</Link>
                        <Link href='/'>Viralspace</Link>
                        <Link href='/'>Ad-Lib.io</Link>
                    </div>
                </div>
                <div>
                    <h4 className='font-bold mb-3'>About us</h4>
                    <div className='flex flex-col gap-1'>
                        <Link href='/'>Facebook</Link>
                        <Link href='/'>Snapchat</Link>
                        <Link href='/'>Pinterest</Link>
                        <Link href='/'>Technology Partnerships</Link>
                        <Link href='/'>Viralspace</Link>
                        <Link href='/'>Ad-Lib.io</Link>
                    </div>
                </div>
            </div>
            <p>Copyright © {actualYear} RuleLogic.io. All rights reserved.</p>
        </footer>
    )
}
