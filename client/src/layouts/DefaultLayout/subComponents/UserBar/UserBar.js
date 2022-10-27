import { solid, regular } from '@fortawesome/fontawesome-svg-core/import.macro';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useRef } from 'react';

import { Menu } from '~/components';
import { SettingIcon, TiktokIcon, UserIcon } from '~/components/Icon';

const USER_NAVIGATIONS = [
    {
        id: 0,
        icon: <UserIcon />,
        title: 'View profile',
        to: '/profile',
    },
    {
        id: 1,
        icon: <FontAwesomeIcon icon={regular('heart')} />,
        title: 'Favorites',
        to: '/my_favorites',
    },
    {
        id: 2,
        icon: <SettingIcon />,
        title: 'Settings',
        to: '/settings',
    },
    {
        id: 3,
        icon: <FontAwesomeIcon icon={solid('arrow-right-to-bracket')} />,
        title: 'Log out',
        to: '/',
        separate: true,
        action: 'LOG_OUT',
    },
];

function UserBar() {
    const userBtn = useRef();

    return (
        <Menu items={USER_NAVIGATIONS} hideOnClick>
            <button
                ref={userBtn}
                className="flex justify-between items-center py-2.5 pr-2.5 pl-4 border rounded-full border-slate-300 hover:shadow-[0_2px_4px_rgba(0,0,0,0.18)] ease-in-out duration-200"
            >
                <div>
                    <svg
                        viewBox="0 0 32 32"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                        role="presentation"
                        focusable="false"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={3}
                        className="h-6 w-6 text-slate-500"
                    >
                        <g fill="none" fillRule="nonzero">
                            <path d="m2 16h28"></path>
                            <path d="m2 24h28"></path>
                            <path d="m2 8h28"></path>
                        </g>
                    </svg>
                </div>
                <div className="h-9 w-9 ml-4">
                    <svg
                        viewBox="0 0 32 32"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                        role="presentation"
                        focusable="false"
                        fill="currentColor"
                        className="block text-slate-500 w-full h-full"
                    >
                        <path d="m16 .7c-8.437 0-15.3 6.863-15.3 15.3s6.863 15.3 15.3 15.3 15.3-6.863 15.3-15.3-6.863-15.3-15.3-15.3zm0 28c-4.021 0-7.605-1.884-9.933-4.81a12.425 12.425 0 0 1 6.451-4.4 6.507 6.507 0 0 1 -3.018-5.49c0-3.584 2.916-6.5 6.5-6.5s6.5 2.916 6.5 6.5a6.513 6.513 0 0 1 -3.019 5.491 12.42 12.42 0 0 1 6.452 4.4c-2.328 2.925-5.912 4.809-9.933 4.809z"></path>
                    </svg>
                </div>
            </button>
        </Menu>
    );
}

export default UserBar;
