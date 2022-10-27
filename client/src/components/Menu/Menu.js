import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';
import { Popper as PopperWrapper } from '~/components';
import { useState } from 'react';

import styles from './Menu.module.scss';
import MenuItem from './MenuItem';
import Header from './Header';
import { useStore, actions } from '~/store';

const cx = classNames.bind(styles);

function Menu({ items, children, hideOnClick = false, onChange }) {
    const [history, setHistory] = useState([{ data: items }]);
    const current = history[history.length - 1];
    const [state, dispatch] = useStore();

    const handleResetMenu = () => {
        // Go back to previous menu
        setHistory((prev) => prev.slice(0, prev.length - 1));
    };

    const handleHideMenu = () => {
        // document.body.style.overflowY = 'overlay';
        // Go back to the first menu
        setHistory((prev) => prev.slice(0, 1));
    };

    const renderItems = () => {
        return current.data.map((item) => {
            const hasChildren = !!item.children;

            return (
                <MenuItem
                    data={item}
                    key={item.id}
                    onClick={() => {
                        if (hasChildren) {
                            document.body.style.overflowY = 'hidden';
                            setHistory((prev) => [...prev, item.children]);
                        }

                        // else {
                        //     onChange(item);
                        // }

                        switch (item.action) {
                            case 'LOG_OUT':
                                dispatch(actions.setUserSession({}, false));
                                localStorage.removeItem('accessToken');
                            default:
                                break;
                        }
                    }}
                ></MenuItem>
            );
        });
    };
    return (
        <Tippy
            interactive
            offset={[12, 8]}
            trigger="click"
            placement="bottom-end"
            hideOnClick={hideOnClick}
            onHide={handleHideMenu}
            render={(attrs) => (
                <div className={cx('menu-list')} tabIndex="-1" {...attrs}>
                    <PopperWrapper className={cx('menu-popper')}>
                        {history.length > 1 && <Header heading={current.title} onBack={handleResetMenu} />}
                        <div className={cx('menu-body')}>{renderItems()}</div>
                    </PopperWrapper>
                </div>
            )}
        >
            {children}
        </Tippy>
    );
}

export default Menu;
