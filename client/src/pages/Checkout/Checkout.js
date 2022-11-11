import { NavLink } from 'react-router-dom';
import { useRef, useEffect } from 'react';
import classNames from 'classnames/bind';
import { PencilSquareIcon, ArrowLongRightIcon } from '@heroicons/react/24/outline';

import { UserBar, AuthenBar } from '~/layouts/DefaultLayout/subComponents';
import { Image } from '~/components';
import images from '~/assets/images';
import { useStore } from '~/store';
import styles from './Checkout.module.scss';
import CheckOutCard from './CheckOutCard';
import DetailPrice from './DetailPrice';

const cx = classNames.bind(styles);

const flightTickets = [
    {
        id: 0,
        thumbnail: 'https://pic.tripcdn.com/airline_logo/3x/vj.webp',
        brand: 'Vietjet',
        startTime: '01:00',
        arrivedTime: '05:25',
        price: 5434,
        from: 'SGN T1',
        destination: 'TPE T1',
    },
    {
        id: 1,
        thumbnail: 'https://pic.tripcdn.com/airline_logo/3x/vj.webp',
        brand: 'Vietjet',
        startTime: '01:00',
        arrivedTime: '05:25',
        price: 5434,
        from: 'SGN T1',
        destination: 'TPE T1',
    },
    {
        id: 2,
        thumbnail: 'https://pic.tripcdn.com/airline_logo/3x/vj.webp',
        brand: 'Vietjet',
        startTime: '01:00',
        arrivedTime: '05:25',
        price: 5434,
        from: 'SGN T1',
        destination: 'TPE T1',
    },
    {
        id: 3,
        thumbnail: 'https://pic.tripcdn.com/airline_logo/3x/vj.webp',
        brand: 'Vietjet',
        startTime: '01:00',
        arrivedTime: '05:25',
        price: 5434,
        from: 'SGN T1',
        destination: 'TPE T1',
    },
];

function Checkout() {
    const [state, dispatch] = useStore();
    const { loggedIn, ticketForm } = state;
    const { type, passengers, startDate, returnDate, source, destination } = ticketForm;
    const header = useRef();

    useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth',
        });
    }, []);

    return (
        <section>
            <header
                ref={header}
                className="bg-white justify-between transition-[border] ease-in-out duration-300 w-full border-b border-slate-200 inset-0 flex items-center h-[6.4rem] fixed z-[10000]"
            >
                <nav className="flex flex-1 h-full px-[3.2rem] justify-start items-center space-x-4">
                    <NavLink
                        onClick={() => {
                            window.scrollTo({
                                top: 0,
                                left: 0,
                                behavior: 'smooth',
                            });
                        }}
                        end
                        to="/"
                        className="mr-3 py-3 flex-none w-52 h-full flex items-center"
                    >
                        <Image className="max-w-[85%]" src={images.logo} alt="logo" />
                    </NavLink>
                </nav>

                <nav className="flex flex-1 h-full pr-[3.2rem] justify-end items-center space-x-4">
                    {loggedIn ? <UserBar /> : <AuthenBar />}
                </nav>
            </header>
            <section className="mt-24 py-7 h-screen w-screen bg-slate-200 flex items-start justify-center">
                <section className="w-[80%] bg-transparent grid grid-cols-3 gap-x-5">
                    <section className="bg-transparent h-full col-span-2 rounded-lg">
                        <div className="mb-2 relative">
                            <Image
                                className="w-full h-36 rounded-md"
                                src="https://youimg1.tripcdn.com/target/100o0h000000907edD905_C_960_210.jpg"
                                alt="background"
                            />
                            <div className="flex flex-col justify-between absolute inset-0 bg-slate-900/40 px-6 py-4">
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center text-slate-100 text-3xl font-semibold">
                                        <h4>{source}</h4>
                                        <span className="mx-4">
                                            {type === 'Return' ? (
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    strokeWidth={1.5}
                                                    stroke="currentColor"
                                                    className="w-11 h-11"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5"
                                                    />
                                                </svg>
                                            ) : (
                                                <ArrowLongRightIcon className="w-11 h-11" />
                                            )}
                                        </span>
                                        <h4>{destination}</h4>
                                    </div>
                                    <div>
                                        <p className="flex items-center text-slate-100 text-[1.25rem] hover:text-sky-400 ease duration-200 cursor-pointer">
                                            <span className="mr-2">
                                                <PencilSquareIcon className="w-6 h-6" />
                                            </span>
                                            <span>Change another flight</span>
                                        </p>
                                    </div>
                                </div>
                                <p className="text-slate-100 text-[1.25rem]">
                                    {passengers} adults | All the take off time/landing time is calculated based on your
                                    local time
                                </p>
                            </div>
                        </div>
                        <CheckOutCard direction="Departure" date={startDate} from={source} to={destination} />
                        {type === 'Return' && (
                            <CheckOutCard direction="Return" date={returnDate} from={destination} to={source} />
                        )}
                        <section className="w-full bg-white h-64 mt-[0.5rem] rounded-lg">
                            Personal Information Form
                        </section>
                    </section>
                    <section className="p-5 bg-white rounded-lg">
                        <DetailPrice />
                    </section>
                </section>
            </section>
        </section>
    );
}

export default Checkout;
