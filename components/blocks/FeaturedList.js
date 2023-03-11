import React from 'react'
import { TinaMarkdown } from 'tinacms/dist/rich-text'

export default function FeaturedList({ data }) {
    return (
        <div className='bg-gray-50 py-24 border-b'>
            <div className='app-container flex flex-wrap md:flex-nowrap justify-center md:justify-between gap-x-8 gap-y-12'>
                {data?.features?.map((feature, i) => (
                    <div key={i} className='text-center max-w-[230px]'>
                        <div className='bg-white shadow-xl p-2 rounded-full w-fit mx-auto mb-3'>
                            <img
                                src={feature.logo}
                                alt=''
                                className='w-full max-w-[40px]'
                            />
                        </div>
                        <h3 className='text-2xl font-bold'>{feature.title}</h3>
                        <TinaMarkdown content={feature.body} />
                    </div>
                ))}
            </div>
        </div>
    )
}

export const featuredListBlockSchema = {
    name: 'featuredList',
    label: 'Featured List',
    fields: [
        {
            type: 'object',
            list: true,
            label: 'Features',
            name: 'features',
            fields: [
                {
                    type: 'image',
                    label: 'Logo',
                    name: 'logo',
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
                    label: 'Body',
                    name: 'body',
                    required: true,
                },
            ],
        },
    ],
}
