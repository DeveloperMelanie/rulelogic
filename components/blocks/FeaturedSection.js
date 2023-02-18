import { TinaMarkdown } from 'tinacms/dist/rich-text'

export default function FeaturedSection({ data }) {
    return (
        <section className='text-white py-24'>
            <div className='app-container'>
                <h2 className='text-[3.2rem] sm:text-[3.4rem] font-heading font-extrabold max-w-[1200px] mb-28'>
                    {data?.heading}
                </h2>
                <div className='space-y-32'>
                    {data?.cards?.map((card, i) => (
                        <div
                            key={i}
                            className={`flex flex-wrap gap-x-24 gap-y-12 justify-between items-center ${
                                i % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                            }`}
                        >
                            <div className='flex-1'>
                                <h2 className='text-5xl font-extrabold max-w-[500px] font-heading leading-tight mb-6'>
                                    {card.title}
                                </h2>
                                <div className='prose [&>p>a]:text-yellow-300'>
                                    <TinaMarkdown content={card.content} />
                                </div>
                            </div>
                            <div>
                                <img
                                    src={card?.image}
                                    alt=''
                                    className='w-full max-w-[640px]'
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <style jsx>{`
                section {
                    background: ${data?.color};
                }
            `}</style>
        </section>
    )
}

export const featuredSectionBlockSchema = {
    name: 'featuredSection',
    label: 'Featured Section',
    fields: [
        {
            type: 'string',
            label: 'Color',
            name: 'color',
            required: true,
        },
        {
            type: 'string',
            label: 'Title',
            name: 'heading',
            ui: {
                component: 'textarea',
            },
            required: true,
        },
        {
            type: 'object',
            list: true,
            label: 'Cards',
            name: 'cards',
            fields: [
                {
                    type: 'string',
                    label: 'Title',
                    name: 'title',
                    required: true,
                },
                {
                    type: 'rich-text',
                    label: 'Content',
                    name: 'content',
                    required: true,
                },
                {
                    type: 'image',
                    label: 'Image',
                    name: 'image',
                    required: true,
                },
            ],
        },
    ],
}
