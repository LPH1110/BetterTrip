import classNames from 'classnames/bind';
import { NavLink } from 'react-router-dom';
import styles from './DefaultLayout.module.scss';
import { Image, DialogContainer } from '~/components';
import images from '~/assets/images';

const cx = classNames.bind(styles);

const navItems = [
    { id: 0, title: 'Home', path: '/' },
    { id: 1, title: 'About', path: '/about' },
    { id: 2, title: 'Contact', path: '/contact' },
];

function DefaultLayout({ children }) {
    const activeStyle = {
        color: 'rgb(14 165 233)',
    };
    return (
        <section className="wrapper">
            <header className="flex items-center h-[6.4rem]">
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
                    <NavLink to="/login" className="px-3 py-2 text-slate-700 font-semibold rounded-lg hover:text-sky-500">
                        Login
                    </NavLink>
                    <NavLink to="/signup" className="px-3 py-2  text-white font-semibold rounded-lg hover:bg-sky-300 bg-sky-400">
                        Sign up
                    </NavLink>
                </nav>
            </header>
            <section className="content">{children}</section>
        </section>
    );
}

export default DefaultLayout;
