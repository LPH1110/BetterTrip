import { Tab } from '@headlessui/react';
import HeadlessTippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';

import { Image, Button, Popper } from '~/components';
import images from '~/assets/images';
import styles from './BoxContainer.module.scss';

const cx = classNames.bind(styles);

const tabs = [
    { id: 0, title: 'Hotels' },
    { id: 1, title: 'Flights' },
    { id: 2, title: 'Train Tickets' },
    { id: 3, title: 'Saving Combos' },
];

const options = [
    {
        id: 0,
        title: 'One way',
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
        title: '1 adult',
        rightIcon: <Image src={images.caretDownPng} alt="caret-down" />,
        leftIcon: <Image src={images.userPng} alt="user-png" />,
        items: [
            {
                id: 0,
                title: 'Adult',
            },
            {
                id: 1,
                title: 'Children',
            },
            {
                id: 2,
                title: 'Babies',
            },
        ],
    },
    {
        id: 3,
        title: 'Standard',
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
                title: 'Standard/Special Standard',
            },
            {
                id: 2,
                title: 'Special Standard',
            },
            {
                id: 3,
                title: 'Business/First Class',
            },
            {
                id: 4,
                title: 'Busines Class',
            },
            {
                id: 5,
                title: 'First Class',
            },
        ],
    },
];

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
                <form autoComplete="off">
                    <Tab.Panels className="px-4 py-6 bg-white pt-8 rounded-lg w-[1160px] min-h-[138px]">
                        <Tab.Panel>
                            <div>
                                <div>
                                    {options.map((option) => (
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
                        <Tab.Panel>Flights</Tab.Panel>
                        <Tab.Panel>Train Tickets</Tab.Panel>
                        <Tab.Panel>Saving Combos</Tab.Panel>
                    </Tab.Panels>
                </form>
            </Tab.Group>
        </section>
    );
}

export default BoxContainer;
