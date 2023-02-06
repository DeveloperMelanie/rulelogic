import { defineSchema, defineConfig, RouteMappingPlugin } from 'tinacms'
import { client } from './__generated__/client'

import { heroBlockSchema } from 'components/blocks/Hero'
import { featureBlockSchema } from 'components/blocks/Feature'
import { featuredSectionBlockSchema } from 'components/blocks/FeaturedSection'

const branch = 'main'
const schema = defineSchema({
    config: {
        token: process.env.CMS_TOKEN,
        clientId: process.env.CLIENTID,
        branch,
        media: {
            tina: {
                publicFolder: 'public',
                mediaRoot: 'uploads',
            },
            // loadCustomStore: async () => {
            //     const pack = await import('next-tinacms-cloudinary')
            //     return pack.TinaCloudCloudinaryMediaStore
            // },
        },
    },
    collections: [
        {
            label: 'Pages',
            name: 'page',
            path: 'content/pages',
            format: 'md',
            fields: [
                {
                    type: 'string',
                    name: 'title',
                    label: 'Page title',
                },
                {
                    type: 'string',
                    name: 'description',
                    label: 'Page description',
                    ui: {
                        component: 'textarea',
                    },
                    required: true,
                },
                {
                    type: 'object',
                    list: true,
                    name: 'blocks',
                    label: 'Sections',
                    templates: [
                        heroBlockSchema,
                        featureBlockSchema,
                        featuredSectionBlockSchema,
                    ],
                },
            ],
        },
    ],
})

export default schema

export const tinaConfig = defineConfig({
    client,
    schema,
    cmsCallback: cms => {
        const RouteMapping = new RouteMappingPlugin((collection, document) => {
            if (['page'].includes(collection.name)) {
                if (document._sys.filename === 'home') {
                    return `/`
                }
                return `/${document._sys.filename}`
            }
            return `/${collection.name}/${document._sys.filename}`
        })
        cms.plugins.add(RouteMapping)
        return cms
    },
})
