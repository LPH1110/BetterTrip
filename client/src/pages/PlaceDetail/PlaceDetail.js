import { useParams } from 'react-router-dom';

function PlaceDetail() {
    const { slug } = useParams();

    return <div>PlaceDetail: {slug}</div>;
}

export default PlaceDetail;
