import Arrow from 'icons/Arrow'
import Link from 'next/link'

export default function Nav() {
    return (
        <>
            <Link href='/' className='flex items-center gap-1 cursor-pointer'>
                Product <Arrow />
            </Link>
            <Link href='/' className='flex items-center gap-1 cursor-pointer'>
                <span>Services</span> <Arrow />
            </Link>
            <Link href='/' className='flex items-center gap-1 cursor-pointer'>
                Industries <Arrow />
            </Link>
            <Link href='/' className='flex items-center gap-1 cursor-pointer'>
                Resources <Arrow />
            </Link>
        </>
    )
}
