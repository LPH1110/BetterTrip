import { Image, Button } from '~/components';
import { useStore } from '~/store';
import classNames from 'classnames/bind';
import styles from './FlightTicket.module.scss';

const cx = classNames.bind(styles);

function TicketCard({ data }) {
    const [state, dispatch] = useStore();
    const { ticketForm } = state;
    const { passengers } = ticketForm;

    return (
        <div className={cx('card', 'flex items-center justify-between py-4 px-6 bg-slate-100 rounded-lg')}>
            <div className="flex items-center">
                <div className="rounded-md">
                    <Image className="w-14 h-14 rounded-md" src={data.thumbnail} alt="Vietjet" />
                </div>
                <h4 className="ml-4">{data.brand}</h4>
            </div>
            <div className="flex items-center">
                <div className="flex flex-col items-center">
                    <h4>{data.startTime}</h4>
                    <span className="text-slate-500 text-[1.25rem]">{data.from}</span>
                </div>
                <div className="h-px w-24 bg-slate-700 mx-4"></div>
                <div className="flex flex-col items-center">
                    <h4>{data.arrivedTime}</h4>
                    <span className="text-slate-500 text-[1.25rem]">{data.destination}</span>
                </div>
            </div>
            <div className="flex items-center">
                <div className="mr-6">
                    <p>{`from ${data.price}`}</p>
                    <span className="text-slate-500">{`Total ${data.price * passengers}`}</span>
                </div>
                <Button
                    type="medium"
                    to="/checkout"
                    className="h-full bg-sky-500 text-white hover:bg-sky-400 ease-in-out duration-200 rounded-md"
                >
                    Order
                </Button>
            </div>
        </div>
    );
}

export default TicketCard;
