import Link from 'next/link'
import { TinaMarkdown } from 'tinacms/dist/rich-text'
import { getLink } from 'utils'

export default function Hero({ data }) {
    return (
        <section className='hero relative w-full min-h-[65vh] flex justify-center items-center shadow-md overflow-hidden'>
            <img
                src={data?.firstImage}
                alt=''
                className='w-full max-w-[30%] absolute left-0 top-0'
            />
            <div className='app-container text-center z-10 pb-6'>
                <h1 className='text-[3.5rem] sm:text-[4.5rem] font-black max-w-[990px] mx-auto leading-snug font-heading mb-5'>
                    {data?.title}
                </h1>
                <div className='max-w-[700px] mx-auto text-[1.15rem] mb-10'>
                    <TinaMarkdown content={data?.subtitle} />
                </div>
                <Link
                    href={getLink(data?.cta?.url?.id)}
                    className='py-4 block w-fit mx-auto text-xl px-10 bg-primary hover:bg-opacity-90 text-white border border-primary border-opacity-60 hover:border-opacity-90 hover:scaled transition-all rounded-full font-bold'
                >
                    {data?.cta?.label}
                </Link>
            </div>
            <img
                src={data?.secondImage}
                alt=''
                className='w-full max-w-[30%] absolute right-0 bottom-0'
            />
        </section>
    )
}

export const heroBlockSchema = {
    name: 'hero',
    label: 'Hero',
    fields: [
        {
            type: 'image',
            label: 'First image',
            name: 'firstImage',
            required: true,
        },
        {
            type: 'string',
            label: 'Title',
            name: 'title',
            required: true,
        },
        {
            type: 'rich-text',
            label: 'Subtitle',
            name: 'subtitle',
            required: true,
        },
        {
            type: 'object',
            label: 'CTA',
            name: 'cta',
            fields: [
                {
                    type: 'reference',
                    collections: ['page'],
                    label: 'Target page',
                    name: 'url',
                    required: true,
                },
                {
                    type: 'string',
                    label: 'Label',
                    name: 'label',
                    required: true,
                },
            ],
        },
        {
            type: 'image',
            label: 'Second image',
            name: 'secondImage',
            required: true,
        },
    ],
}
