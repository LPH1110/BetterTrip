import { Home, Login } from '../components';
import { DefaultLayout, WrapperLayout } from '../layouts';

const publicRoutes = [
    { id: 0, path: '/', component: Home, layout: DefaultLayout },
    { id: 1, path: '/login', component: Login, layout: WrapperLayout },
];

export { publicRoutes };
