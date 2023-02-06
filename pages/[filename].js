import { useTina } from 'tinacms/dist/edit-state'
import { client } from '.tina/__generated__/client'

import SEO from 'components/SEO'
import Blocks from 'components/BlocksRenderer'

export default function Page(props) {
    const { data } = useTina({
        query: props.query,
        variables: props.variables,
        data: props.data,
    })

    return (
        <>
            <SEO
                title={data?.page?.title}
                description={data?.page?.description}
            />
            <Blocks {...data.page} />
        </>
    )
}

export const getStaticProps = async ({ params }) => {
    const tinaProps = await client.queries.page({
        relativePath: `${params.filename}.md`,
    })

    return {
        props: {
            data: tinaProps.data,
            query: tinaProps.query,
            variables: tinaProps.variables,
        },
    }
}

export const getStaticPaths = async () => {
    const pagesListData = await client.queries.pageConnection()

    return {
        paths: pagesListData.data.pageConnection.edges.map(page => ({
            params: {
                filename: page.node._sys.filename,
            },
        })),
        fallback: false,
    }
}
