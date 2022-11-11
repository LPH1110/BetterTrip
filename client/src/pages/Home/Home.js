import { NavLink } from 'react-router-dom';
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
        slug: 'bangkok-thailand',
    },
    {
        id: 1,
        name: 'Argaka, Cyprus',
        thumbnail: 'https://a0.muscache.com/im/pictures/57b0d829-d1f6-45e5-85e5-8094c0a6147a.jpg?im_w=720',
        rated: 'New',
        distance: '7,212 kilometers away',
        spent: 63,
        slug: 'argaka-cyprus',
    },
    {
        id: 2,
        name: 'Nashik, India',
        thumbnail: 'https://a0.muscache.com/im/pictures/f856533e-5a83-4636-9686-4a6bb2d03c1d.jpg?im_w=720',
        rated: 4.84,
        distance: '3,372 kilometers away',
        spent: 139,
        slug: 'nashik-india',
    },
    {
        id: 3,
        name: 'Talkehr, India',
        thumbnail: 'https://a0.muscache.com/im/pictures/b6a61705-7f71-40b1-8502-7e05ead83c25.jpg?im_w=720',
        rated: 'New',
        distance: '3,133 kilometers away',
        spent: 50,
        slug: 'talkehr-india',
    },
];

const comments = [];

function Home() {
    return (
        <section className="h-full w-full pb-8">
            <section className="m-[3.2rem] grid sm:grid-rows-1 grid-flow-col gap-x-7 gap-y-10">
                {places.map((place) => (
                    <NavLink
                        key={place.id}
                        to={`/places/${place.slug}`}
                        className="ease-in-out duration-200 drop-shadow-xl hover:shadow-[0_5px_19px_0_rgba(56,189,248,0.7)] max-w-sm bg-white rounded-lg border border-gray-200 dark:bg-gray-800 dark:border-gray-700"
                    >
                        <div className="overflow-hidden">
                            <Image
                                className="ease-in-out duration-300 hover:scale-110 rounded-t-lg"
                                src={place.thumbnail}
                                alt={place.name}
                            />
                        </div>
                        <section className="flex justify-between p-5">
                            <section>
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                    {place.name}
                                </h5>
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
                                    <span className="text-xl"> {place.rated}</span>
                                </section>
                                <section className="mb-3">
                                    <span className="text-xl">73 reviews</span>
                                </section>
                            </section>
                        </section>
                    </NavLink>
                ))}
            </section>
        </section>
    );
}

export default Home;
