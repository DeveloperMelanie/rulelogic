const getLink = path => {
    const formattedPath = path
        .replace(/^content\/pages/, '')
        .replace(/\.md$/, '')
    const link = formattedPath === '/home' ? '/' : `/${formattedPath}`
    return link
}

export { getLink }
