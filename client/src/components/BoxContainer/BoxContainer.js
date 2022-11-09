import { Tab } from '@headlessui/react';

import FlightLayout from './FlightLayout';

const tabs = [
    { id: 0, title: 'Hotels' },
    { id: 1, title: 'Flights' },
    { id: 2, title: 'Train Tickets' },
    { id: 3, title: 'Saving Combos' },
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
                <Tab.Panels className="px-4 py-6 bg-white pt-8 rounded-lg w-[1160px] min-h-[138px]">
                    <Tab.Panel>Hotels</Tab.Panel>
                    <Tab.Panel className="outline-none">
                        <FlightLayout />
                    </Tab.Panel>
                    <Tab.Panel>Train Tickets</Tab.Panel>
                    <Tab.Panel>Saving Combos</Tab.Panel>
                </Tab.Panels>
            </Tab.Group>
        </section>
    );
}

export default BoxContainer;
