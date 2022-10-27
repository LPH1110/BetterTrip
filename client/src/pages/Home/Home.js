import { solid, regular } from '@fortawesome/fontawesome-svg-core/import.macro';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Image } from '~/components';

const slides = [
    {
        id: 0,
        thumbnail:
            'https://images.unsplash.com/photo-1508739773434-c26b3d09e071?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8d2FsbHBhcGVyJTIwZGVza3RvcHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
        title: 'Stay Positive',
        description: 'Lo rem isum trave lis the nbest asdlashda dwaaa columbia',
    },
    {
        id: 1,
        thumbnail:
            'https://images.unsplash.com/photo-1529528744093-6f8abeee511d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8d2FsbHBhcGVyJTIwZGVza3RvcHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
        title: 'Stay Positive',
        description: 'Lo rem isum trave lis the nbest asdlashda dwaaa columbia',
    },
    {
        id: 2,
        thumbnail:
            'https://images.unsplash.com/photo-1477346611705-65d1883cee1e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8d2FsbHBhcGVyJTIwZGVza3RvcHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
        title: 'Stay Positive',
        description: 'Lo rem isum trave lis the nbest asdlashda dwaaa columbia',
    },
];

const places = [
    {
        id: 0,
        name: 'Bangkok, Thailand',
        thumbnail: 'https://a0.muscache.com/im/pictures/a4ffcb97-e84c-4e6e-bf73-14e09e2dc6d6.jpg?im_w=720',
        rated: 4.2,
        distance: '986 kilometers away',
        spent: 79,
    },
    {
        id: 1,
        name: 'Bangkok, Thailand',
        thumbnail: 'https://a0.muscache.com/im/pictures/a4ffcb97-e84c-4e6e-bf73-14e09e2dc6d6.jpg?im_w=720',
        rated: 4.2,
        distance: '986 kilometers away',
        spent: 79,
    },
    {
        id: 2,
        name: 'Bangkok, Thailand',
        thumbnail: 'https://a0.muscache.com/im/pictures/a4ffcb97-e84c-4e6e-bf73-14e09e2dc6d6.jpg?im_w=720',
        rated: 4.2,
        distance: '986 kilometers away',
        spent: 79,
    },
    {
        id: 3,
        name: 'Bangkok, Thailand',
        thumbnail: 'https://a0.muscache.com/im/pictures/a4ffcb97-e84c-4e6e-bf73-14e09e2dc6d6.jpg?im_w=720',
        rated: 4.2,
        distance: '986 kilometers away',
        spent: 79,
    },
    {
        id: 4,
        name: 'Bangkok, Thailand',
        thumbnail: 'https://a0.muscache.com/im/pictures/a4ffcb97-e84c-4e6e-bf73-14e09e2dc6d6.jpg?im_w=720',
        rated: 4.2,
        distance: '986 kilometers away',
        spent: 79,
    },
    {
        id: 5,
        name: 'Bangkok, Thailand',
        thumbnail: 'https://a0.muscache.com/im/pictures/a4ffcb97-e84c-4e6e-bf73-14e09e2dc6d6.jpg?im_w=720',
        rated: 4.2,
        distance: '986 kilometers away',
        spent: 79,
    },
    {
        id: 6,
        name: 'Bangkok, Thailand',
        thumbnail: 'https://a0.muscache.com/im/pictures/a4ffcb97-e84c-4e6e-bf73-14e09e2dc6d6.jpg?im_w=720',
        rated: 4.2,
        distance: '986 kilometers away',
        spent: 79,
    },
    {
        id: 7,
        name: 'Bangkok, Thailand',
        thumbnail: 'https://a0.muscache.com/im/pictures/a4ffcb97-e84c-4e6e-bf73-14e09e2dc6d6.jpg?im_w=720',
        rated: 4.2,
        distance: '986 kilometers away',
        spent: 79,
    },
    {
        id: 8,
        name: 'Bangkok, Thailand',
        thumbnail: 'https://a0.muscache.com/im/pictures/a4ffcb97-e84c-4e6e-bf73-14e09e2dc6d6.jpg?im_w=720',
        rated: 4.2,
        distance: '986 kilometers away',
        spent: 79,
    },
    {
        id: 9,
        name: 'Bangkok, Thailand',
        thumbnail: 'https://a0.muscache.com/im/pictures/a4ffcb97-e84c-4e6e-bf73-14e09e2dc6d6.jpg?im_w=720',
        rated: 4.2,
        distance: '986 kilometers away',
        spent: 79,
    },
    {
        id: 10,
        name: 'Bangkok, Thailand',
        thumbnail: 'https://a0.muscache.com/im/pictures/a4ffcb97-e84c-4e6e-bf73-14e09e2dc6d6.jpg?im_w=720',
        rated: 4.2,
        distance: '986 kilometers away',
        spent: 79,
    },
    {
        id: 11,
        name: 'Bangkok, Thailand',
        thumbnail: 'https://a0.muscache.com/im/pictures/a4ffcb97-e84c-4e6e-bf73-14e09e2dc6d6.jpg?im_w=720',
        rated: 4.2,
        distance: '986 kilometers away',
        spent: 79,
    },
];

const comments = [];

function Home() {
    return (
        <section className="h-full w-full py-8">
            <section className="mx-[3.2rem] grid sm:grid-rows-12 lg:grid-rows-3 grid-flow-col gap-x-7 gap-y-10">
                {places.map((place) => (
                    <section
                        key={place.id}
                        className="ease-in-out duration-200 drop-shadow-xl hover:shadow-[0_5px_19px_0_rgba(56,189,248,0.7)] max-w-sm bg-white rounded-lg border border-gray-200 dark:bg-gray-800 dark:border-gray-700"
                    >
                        <a href="#">
                            <Image className="rounded-t-lg" src={place.thumbnail} alt={place.name} />
                        </a>
                        <section className="flex justify-between p-5">
                            <section>
                                <a href="#">
                                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                        {place.name}
                                    </h5>
                                </a>
                                <p className="mb-3 text-xl font-normal text-gray-600 dark:text-gray-400">
                                    {place.distance}
                                </p>
                                <p className="mb-3 text-xl font-normal text-gray-800 dark:text-gray-400">
                                    <span className="font-semibold">${place.spent}</span> night
                                </p>
                            </section>
                            <section className="flex flex-col items-end justify-between text-gray-800 dark:text-gray-400">
                                <section className="flex items-center">
                                    <svg
                                        aria-hidden="true"
                                        className="w-5 h-5 text-yellow-400"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <title>Rating star</title>
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                                    </svg>
                                    <span> {place.rated}</span>
                                </section>
                                <section className="mb-3">
                                    <span className="text-xl">73 reviews</span>
                                </section>
                            </section>
                        </section>
                    </section>
                ))}
            </section>
        </section>
    );
}

export default Home;
