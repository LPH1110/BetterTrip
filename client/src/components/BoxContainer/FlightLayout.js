import { Formik, Form, Field } from 'formik';
import { useNavigate } from 'react-router-dom';
import ListBoxWrapper from '../ListBoxWrapper';
import Button from '../Button';
import HeadlessTippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css';
import { useStore, actions } from '~/store';
import { PlusIcon, MinusIcon } from '@heroicons/react/20/solid';
import classNames from 'classnames/bind';
import styles from './BoxContainer.module.scss';
import BoxItem from './BoxItem';
import { format } from 'date-fns';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';

const boxItems = [
    {
        id: 0,
        label: 'Pick Up Location',
        name: 'source',
        icon: <i className="flex fi fi-rs-marker"></i>,
        placeholder: 'Where to start?',
    },
    {
        id: 1,
        label: 'Return Location',
        name: 'destination',
        icon: <i className="flex fi fi-rs-marker"></i>,
        placeholder: 'Your destination',
    },
    {
        id: 2,
        label: 'Pick Up Date',
        name: 'startDate',
        icon: <i className="flex fi fi-rr-calendar-lines"></i>,
        placeholder: format(new Date(), 'dd/MM/yyyy'),
    },
    {
        id: 3,
        label: 'Return Date',
        name: 'returnDate',
        icon: <i className="flex fi fi-rr-calendar-lines"></i>,
        placeholder: format(new Date(), 'dd/MM/yyyy'),
    },
];

const options = [
    {
        id: 0,
        title: 'type',
        isOption: true,
        items: [
            {
                id: 0,
                name: 'One way',
            },
            {
                id: 1,
                name: 'Return',
            },
            {
                id: 2,
                name: 'Many cities',
            },
        ],
    },
    {
        id: 1,
        title: 'passengers',
        items: [
            {
                id: 0,
                name: 'Adults',
            },
        ],
    },
    {
        id: 2,
        title: 'rank',
        isOption: true,
        items: [
            {
                id: 0,
                name: 'Standard',
            },
            {
                id: 1,
                name: 'Business',
            },
            {
                id: 2,
                name: 'First class',
            },
            {
                id: 3,
                name: 'Special',
            },
        ],
    },
];

function FlightLayout() {
    const navigate = useNavigate();
    const [state, dispatch] = useStore();
    const { ticketForm } = state;
    const { passengers } = ticketForm;

    const handleSubmit = (data) => {
        console.log(data);
        navigate('/flights');
    };

    return (
        <section>
            <div className="flex items-start">
                {options.map((option) =>
                    option.isOption ? (
                        <ListBoxWrapper key={option.id} data={option} />
                    ) : (
                        <HeadlessTippy
                            key={option.id}
                            interactive
                            placement="bottom-start"
                            trigger="click"
                            render={(attrs) => (
                                <div
                                    className="p-1 min-w-[24rem] rounded-md bg-white shadow-[0_5px_24px_0_rgba(148,163,184,0.6)]"
                                    tabIndex="-1"
                                    {...attrs}
                                >
                                    <ul>
                                        {option.items.map((item) => (
                                            <li
                                                className="flex items-center justify-between p-2 text-[1.5rem] text-slate-700"
                                                key={item.id}
                                            >
                                                <span>{item.name}</span>
                                                <div className="flex items-center">
                                                    <Button
                                                        onClick={() =>
                                                            dispatch(
                                                                actions.setTicketForm(option.title, passengers - 1),
                                                            )
                                                        }
                                                    >
                                                        <MinusIcon className="outline-none text-sky-500 w-8 h-8" />
                                                    </Button>
                                                    <span>{passengers}</span>
                                                    <Button
                                                        onClick={() =>
                                                            dispatch(
                                                                actions.setTicketForm(option.title, passengers + 1),
                                                            )
                                                        }
                                                    >
                                                        <PlusIcon className="outline-none text-sky-500 w-8 h-8" />
                                                    </Button>
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        >
                            <Button className="h-full text-md flex items-center outline-none hover:bg-slate-100 ease-in-out duration-200 rounded-lg">
                                <span>{passengers}</span>
                                <span className="mx-3 text-[1.5rem]">{option.title}</span>
                                <span>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth={1.5}
                                        stroke="currentColor"
                                        className="w-5 h-5"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                                        />
                                    </svg>
                                </span>
                            </Button>
                        </HeadlessTippy>
                    ),
                )}
            </div>
            <div className="mt-8 px-2">
                <Formik initialValues={ticketForm} onSubmit={handleSubmit}>
                    <Form className="flex items-end">
                        {boxItems.map((box) => (
                            <BoxItem values={ticketForm} key={box.id} data={box} />
                        ))}
                        <button
                            type="submit"
                            className="flex justify-around items-center text-[1.25rem] min-w-[8rem] px-2 py-[0.9rem] font-semibold bg-sky-500 text-md hover:bg-sky-400 ease-in-out duration-200 rounded-md text-slate-100 ml-6"
                        >
                            <span>
                                <MagnifyingGlassIcon className="w-8 h-8" />
                            </span>
                            Search
                        </button>
                    </Form>
                </Formik>
            </div>
        </section>
    );
}

export default FlightLayout;
