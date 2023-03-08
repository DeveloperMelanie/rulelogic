import { TinaMarkdown } from 'tinacms/dist/rich-text'

export default function Feature({ data }) {
    return (
        <section className='app-container space-y-24 py-16'>
            <div className='flex flex-col lg:flex-row justify-between gap-x-32 gap-y-16 items-center'>
                <div className='max-w-[730px] prose flex-1 [&>h1]:leading-normal [&>h1]:font-heading [&>*>strong]:font-extrabold [&>*>strong]:bg-yellow-300 [&>*>strong]:rounded-lg'>
                    <TinaMarkdown content={data?.body} />
                </div>
                <div>
                    <img
                        src={data?.image}
                        alt=''
                        className='w-full max-w-[600px]'
                    />
                </div>
            </div>
            {data?.partners && (
                <div className='flex flex-wrap justify-evenly items-center gap-6'>
                    {data?.partners?.map((partner, i) => (
                        <img
                            key={i}
                            src={partner.logo}
                            alt=''
                            className='w-full max-w-[200px]'
                        />
                    ))}
                </div>
            )}
        </section>
    )
}

export const featureBlockSchema = {
    name: 'feature',
    label: 'Feature',
    fields: [
        {
            type: 'rich-text',
            label: 'Body',
            name: 'body',
            required: true,
        },
        {
            type: 'image',
            label: 'Image',
            name: 'image',
            required: true,
        },
        {
            type: 'object',
            list: true,
            label: 'Partners',
            name: 'partners',
            fields: [
                {
                    type: 'image',
                    label: 'Logo',
                    name: 'logo',
                    required: true,
                },
            ],
        },
    ],
}
