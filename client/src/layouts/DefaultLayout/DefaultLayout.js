import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import images from '~/assets/images';
import { Image } from '~/components';
import { AuthenBar, UserBar } from './subComponents';
import { useStore, actions } from '~/store';
import axios from 'axios';

const navItems = [
    { id: 0, title: 'Home', path: '/' },
    { id: 1, title: 'About', path: '/about' },
    { id: 2, title: 'Contact', path: '/contact' },
];

function DefaultLayout({ children }) {
    const [state, dispatch] = useStore();
    const { loggedIn } = state;

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

    return (
        <section className="wrapper">
            <header className="flex items-center h-[6.4rem] border-b boder-slate-200">
                <nav className="flex flex-1 py-6 px-[3.2rem] justify-start items-center space-x-4">
                    <NavLink end to="/" className="mr-3 py-3 flex-none w-52 h-full block">
                        <Image src={images.logo} />
                    </NavLink>
                    {navItems.map((item) => {
                        return item.path === '/' ? (
                            <NavLink
                                end
                                key={item.id}
                                to={item.path}
                                style={({ isActive }) => (isActive ? activeStyle : undefined)}
                                className={'px-3 py-2 text-slate-700 rounded-lg hover:text-slate-500'}
                            >
                                {item.title}
                            </NavLink>
                        ) : (
                            <NavLink
                                key={item.id}
                                to={item.path}
                                style={({ isActive }) => (isActive ? activeStyle : undefined)}
                                className={'px-3 py-2 text-slate-700 rounded-lg hover:text-slate-500'}
                            >
                                {item.title}
                            </NavLink>
                        );
                    })}
                </nav>

                <nav className="flex flex-1 py-6 pr-[3.2rem] justify-end items-center space-x-4">
                    {loggedIn ? <UserBar /> : <AuthenBar />}
                </nav>
            </header>
            <section className="content">{children}</section>
        </section>
    );
}

export default DefaultLayout;
