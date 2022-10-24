import { useState } from 'react';
import images from '~/assets/images';

function Image({ src, className, alt = '', ...props }) {
    const [fallback, setFallback] = useState('');

    const handleOnError = () => {
        setFallback(images.logo);
    };

    return <img className={className} src={fallback || src} alt={alt} onError={handleOnError} {...props} />;
}

export default Image;
