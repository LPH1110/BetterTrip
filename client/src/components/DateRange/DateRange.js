import { useState, useEffect } from 'react';
import { Calendar } from 'react-date-range';
import { format } from 'date-fns';
import classNames from 'classnames/bind';
import styles from './DateRange.module.scss';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file

import { useStore, actions } from '~/store';

const cx = classNames.bind(styles);

function DateRange({ data }) {
    const [state, dispatch] = useStore();

    const [date, setDate] = useState(new Date());

    useEffect(() => {
        setDate(date);
    }, []);

    const handleSelect = (date) => {
        setDate(date);
        dispatch(actions.setTicketForm(data.name, format(date, 'dd/MM/yyyy')));
    };
    return <Calendar className={cx('calendar')} minDate={new Date()} date={date} onChange={handleSelect} />;
}

export default DateRange;
