import TicketCard from './TicketCard';

const flightTickets = [
    {
        id: 0,
        thumbnail: 'https://pic.tripcdn.com/airline_logo/3x/vj.webp',
        brand: 'Vietjet',
        startTime: '01:00',
        arrivedTime: '05:25',
        price: 5434,
        from: 'SGN T1',
        destination: 'TPE T1',
    },
    {
        id: 1,
        thumbnail: 'https://pic.tripcdn.com/airline_logo/3x/vj.webp',
        brand: 'Vietjet',
        startTime: '01:00',
        arrivedTime: '05:25',
        price: 5434,
        from: 'SGN T1',
        destination: 'TPE T1',
    },
    {
        id: 2,
        thumbnail: 'https://pic.tripcdn.com/airline_logo/3x/vj.webp',
        brand: 'Vietjet',
        startTime: '01:00',
        arrivedTime: '05:25',
        price: 5434,
        from: 'SGN T1',
        destination: 'TPE T1',
    },
    {
        id: 3,
        thumbnail: 'https://pic.tripcdn.com/airline_logo/3x/vj.webp',
        brand: 'Vietjet',
        startTime: '01:00',
        arrivedTime: '05:25',
        price: 5434,
        from: 'SGN T1',
        destination: 'TPE T1',
    },
];

function FlightTicket() {
    return (
        <section>
            {flightTickets.map((ticket) => (
                <TicketCard key={ticket.id} data={ticket} />
            ))}
        </section>
    );
}

export default FlightTicket;
