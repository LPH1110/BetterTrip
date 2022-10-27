import { Button, Image } from '~/components';
import { NavLink } from 'react-router-dom';
import images from '~/assets/images';
import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import FootNavs from './FootNavs';

const socials = [
    {
        id: 0,
        icon: <Image src={images.facebookIcon} alt="Facebook" />,
        to: '/facebook',
    },
    {
        id: 1,
        icon: <Image src={images.instagramIcon} alt="Instagram" />,
        to: '/instagram',
    },
    {
        id: 2,
        icon: <Image src={images.twitterIcon} alt="Twitter" />,
        to: '/twitter',
    },
    {
        id: 3,
        icon: <Image src={images.linkedinIcon} alt="Linkedin" />,
        to: '/linkedin',
    },
];

const navs = [
    {
        id: 0,
        title: 'Product',
        items: [
            { id: 0, title: 'Features' },
            { id: 1, title: 'Pricing' },
            { id: 2, title: 'Case studies' },
            { id: 3, title: 'Reviews' },
            { id: 4, title: 'Updates' },
        ],
    },
    {
        id: 1,
        title: 'Company',
        items: [
            { id: 0, title: 'About' },
            { id: 1, title: 'Contact us' },
            { id: 2, title: 'Careers' },
            { id: 3, title: 'Culture' },
            { id: 4, title: 'Blog' },
        ],
    },
    {
        id: 2,
        title: 'Support',
        items: [
            { id: 0, title: 'Getting started' },
            { id: 1, title: 'Help center' },
            { id: 2, title: 'Server status' },
            { id: 3, title: 'Report a bug' },
            { id: 4, title: 'Chat support' },
        ],
    },
];

function Footer() {
    return (
        <footer className="px-[3.2rem] pt-12 pb-4 bg-gray-900">
            <section className="border-b border-slate-500 pb-32 flex justify-between">
                <section className="mr-48 max-w-1/4">
                    {/* <NavLink end to="/" className="mr-3 py-3 flex-none w-52 h-full flex items-center">
                        <Image src={images.logo} alt="logo" />
                    </NavLink> */}
                    <p className="text-white my-4">Lorem ipsum dolor sit amet consectetur adipiscing elit aliquam</p>
                    <div>
                        {socials.map((social) => (
                            <Button className="p-0 min-w-0" key={social.id} to={social.to}>
                                {social.icon}
                            </Button>
                        ))}
                    </div>
                </section>
                <section className="text-white grid grid-flow-col gap-4 flex-1">
                    {navs.map((nav) => (
                        <FootNavs key={nav.id} data={nav} />
                    ))}
                </section>
                <section className="px-4 mx-4">
                    <h5 className="mb-7 text-white">Contact us</h5>
                    <div className="flex flex-col text-xl text-slate-200">
                        <div>
                            <a className="flex items-center justify-start mb-5">
                                <Image src={images.envelopeIcon} alt="evelope" />
                                <span className="ml-2">support@bettertrip.com</span>
                            </a>
                            <a className="flex items-center justify-start mb-5">
                                <Image src={images.phoneCallIcon} alt="phone" />
                                <span className="ml-2">(414) 687 - 5892</span>
                            </a>
                            <a className="flex items-center justify-start mb-5">
                                <Image src={images.markerIcon} alt="marker" />
                                <span className="ml-2">TDTU, District 7, HCMC, VietNam</span>
                            </a>
                        </div>
                    </div>
                </section>
            </section>
            <section className="flex justify-between py-4">
                <p className="text-lg text-slate-400">Copyright © 2022 BetterTrip Vietnam. All rights reserved.</p>
                <div className="text-lg text-slate-400">
                    <a href="/terms-conditions" className="ease duration-200 hover:text-sky-400">
                        Terms and Conditions
                    </a>
                    <span className="mx-2">|</span>
                    <a href="privacy-policy" className="ease duration-200 hover:text-sky-400">
                        Privacy Policy
                    </a>
                </div>
            </section>
        </footer>
    );
}

export default Footer;
