import { Home, Login, Signup, About, Contact } from '../pages';
import { DefaultLayout, WrapperLayout } from '../layouts';

const publicRoutes = [
    { id: 0, path: '/', component: Home, layout: DefaultLayout },
    { id: 1, path: '/login', component: Login, layout: WrapperLayout },
    { id: 2, path: '/about', component: About, layout: DefaultLayout },
    { id: 3, path: '/contact', component: Contact, layout: DefaultLayout },
    { id: 4, path: '/signup', component: Signup, layout: WrapperLayout },
];

export { publicRoutes };
