import { useStore } from '~/store';
import { Button } from '~/components';
import { ArrowRightIcon } from '@heroicons/react/24/solid';
import { NavLink } from 'react-router-dom';

function DetailPrice({ className }) {
    const [state, dispatch] = useStore();
    const { ticketForm } = state;
    const { passengers } = ticketForm;
    return (
        <section className="h-full flex flex-col">
            <header>
                <h1 className="text-4xl font-semibold">Detail Price</h1>
            </header>
            <div className="py-3 my-6 border-y border-dashed border-slate-500">
                <h4 className="mb-2 text-2xl font-semibold">Passengers</h4>
                <div className="grid grid-cols-3">
                    <div className="text-2xl">
                        <p>Adult</p>
                        <p>Ticket price</p>
                        <p>Tax</p>
                    </div>
                    <div className="col-span-2 text-right text-2xl">
                        <p>{passengers < 2 ? `9.744.000` : `9.744.000 x${passengers}`}</p>
                        <p>{passengers < 2 ? `6.534.000` : `6.534.000 x${passengers}`}</p>
                        <p>{passengers < 2 ? `3.210.000` : `3.210.000 x${passengers}`}</p>
                    </div>
                </div>
            </div>
            <footer className="flex flex-col flex-1 items-start justify-between">
                <div className="flex items-center justify-between w-full">
                    <span className="font-semibold">Total</span>
                    <h1 className="text-sky-500 font-semibold text-4xl">19.488.000</h1>
                </div>
                <NavLink
                    to="/payment"
                    className="flex items-center justify-center bg-sky-500 w-full p-4 text-slate-100 hover:bg-sky-400 ease-in-out duration-200 rounded-md font-semibold"
                >
                    Check out
                    <span>
                        <ArrowRightIcon className="font-semibold w-6 h-6 ml-2" />
                    </span>
                </NavLink>
            </footer>
        </section>
    );
}

export default DetailPrice;
