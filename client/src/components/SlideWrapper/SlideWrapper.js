import Slider from 'react-slick';

function SlideWrapper({ children, setting = {} }) {
    return <Slider {...setting}>{children}</Slider>;
}

export default SlideWrapper;
