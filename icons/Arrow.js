const Arrow = props => (
    <svg
        stroke='currentColor'
        fill='currentColor'
        strokeWidth={0}
        viewBox='0 0 512 512'
        className='group-hover:reverse transition-transform duration-300'
        height='1em'
        width='1em'
        xmlns='http://www.w3.org/2000/svg'
        {...props}
    >
        <path
            fill='none'
            strokeLinecap='square'
            strokeMiterlimit={10}
            strokeWidth={48}
            d='M112 184l144 144 144-144'
        />
    </svg>
)

export default Arrow
