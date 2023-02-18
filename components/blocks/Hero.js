import { TinaMarkdown } from 'tinacms/dist/rich-text'

export default function Hero({ data }) {
    return (
        <section className='hero relative w-full min-h-[72vh] flex justify-center items-center'>
            <img
                src={data?.firstImage}
                alt=''
                className='w-full max-w-[210px] absolute left-[13%] top-[10%]'
            />
            <div className='app-container space-y-5 text-center z-10'>
                <h1 className='text-[5rem] font-black max-w-[790px] mx-auto leading-snug font-heading'>
                    {data?.title}
                </h1>
                <div className='max-w-[600px] mx-auto text-[1.15rem]'>
                    <TinaMarkdown content={data?.subtitle} />
                </div>
            </div>
            <img
                src={data?.secondImage}
                alt=''
                className='w-full max-w-[210px] absolute right-[13%] bottom-[5%]'
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
            type: 'image',
            label: 'Second image',
            name: 'secondImage',
            required: true,
        },
    ],
}
