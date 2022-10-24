import { forwardRef } from 'react';
import classNames from 'classnames/bind';
import styles from './Toast.module.scss';

const cx = classNames.bind(styles);

const Toast = forwardRef(({ message = '', status }, ref) => {
    const handleRemoveToast = () => {
        console.log('clicked');
        if (ref.current) {
            ref.current.style.animation = `0.5s ${cx('fadeOut')} ease forwards`;
        }
    };

    return (
        <div ref={ref} className={cx('toast', 'fixed')}>
            <div className={cx('toast_body', status)}>
                <div className={cx('toast_icon')}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                        width="26"
                        height="26"
                        fill="currentColor"
                    >
                        <path d="M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z" />
                    </svg>
                </div>
                <h4 className={cx('toast_title')}>{message}</h4>
                <button onClick={handleRemoveToast} className={cx('toast_icon', 'toast_remove')}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        id="Filled"
                        viewBox="0 0 24 24"
                        width="26"
                        height="26"
                        fill="currentColor"
                    >
                        <path d="M18,6h0a1,1,0,0,0-1.414,0L12,10.586,7.414,6A1,1,0,0,0,6,6H6A1,1,0,0,0,6,7.414L10.586,12,6,16.586A1,1,0,0,0,6,18H6a1,1,0,0,0,1.414,0L12,13.414,16.586,18A1,1,0,0,0,18,18h0a1,1,0,0,0,0-1.414L13.414,12,18,7.414A1,1,0,0,0,18,6Z" />
                    </svg>
                </button>
            </div>
        </div>
    );
});

export default Toast;
