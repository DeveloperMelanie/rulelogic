import Hero from './blocks/Hero'
import Landing from './blocks/Landing'
import Feature from './blocks/Feature'
import FeaturedSection from './blocks/FeaturedSection'
import FeaturedList from './blocks/FeaturedList'

const SECTIONS = {
    PageBlocksHero: (block, i) => (
        <Hero data={block} key={i + block.__typename} />
    ),
    PageBlocksLanding: (block, i) => (
        <Landing data={block} key={i + block.__typename} />
    ),
    PageBlocksFeature: (block, i) => (
        <Feature data={block} key={i + block.__typename} />
    ),
    PageBlocksFeaturedSection: (block, i) => (
        <FeaturedSection data={block} key={i + block.__typename} />
    ),
    PageBlocksFeaturedList: (block, i) => (
        <FeaturedList data={block} key={i + block.__typename} />
    ),
}

export default function BlocksRenderer(props) {
    return props?.blocks?.map((block, i) => {
        const sectionToRender = SECTIONS[block.__typename]
        return sectionToRender ? sectionToRender(block, i) : null
    })
}
