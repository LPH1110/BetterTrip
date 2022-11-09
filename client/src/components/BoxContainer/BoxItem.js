import classNames from 'classnames/bind';
import styles from './BoxContainer.module.scss';
import { Field } from 'formik';
import Tippy from '@tippyjs/react/headless';
import { useStore, actions } from '~/store';
import DateRange from '../DateRange';

const cx = classNames.bind(styles);

const sources = [
    {
        id: 0,
        title: 'TPHCM, Viet Nam',
        description: 'SGN - Sân bay Tân Sơn Nhất',
        key: 'TPHCM (SGN)',
    },
    {
        id: 1,
        title: 'Tokyo, Nhật Bản',
        description: 'TYOA - Tất cả sân bay ở Tokyo',
        key: 'Tokyo (TYOA)',
    },
    {
        id: 2,
        title: 'Đà Nẵng, Viet Nam',
        description: 'DAD - Sân bay Đà Nẵng',
        key: 'Đà Nẵng (DAD)',
    },
];

function BoxItem({ values, data }) {
    const [state, dispatch] = useStore();
    const { ticketForm } = state;

    const dispatchTicketForm = (key, value) => {
        dispatch(actions.setTicketForm(key, value));
    };

    const Component = () => {
        switch (data.name) {
            case 'source':
            case 'destination':
                return (
                    <div className="rounded-lg min-w-[23.5rem]">
                        {sources.map((location) => (
                            <div
                                key={location.id}
                                onClick={() => dispatchTicketForm(data.name, location.key)}
                                className="hover:bg-sky-100 ease duration-100 cursor-pointer text-slate-700 py-2 px-4"
                            >
                                <h4 className="text-[1.5rem] font-semibold">{location.title}</h4>
                                <p className="text-[1.25rem]">{location.description}</p>
                            </div>
                        ))}
                    </div>
                );
            case 'startDate':
            case 'returnDate':
                return (
                    <>
                        <DateRange data={data} />
                    </>
                );
            default:
                return <></>;
        }
    };
    return (
        <div className={cx('inner')}>
            <Tippy
                placement="bottom-start"
                trigger="click"
                interactive
                render={(attrs) => (
                    <div
                        className="z-9 rounded-lg max-w-full bg-white shadow-[0_5px_24px_0_rgba(148,163,184,0.6)]"
                        tabIndex="-1"
                        {...attrs}
                    >
                        <Component />
                    </div>
                )}
            >
                <div className="p-2 border border-slate-200 rounded-lg">
                    <span className="">{data.icon}</span>
                    <Field
                        value={ticketForm[data.name]}
                        id={data.name}
                        className="text-[1.5rem] w-full outline-none"
                        placeholder={data.placeholder}
                        readOnly
                    />
                </div>
            </Tippy>
        </div>
    );
}

export default BoxItem;
