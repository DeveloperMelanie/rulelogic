export default function Heading({ children }) {
    return (
        <section className='py-12 mb-14 px-4 bg-primary bg-opacity-10 text-center'>
            <div className='body-container'>
                <h1 className='text-5xl sm:text-6xl font-bold'>{children}</h1>
            </div>
        </section>
    )
}
