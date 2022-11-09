import { Tab } from '@headlessui/react';
<<<<<<< HEAD

import FlightLayout from './FlightLayout';
=======
import HeadlessTippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import { Image, Button, Popper } from '~/components';
import images from '~/assets/images';
import styles from './BoxContainer.module.scss';

const cx = classNames.bind(styles);
>>>>>>> 4d94449ad6d1bf764e626aea04845501ddebc978

const tabs = [
    { id: 0, title: 'Hotels' },
    { id: 1, title: 'Flights' },
    { id: 2, title: 'Trains' },
    { id: 3, title: 'Saving Combos' },
];

<<<<<<< HEAD
=======
const options_hotel = [
    {
        id: 0,
        title: 'Check-in date',
        rightIcon: <Image src={images.caretDownPng} alt="caret-down" />,
        leftIcon: <Image src={images.calendarIcon} alt="user-png" />,
        items: [
            {
                id: 0,
                title: '12/11/2022',
                isActive: true,
            },
            {
                id: 1,
                title: '13/11/2022',
            },
            {
                id: 2,
                title: '14/11/2022',
            },
            {
                id: 3,
                title: '15/11/2022',
            },
            {
                id: 4,
                title: '16/11/2022',
            },
            {
                id: 5,
                title: 'Show more',
            },
        ],
    },
    {
        id: 1,
        title: 'Quantity',
        rightIcon: <Image src={images.caretDownPng} alt="caret-down" />,
        leftIcon: <Image src={images.userPng} alt="user-png" />,
        items: [
            {
                id: 0,
                title: '2 Adult',
            },
            {
                id: 1,
                title: '1 Children',
            },
            {
                id: 2,
                title: '1 Babies',
            },
            {
                id: 3,
                title: 'Add more',
            },
        ],
    },
    {
        id: 2,
        title: 'Type of Room',
        rightIcon: <Image src={images.caretDownPng} alt="caret-down" />,
        leftIcon: <Image src={images.seatPng} alt="user-png" />,
        items: [
            {
                id: 0,
                title: 'Standard',
                isActive: true,
            },
            {
                id: 1,
                title: 'Superior',
            },
            {
                id: 2,
                title: 'Special Standard',
            },
            {
                id: 3,
                title: 'Single',
            },
            {
                id: 4,
                title: 'Double',
            },
            {
                id: 5,
                title: 'Quad',
            },
            {
                id: 6,
                title: 'Twin',
            },
            {
                id: 7,
                title: 'Double-double',
            },
        ],
    },
];

const options_flight = [
    {
        id: 0,
        title: 'Ticket type',
        rightIcon: <Image src={images.caretDownPng} alt="caret-down" />,
        leftIcon: <Image src={images.planePng} alt="user-png" />,
        items: [
            {
                id: 0,
                title: 'One way',
                isActive: true,
            },
            {
                id: 1,
                title: 'Return ticket',
            },
            {
                id: 2,
                title: 'Many Cities',
            },
        ],
    },
    {
        id: 1,
        title: 'Quantity',
        rightIcon: <Image src={images.caretDownPng} alt="caret-down" />,
        leftIcon: <Image src={images.userPng} alt="user-png" />,
        items: [
            {
                id: 0,
                title: '2 Adult',
            },
            {
                id: 1,
                title: '1 Children',
            },
            {
                id: 2,
                title: '1 Babies',
            },
            {
                id: 3,
                title: 'Add more',
            },
        ],
    },
    {
        id: 2,
        title: 'Ticket Class',
        rightIcon: <Image src={images.caretDownPng} alt="caret-down" />,
        leftIcon: <Image src={images.seatPng} alt="user-png" />,
        items: [
            {
                id: 0,
                title: 'Economy Class',
                isActive: true,
            },
            {
                id: 1,
                title: 'Premium Class',
            },
            {
                id: 2,
                title: 'Business Class',
            },
            {
                id: 3,
                title: 'First Class',
            },
        ],
    },
];

const options_train = [
    {
        id: 0,
        title: 'Ticket type',
        rightIcon: <Image src={images.caretDownPng} alt="caret-down" />,
        leftIcon: <Image src={images.trainPng} alt="user-png" />,
        items: [
            {
                id: 0,
                title: 'One way',
                isActive: true,
            },
            {
                id: 1,
                title: 'Return ticket',
            },
            {
                id: 2,
                title: 'Many Cities',
            },
        ],
    },
    {
        id: 1,
        title: 'Quantity',
        rightIcon: <Image src={images.caretDownPng} alt="caret-down" />,
        leftIcon: <Image src={images.userPng} alt="user-png" />,
        items: [
            {
                id: 0,
                title: '2 Adult',
            },
            {
                id: 1,
                title: '1 Children',
            },
            {
                id: 2,
                title: '1 Babies',
            },
            {
                id: 3,
                title: 'Add more',
            },
        ],
    },
    {
        id: 2,
        title: 'Ticket Class',
        rightIcon: <Image src={images.caretDownPng} alt="caret-down" />,
        leftIcon: <Image src={images.seatPng} alt="user-png" />,
        items: [
            {
                id: 0,
                title: 'Second Class AC Seats Only',
                isActive: true,
            },
            {
                id: 1,
                title: 'Second Class Sleeper AC',
            },
            {
                id: 2,
                title: 'First Class Sleeper',
            },
        ],
    },
];

const options_saving_combos = [
    {
        id: 0,
        title: 'Check-in date',
        rightIcon: <Image src={images.caretDownPng} alt="caret-down" />,
        leftIcon: <Image src={images.calendarIcon} alt="user-png" />,
        items: [
            {
                id: 0,
                title: '12/11/2022',
                isActive: true,
            },
            {
                id: 1,
                title: '13/11/2022',
            },
            {
                id: 2,
                title: '14/11/2022',
            },
            {
                id: 3,
                title: '15/11/2022',
            },
            {
                id: 4,
                title: '16/11/2022',
            },
            {
                id: 5,
                title: 'Show more',
            },
        ],
    },
    {
        id: 1,
        title: 'Quantity',
        rightIcon: <Image src={images.caretDownPng} alt="caret-down" />,
        leftIcon: <Image src={images.userPng} alt="user-png" />,
        items: [
            {
                id: 0,
                title: '2 Adult',
            },
            {
                id: 1,
                title: '1 Children',
            },
            {
                id: 2,
                title: '1 Babies',
            },
            {
                id: 3,
                title: 'Add more',
            },
        ],
    },
    {
        id: 2,
        title: 'Type of Room',
        rightIcon: <Image src={images.caretDownPng} alt="caret-down" />,
        leftIcon: <Image src={images.seatPng} alt="user-png" />,
        items: [
            {
                id: 0,
                title: 'Standard',
                isActive: true,
            },
            {
                id: 1,
                title: 'Superior',
            },
            {
                id: 2,
                title: 'Special Standard',
            },
            {
                id: 3,
                title: 'Single',
            },
            {
                id: 4,
                title: 'Double',
            },
            {
                id: 5,
                title: 'Quad',
            },
            {
                id: 6,
                title: 'Twin',
            },
            {
                id: 7,
                title: 'Double-double',
            },
        ],
    },
    // {
    //     id: 3,
    //     title: 'Ticket type',
    //     rightIcon: <Image src={images.caretDownPng} alt="caret-down" />,
    //     leftIcon: <Image src={images.planePng} alt="user-png" />,
    //     items: [
    //         {
    //             id: 0,
    //             title: 'One way',
    //             isActive: true,
    //         },
    //         {
    //             id: 1,
    //             title: 'Return ticket',
    //         },
    //         {
    //             id: 2,
    //             title: 'Many Cities',
    //         },
    //     ],
    // },
    {
        id: 4,
        title: 'Ticket Class',
        rightIcon: <Image src={images.caretDownPng} alt="caret-down" />,
        leftIcon: <Image src={images.planePng} alt="user-png" />,
        items: [
            {
                id: 0,
                title: 'Second Class AC Seats Only',
                isActive: true,
            },
            {
                id: 1,
                title: 'Second Class Sleeper AC',
            },
            {
                id: 2,
                title: 'First Class Sleeper',
            },
        ],
    },
    {
        id: 5,
        title: 'Ticket Class',
        rightIcon: <Image src={images.caretDownPng} alt="caret-down" />,
        leftIcon: <Image src={images.trainPng} alt="user-png" />,
        items: [
            {
                id: 0,
                title: 'Second Class AC Seats Only',
                isActive: true,
            },
            {
                id: 1,
                title: 'Second Class Sleeper AC',
            },
            {
                id: 2,
                title: 'First Class Sleeper',
            },
        ],
    },
];

>>>>>>> 4d94449ad6d1bf764e626aea04845501ddebc978
function BoxContainer() {
    return (
        <section className="bg-slate-700 p-24 flex flex-col items-center relative">
            <Tab.Group>
                <Tab.List className="p-2 flex absolute top-[15%] rounded-full bg-gray-900/90">
                    {tabs.map((tab) => (
                        <Tab
                            className="ease-in-out duration-200 ui-selected:text-sky-600 ui-selected:bg-white rounded-full py-2 block text-2xl px-4 text-slate-100 outline-none"
                            key={tab.id}
                        >
                            {tab.title}
                        </Tab>
                    ))}
                </Tab.List>
<<<<<<< HEAD
                <Tab.Panels className="px-4 py-6 bg-white pt-8 rounded-lg w-[1160px] min-h-[138px]">
                    <Tab.Panel>Hotels</Tab.Panel>
                    <Tab.Panel className="outline-none">
                        <FlightLayout />
                    </Tab.Panel>
                    <Tab.Panel>Train Tickets</Tab.Panel>
                    <Tab.Panel>Saving Combos</Tab.Panel>
                </Tab.Panels>
=======
                <form autoComplete="off">
                    <Tab.Panels className="px-4 py-6 bg-white pt-8 rounded-lg w-[1160px] min-h-[138px]">

                        {/* hotel */}
                        <Tab.Panel>
                            <div>
                                <div>
                                    {options_hotel.map((option) => (
                                        <HeadlessTippy
                                            key={option.id}
                                            interactive
                                            offset={[0, 5]}
                                            placement="bottom-start"
                                            trigger="click"
                                            render={(attrs) => (
                                                <div tabIndex="-1" {...attrs}>
                                                    <Popper className="py-3 min-w-[14rem]">
                                                        {option.items.map((item) => {
                                                            return item.isActive ? (
                                                                <div
                                                                    key={item.id}
                                                                    className="flex justify-between text-sky-500 text-xl cursor-pointer hover:bg-slate-200/70 py-3 px-4"
                                                                >
                                                                    <h5>{item.title}</h5>
                                                                    <Image src={images.tickPng} alt="tick-icon" />
                                                                </div>
                                                            ) : (
                                                                <div
                                                                    key={item.id}
                                                                    className="text-xl cursor-pointer hover:bg-slate-200/70 py-3 px-4"
                                                                >
                                                                    {item.title}
                                                                </div>
                                                            );
                                                        })}
                                                    </Popper>
                                                </div>
                                            )}
                                        >
                                            <Button
                                                className="text-xl hover:bg-slate-200/70 p-2 rounded-lg ease-in-out duration-200"
                                                rightIcon={option.rightIcon}
                                                leftIcon={option.leftIcon}
                                            >
                                                {option.title}
                                            </Button>
                                        </HeadlessTippy>
                                    ))}
                                </div>
                                <div></div>
                            </div>
                        </Tab.Panel>

                        {/* flight ticket */}
                        <Tab.Panel>
                        <div>
                                <div>
                                    {options_flight.map((option) => (
                                        <HeadlessTippy
                                            key={option.id}
                                            interactive
                                            offset={[0, 5]}
                                            placement="bottom-start"
                                            trigger="click"
                                            render={(attrs) => (
                                                <div tabIndex="-1" {...attrs}>
                                                    <Popper className="py-3 min-w-[14rem]">
                                                        {option.items.map((item) => {
                                                            return item.isActive ? (
                                                                <div
                                                                    key={item.id}
                                                                    className="flex justify-between text-sky-500 text-xl cursor-pointer hover:bg-slate-200/70 py-3 px-4"
                                                                >
                                                                    <h5>{item.title}</h5>
                                                                    <Image src={images.tickPng} alt="tick-icon" />
                                                                </div>
                                                            ) : (
                                                                <div
                                                                    key={item.id}
                                                                    className="text-xl cursor-pointer hover:bg-slate-200/70 py-3 px-4"
                                                                >
                                                                    {item.title}
                                                                </div>
                                                            );
                                                        })}
                                                    </Popper>
                                                </div>
                                            )}
                                        >
                                            <Button
                                                className="text-xl hover:bg-slate-200/70 p-2 rounded-lg ease-in-out duration-200"
                                                rightIcon={option.rightIcon}
                                                leftIcon={option.leftIcon}
                                            >
                                                {option.title}
                                            </Button>
                                        </HeadlessTippy>
                                    ))}
                                </div>
                                <div></div>
                            </div>
                        </Tab.Panel> 

                        {/* train ticket */}
                        <Tab.Panel>
                        <div>
                                <div>
                                    {options_train.map((option) => (
                                        <HeadlessTippy
                                            key={option.id}
                                            interactive
                                            offset={[0, 5]}
                                            placement="bottom-start"
                                            trigger="click"
                                            render={(attrs) => (
                                                <div tabIndex="-1" {...attrs}>
                                                    <Popper className="py-3 min-w-[14rem]">
                                                        {option.items.map((item) => {
                                                            return item.isActive ? (
                                                                <div
                                                                    key={item.id}
                                                                    className="flex justify-between text-sky-500 text-xl cursor-pointer hover:bg-slate-200/70 py-3 px-4"
                                                                >
                                                                    <h5>{item.title}</h5>
                                                                    <Image src={images.tickPng} alt="tick-icon" />
                                                                </div>
                                                            ) : (
                                                                <div
                                                                    key={item.id}
                                                                    className="text-xl cursor-pointer hover:bg-slate-200/70 py-3 px-4"
                                                                >
                                                                    {item.title}
                                                                </div>
                                                            );
                                                        })}
                                                    </Popper>
                                                </div>
                                            )}
                                        >
                                            <Button
                                                className="text-xl hover:bg-slate-200/70 p-2 rounded-lg ease-in-out duration-200"
                                                rightIcon={option.rightIcon}
                                                leftIcon={option.leftIcon}
                                            >
                                                {option.title}
                                            </Button>
                                        </HeadlessTippy>
                                    ))}
                                </div>
                                <div></div>
                            </div>
                        </Tab.Panel>

                        {/* saving combos */}
                        <Tab.Panel>
                        <div>
                                <div>
                                    {options_saving_combos.map((option) => (
                                        <HeadlessTippy
                                            key={option.id}
                                            interactive
                                            offset={[0, 5]}
                                            placement="bottom-start"
                                            trigger="click"
                                            render={(attrs) => (
                                                <div tabIndex="-1" {...attrs}>
                                                    <Popper className="py-3 min-w-[14rem]">
                                                        {option.items.map((item) => {
                                                            return item.isActive ? (
                                                                <div
                                                                    key={item.id}
                                                                    className="flex justify-between text-sky-500 text-xl cursor-pointer hover:bg-slate-200/70 py-3 px-4"
                                                                >
                                                                    <h5>{item.title}</h5>
                                                                    <Image src={images.tickPng} alt="tick-icon" />
                                                                </div>
                                                            ) : (
                                                                <div
                                                                    key={item.id}
                                                                    className="text-xl cursor-pointer hover:bg-slate-200/70 py-3 px-4"
                                                                >
                                                                    {item.title}
                                                                </div>
                                                            );
                                                        })}
                                                    </Popper>
                                                </div>
                                            )}
                                        >
                                            <Button
                                                className="text-xl hover:bg-slate-200/70 p-2 rounded-lg ease-in-out duration-200"
                                                rightIcon={option.rightIcon}
                                                leftIcon={option.leftIcon}
                                            >
                                                {option.title}
                                            </Button>
                                        </HeadlessTippy>
                                    ))}
                                </div>
                            </div>
                        </Tab.Panel>
            
                    </Tab.Panels>

                </form>
>>>>>>> 4d94449ad6d1bf764e626aea04845501ddebc978
            </Tab.Group>
        </section>
    );
}

export default BoxContainer;
