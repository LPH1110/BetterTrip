import { useState } from 'react';
import images from '~/assets/images';

const Image = (src, alt, ...props) => {
    const [fallback, setFallback] = useState('');

    const handleOnError = () => {
        setFallback(images.logo);
    };

    return <img src={fallback || src} alt={alt} onError={handleOnError} {...props} />;
};

export default Image;
