import { defineSchema, defineConfig, RouteMappingPlugin } from 'tinacms'
import { client } from './__generated__/client'

import { heroBlockSchema } from 'components/blocks/Hero'
import { landingBlockSchema } from 'components/blocks/Landing'
import { featureBlockSchema } from 'components/blocks/Feature'
import { featuredSectionBlockSchema } from 'components/blocks/FeaturedSection'
import { featuredListBlockSchema } from 'components/blocks/FeaturedList'

const branch = 'main'
const schema = defineSchema({
    config: {
        token: process.env.CMS_TOKEN,
        clientId: process.env.CLIENTID,
        branch,
        media: {
            loadCustomStore: async () => {
                const pack = await import('next-tinacms-cloudinary')
                return pack.TinaCloudCloudinaryMediaStore
            },
        },
    },
    collections: [
        {
            label: 'Global',
            name: 'global',
            path: 'content/global',
            format: 'json',
            ui: {
                global: true,
            },
            fields: [
                {
                    type: 'object',
                    label: 'Header',
                    name: 'header',
                    fields: [
                        {
                            type: 'object',
                            list: true,
                            label: 'Nav Item',
                            name: 'navItem',
                            fields: [
                                {
                                    type: 'reference',
                                    collections: ['page'],
                                    label: 'Target page',
                                    name: 'target',
                                    required: true,
                                },
                                {
                                    type: 'string',
                                    label: 'Name',
                                    name: 'name',
                                    required: true,
                                },
                                {
                                    type: 'object',
                                    label: 'Menu',
                                    name: 'menu',
                                    fields: [
                                        {
                                            type: 'string',
                                            label: 'Global title',
                                            name: 'globalTitle',
                                        },
                                        {
                                            type: 'object',
                                            list: true,
                                            label: 'Item',
                                            name: 'item',
                                            fields: [
                                                {
                                                    type: 'string',
                                                    label: 'Title',
                                                    name: 'title',
                                                },
                                                {
                                                    type: 'object',
                                                    list: true,
                                                    label: 'Link',
                                                    name: 'link',
                                                    fields: [
                                                        {
                                                            type: 'string',
                                                            label: 'URL',
                                                            name: 'url',
                                                            required: true,
                                                        },
                                                        {
                                                            type: 'image',
                                                            label: 'Image',
                                                            name: 'image',
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
                                                        },
                                                    ],
                                                },
                                            ],
                                        },
                                    ],
                                },
                                {
                                    type: 'object',
                                    label: 'Notice',
                                    name: 'notice',
                                    fields: [
                                        {
                                            type: 'image',
                                            label: 'Image',
                                            name: 'image',
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
                                        {
                                            type: 'string',
                                            label: 'URL',
                                            name: 'url',
                                            required: true,
                                        },
                                    ],
                                },
                            ],
                        },
                    ],
                },
            ],
        },
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
                        landingBlockSchema,
                        featureBlockSchema,
                        featuredSectionBlockSchema,
                        featuredListBlockSchema,
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
            if (['global'].includes(collection.name)) {
                return null
            }
            return `/${collection.name}/${document._sys.filename}`
        })
        cms.plugins.add(RouteMapping)
        return cms
    },
})
