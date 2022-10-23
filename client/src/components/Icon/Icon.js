function Icon({ className, width, height, viewBox, children, fill = 'currentColor' }) {
    return (
        <svg
            className={className}
            width={width}
            height={height}
            viewBox={viewBox}
            fill={fill}
            xmlns="http://www.w3.org/2000/svg"
        >
            {children}
        </svg>
    );
}

export default Icon;
