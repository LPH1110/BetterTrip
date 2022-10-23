import { NavLink } from 'react-router-dom';

function AuthenBar() {
    return (
        <>
            <NavLink to="/login" className="px-3 py-2 text-slate-700 rounded-lg hover:text-sky-500">
                Login
            </NavLink>
            <NavLink
                to="/signup"
                className="px-3 py-2  text-white font-semibold rounded-lg hover:bg-sky-300 bg-sky-400"
            >
                Sign up
            </NavLink>
        </>
    );
}

export default AuthenBar;
