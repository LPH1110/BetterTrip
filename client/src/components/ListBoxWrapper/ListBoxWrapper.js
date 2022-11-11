import { useState, Fragment } from 'react';
import { Listbox } from '@headlessui/react';
import { CheckIcon } from '@heroicons/react/20/solid';
import { useStore, actions } from '~/store';
import Tippy from '@tippyjs/react';

function ListBoxWrapper({ data }) {
    const [state, dispatch] = useStore();
    const { ticketForm } = state;
    const [selectedItem, setSelectedItem] = useState(ticketForm[data.title]);
    const [down, setDown] = useState(true);

    const handleSetTicketForm = (key, value) => {
        dispatch(actions.setTicketForm(key, value));
    };

    return (
        <div>
            <Listbox value={selectedItem} onChange={setSelectedItem}>
                <Listbox.Button className="h-full flex justify-between items-center relative outline-none py-2 pl-3 pr-1 mx-2 hover:bg-slate-100 ease-in-out duration-200 rounded-lg">
                    <p className="text-[1.5rem]">{selectedItem.name || selectedItem}</p>
                    <span className="ml-6">
                        {down && (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-5 h-5"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                            </svg>
                        )}
                    </span>
                    <Listbox.Options className="left-0 top-16 rounded-md p-1 absolute z-10 min-w-[18rem] bg-white shadow-[0_5px_24px_0_rgba(148,163,184,0.6)]">
                        {data.items.map((item) => (
                            <Listbox.Option
                                className="flex text-[1.4rem] justify-between text-left p-2 rounded-lg text-md outline-none text-slate-500 hover:bg-slate-100 hover:text-sky-500 ease duration-200"
                                key={item.id}
                                value={item}
                                as={Fragment}
                            >
                                {({ active, selected }) => {
                                    return (
                                        <li
                                            className={`${
                                                active ? 'bg-sky-500 text-white' : 'bg-white text-slate-500'
                                            }`}
                                            onClick={() => handleSetTicketForm(data.title, item.name)}
                                        >
                                            {item.name}
                                            <span>{selected && <CheckIcon width={24} height={24} />}</span>
                                        </li>
                                    );
                                }}
                            </Listbox.Option>
                        ))}
                    </Listbox.Options>
                </Listbox.Button>
            </Listbox>
        </div>
    );
}

export default ListBoxWrapper;
