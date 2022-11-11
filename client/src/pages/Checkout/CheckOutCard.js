import React from 'react';
import { ClockIcon } from '@heroicons/react/24/outline';
import { WifiIcon, BoltIcon, PlayIcon, ChevronDownIcon } from '@heroicons/react/20/solid';
import { Image, Button } from '~/components';
import { useStore } from '~/store';
import classNames from 'classnames/bind';
import styles from './Checkout.module.scss';

const cx = classNames.bind(styles);

function CheckOutCard({ direction, date, from, to }) {
    const [state, dispatch] = useStore();
    const { loggedIn, ticketForm } = state;
    const { passengers, startDate, returnDate, source, destination } = ticketForm;

    return (
        <div
            className={cx(
                'card',
                'cursor-pointer ease-in-out duration-200 hover:shadow-[0_4px_8px_0_rgba(69,88,115,0.4)] bg-white rounded-lg py-4 px-6',
            )}
        >
            <div className="text-[1.25rem] flex items-center">
                <span className="bg-sky-500 text-white px-3 rounded-md">{direction}</span>
                <span className="before:content-[''] before:w-[1px] before:h-[50%] before:bg-slate-300 before:absolute before:top-1/2 before:right-0 before:-translate-y-1/2 mx-4 px-4 relative">
                    {date}
                </span>
                <p>
                    {from} - {to}
                </p>
            </div>
            <div className="flex items-center justify-between mt-2">
                <div className="flex items-center">
                    <div className="rounded-md">
                        <Image
                            className="w-14 h-14 rounded-md"
                            src="https://pic.tripcdn.com/airline_logo/3x/vj.webp"
                            alt="Vietjet"
                        />
                    </div>
                    <div className="ml-4">
                        <p className="font-semibold">01:00 - 05:25</p>
                        <h4 className="">Vietjet</h4>
                    </div>
                </div>
                <div>
                    <div className="flex items-center mb-2">
                        <ClockIcon className="w-6 h-6 mr-2" />
                        <span>3g 25p</span>
                    </div>
                    <div className="flex text-slate-500 items-center justify-around">
                        <WifiIcon className="w-5 h-5" />
                        <BoltIcon className="w-5 h-5" />
                        <PlayIcon className="w-5 h-5" />
                    </div>
                </div>
                <div className="text-[1.5rem]">
                    <h4 className="font-semibold">Straight fly</h4>
                    <span className="text-slate-500">DAD - SGN</span>
                </div>
                <Button
                    type="medium"
                    className="h-full text-2xl text-sky-500 hover:text-sky-400 ease-in-out duration-200 rounded-md"
                >
                    Detail
                    <span>
                        <ChevronDownIcon className="ml-1 w-5 h-5" />
                    </span>
                </Button>
            </div>
        </div>
    );
}

export default CheckOutCard;
