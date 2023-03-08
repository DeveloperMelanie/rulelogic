import { useState } from 'react'
import Arrow from 'icons/Arrow'
import Link from 'next/link'
import navData from 'content/global/global.json'
import { getLink } from 'utils'

export default function Nav() {
    const [activeLink, setActiveLink] = useState(null)
    const data = navData.header.navItem

    return (
        <>
            {data.map((navItem, i) => (
                <span
                    key={i}
                    className='group/item lg:h-full lg:flex w-full lg:w-auto border-b-2 lg:border-b-0 cursor-pointer lg:cursor-auto'
                    onClick={() =>
                        activeLink === i
                            ? setActiveLink(null)
                            : setActiveLink(i)
                    }
                >
                    <Link
                        href={getLink(navItem?.target)}
                        className='flex items-center gap-1 cursor-pointer group-hover/item:text-legiblePrimary transition-all w-fit pl-10 lg:pl-0 py-5 lg:py-0'
                        onClick={e =>
                            activeLink !== i &&
                            window.innerWidth <= 1023 &&
                            e.preventDefault()
                        }
                    >
                        {navItem?.name} {navItem?.menu && <Arrow />}
                    </Link>
                    {navItem?.menu && (
                        <div
                            role='menu'
                            className={`lg:fixed w-full z-20 top-[86px] left-0 bg-white lg:py-12 lg:border-b border-[#d8d8d8] lg:shadow-intense second-shadow transition-all duration-300 ${
                                activeLink === i && window.innerWidth <= 1023
                                    ? 'show h-auto'
                                    : 'hide h-0 lg:h-auto'
                            } lg:group-hover/item:show font-normal normal-case text-base overflow-hidden lg:overflow-visible`}
                        >
                            <div className='app-container xl-break px-8 lg:flex justify-between items-start text-left'>
                                <div>
                                    {navItem?.menu?.globalTitle && (
                                        <span className='block text-legiblePrimary font-medium text-lg mb-6'>
                                            {navItem.menu.globalTitle}
                                        </span>
                                    )}
                                    <div className='space-y-6 lg:space-y-0 lg:flex items-start gap-6 xl:gap-12'>
                                        {navItem.menu.item.map((item, i) => (
                                            <div
                                                key={i}
                                                className='lg:max-w-[272px]'
                                            >
                                                {item?.title && (
                                                    <span className='block text-legiblePrimary font-medium text-lg mb-6'>
                                                        {item.title}
                                                    </span>
                                                )}
                                                {item?.link?.map((link, i) => (
                                                    <Link
                                                        key={i}
                                                        href={link?.url}
                                                        className='block mb-4 last-of-type:mb-0'
                                                    >
                                                        <div
                                                            className={`flex ${
                                                                link?.body
                                                                    ? 'items-start gap-3'
                                                                    : 'items-center gap-4'
                                                            } group/group`}
                                                        >
                                                            <div className='mt-1'>
                                                                <img
                                                                    src={
                                                                        link?.image
                                                                    }
                                                                    alt=''
                                                                    className='w-full max-w-[30px]'
                                                                />
                                                            </div>
                                                            <div className='text-neutral-400 flex-1 group-hover/group:text-legiblePrimary group-hover/group:text-opacity-60 transition-all'>
                                                                <span
                                                                    className={`block text-lg font-medium text-black group-hover/group:text-legiblePrimary ${
                                                                        link?.body
                                                                            ? 'mb-1'
                                                                            : 'mb-0'
                                                                    } transition-all`}
                                                                >
                                                                    {
                                                                        link?.title
                                                                    }
                                                                </span>
                                                                {link?.body && (
                                                                    <p className='whitespace-pre-line'>
                                                                        {
                                                                            link?.body
                                                                        }
                                                                    </p>
                                                                )}
                                                            </div>
                                                        </div>
                                                    </Link>
                                                ))}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <Link
                                    href={navItem?.notice?.url}
                                    className='block w-full lg:max-w-[220px] xl:max-w-[380px] border-2 hover:border-neutral-900 transition-all group/notice my-14 lg:my-0'
                                >
                                    <img
                                        src={navItem?.notice?.image}
                                        alt=''
                                        className='w-full'
                                    />
                                    <div className='p-3'>
                                        <strong className='block mb-1'>
                                            {navItem?.notice?.title}
                                        </strong>
                                        <p className='whitespace-pre-line'>
                                            {navItem?.notice?.body}
                                        </p>
                                        <span className='mt-3 block w-fit px-4 py-1 border-2 rounded-full font-bold group-hover/notice:border-neutral-900 group-hover/notice:bg-neutral-900 group-hover/notice:text-white transition-all'>
                                            Learn more
                                        </span>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    )}
                </span>
            ))}
        </>
    )
}
