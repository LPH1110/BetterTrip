import axios from 'axios';
import { useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames/bind';
import images from '~/assets/images';
import { actions, useStore } from '~/store';
import { AuthenBar, UserBar } from './subComponents';
import { Image } from '~/components';
import { Footer } from '../components';
import styles from './DefaultLayout.module.scss';

const cx = classNames.bind(styles);

const navItems = [
    { id: 0, title: 'Home', path: '/' },
    { id: 1, title: 'About', path: '/about' },
    { id: 2, title: 'Contact', path: '/contact' },
];

function DefaultLayout({ children }) {
    const [state, dispatch] = useStore();
    const { loggedIn } = state;
    const header = useRef();

    useEffect(() => {
        const authenticate = async () => {
            try {
                const res = await axios.get('http://localhost:3001/auth/validate', {
                    headers: {
                        accessToken: localStorage.getItem('accessToken'),
                    },
                });
                const { error } = res.data;
                if (!error) {
                    dispatch(actions.setUserSession(res.data, true));
                }
            } catch (e) {
                console.error("Can't authenticate user");
            }
        };

        authenticate();
    }, []);

    const activeStyle = {
        color: 'rgb(14 165 233)',
    };

    //border-b boder-slate-200
    return (
        <section className="wrapper">
            <header
                ref={header}
                className="bg-slate-100 justify-between transition-[border] ease-in-out duration-300 w-full border-b border-slate-200 inset-0 flex items-center h-[6.4rem] fixed z-10"
            >
                <nav className="flex flex-1 h-full px-[3.2rem] justify-start items-center space-x-4">
                    <NavLink
                        onClick={() => {
                            window.scrollTo({
                                top: 0,
                                left: 0,
                                behavior: 'smooth',
                            });
                        }}
                        end
                        to="/"
                        className="mr-3 py-3 flex-none w-52 h-full flex items-center"
                    >
                        <Image className={cx('header_logo')} src={images.logo} alt="logo" />
                    </NavLink>
                    {navItems.map((item) => {
                        return item.path === '/' ? (
                            <NavLink
                                end
                                key={item.id}
                                to={item.path}
                                style={({ isActive }) => (isActive ? activeStyle : undefined)}
                                className={
                                    'ease-in-out duration-200 px-3 py-2 text-slate-700 rounded-lg hover:text-slate-500'
                                }
                            >
                                {item.title}
                            </NavLink>
                        ) : (
                            <NavLink
                                key={item.id}
                                to={item.path}
                                style={({ isActive }) => (isActive ? activeStyle : undefined)}
                                className={
                                    'ease-in-out duration-200 px-3 py-2 text-slate-700 rounded-lg hover:text-slate-500'
                                }
                            >
                                {item.title}
                            </NavLink>
                        );
                    })}
                </nav>

                <nav className="flex flex-1 h-full pr-[3.2rem] justify-end items-center space-x-4">
                    {loggedIn ? <UserBar /> : <AuthenBar />}
                </nav>
            </header>
            <section className="content w-screen mt-[6.4rem]">{children}</section>
            <Footer />
        </section>
    );
}

export default DefaultLayout;
