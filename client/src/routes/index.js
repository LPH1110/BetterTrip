import { Home, Login, Signup, FlightTicket, TrainTicket, PlaceDetail, Checkout, Payment } from '../pages';
import { DefaultLayout, WrapperLayout } from '../layouts';

const publicRoutes = [
    { id: 0, path: '/', component: Home, layout: DefaultLayout },
    { id: 1, path: '/login', component: Login, layout: WrapperLayout },
    { id: 2, path: '/flights', component: FlightTicket, layout: DefaultLayout },
    { id: 3, path: '/trains', component: TrainTicket, layout: DefaultLayout },
    { id: 4, path: '/signup', component: Signup, layout: WrapperLayout },
    { id: 5, path: '/places/:slug', component: PlaceDetail, layout: DefaultLayout },
    { id: 6, path: '/checkout', component: Checkout, layout: WrapperLayout },
    { id: 6, path: '/payment', component: Payment, layout: WrapperLayout },
];

export { publicRoutes };
