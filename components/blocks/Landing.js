import { TinaMarkdown } from 'tinacms/dist/rich-text'

export default function Landing({ data }) {
    return (
        <section className='hero relative w-full min-h-[72vh] flex justify-center items-center'>
            <div className='app-container space-y-5 text-center z-10'>
                <h1 className='text-[3.3rem] sm:text-[4rem] font-black max-w-[890px] mx-auto leading-snug font-heading'>
                    {data?.title}
                </h1>
                <div className='max-w-[830px] mx-auto text-[1.15rem]'>
                    <TinaMarkdown content={data?.subtitle} />
                </div>
            </div>
            <img
                src={data?.images[0]?.img}
                alt=''
                className='w-full max-w-[100px] md:max-w-[150px] absolute top-2 left-[58%] md:left-1/2 md:-translate-x-1/2 xl:left-[20%] md:top-[20%]'
            />
            <img
                src={data?.images[1]?.img}
                alt=''
                className='w-full max-w-[100px] md:max-w-[150px] absolute bottom-[84%] right-[60%] md:right-[6%] md:bottom-0 xl:right-[14%] xl:bottom-[20%]'
            />
            <img
                src={data?.images[2]?.img}
                alt=''
                className='w-full max-w-[100px] hidden md:block md:max-w-[150px] absolute right-[81%] bottom-0 xl:right-[40%] xl:top-[5%]'
            />
        </section>
    )
}

export const landingBlockSchema = {
    name: 'landing',
    label: 'Landing',
    fields: [
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
            list: true,
            label: 'Images',
            name: 'images',
            fields: [
                {
                    type: 'image',
                    label: 'Image',
                    name: 'img',
                    required: true,
                },
            ],
        },
    ],
}
