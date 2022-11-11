import { NavLink } from 'react-router-dom';
import { useRef, useEffect } from 'react';
import { Tab } from '@headlessui/react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import { UserBar, AuthenBar } from '~/layouts/DefaultLayout/subComponents';
import { Image } from '~/components';
import images from '~/assets/images';
import { useStore } from '~/store';
import classNames from 'classnames/bind';
import styles from './Payment.module.scss';

const cx = classNames.bind(styles);

function Payment() {
    const [state, dispatch] = useStore();
    const { loggedIn } = state;
    const header = useRef();

    const initialValues = {
        cardNumber: '',
        validUntilDate: '',
        cvv: '',
        cardName: '',
    };

    const validationSchema = Yup.object().shape({
        cardNumber: Yup.string().required(),
        validUntilDate: Yup.string().required(),
        cvv: Yup.string().required(),
        cardName: Yup.string().required(),
    });

    const handleSubmit = (data) => {
        console.log(data);
    };

    useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth',
        });
    }, []);

    return (
        <section>
            <header
                ref={header}
                className="bg-white justify-between transition-[border] ease-in-out duration-300 w-full border-b border-slate-200 inset-0 flex items-center h-[6.4rem] fixed z-[10000]"
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
                        <Image className="max-w-[85%]" src={images.logo} alt="logo" />
                    </NavLink>
                </nav>

                <nav className="flex flex-1 h-full pr-[3.2rem] justify-end items-center space-x-4">
                    {loggedIn ? <UserBar /> : <AuthenBar />}
                </nav>
            </header>
            <section className="mt-24 py-7 h-screen w-screen bg-slate-200 flex items-start justify-center">
                <section className="w-[80%] h-24 bg-transparent grid grid-cols-3 gap-x-5">
                    <section className="bg-white h-full col-span-2 rounded-lg">
                        <div className="w-full h-full grid grid-cols-3 gap-x-4">
                            <div className="h-full bg-sky-500">
                                <ul>
                                    <li
                                        className={cx(
                                            'bg-white ease duration-100 cursor-pointer px-2 py-3 hover:bg-slate-100',
                                        )}
                                    >
                                        Card payment
                                    </li>
                                    <li
                                        className={cx('tab', 'ease duration-100 cursor-pointer p-2 hover:bg-slate-100')}
                                    >
                                        Bank payment
                                    </li>
                                    <li
                                        className={cx('tab', 'ease duration-100 cursor-pointer p-2 hover:bg-slate-100')}
                                    >
                                        Store payment
                                    </li>
                                    <li
                                        className={cx('tab', 'ease duration-100 cursor-pointer p-2 hover:bg-slate-100')}
                                    >
                                        ATM payment
                                    </li>
                                </ul>
                            </div>
                            <div className="col-span-2 p-4">
                                <h1 className="text-3xl font-semibold mb-8">Card payment</h1>
                                <div>
                                    <Formik
                                        validationSchema={validationSchema}
                                        initialValues={initialValues}
                                        onSubmit={handleSubmit}
                                    >
                                        <Form className="">
                                            <section className="flex flex-col mt-6">
                                                <label htmlFor="cardNumber" className="">
                                                    Card number
                                                </label>
                                                <Field
                                                    name="cardNumber"
                                                    type="cardNumber"
                                                    className="rounded-md text-slate-500 text-2xl p-2 border border-slate-100 outline-none"
                                                />
                                                <ErrorMessage name="cardNumber"></ErrorMessage>
                                            </section>
                                            <div className="flex justify-between">
                                                <section className="flex flex-col mt-6 mr-6 max-w-[50%]">
                                                    <label htmlFor="validUntilDate" className="">
                                                        Valid until
                                                    </label>
                                                    <Field
                                                        name="validUntilDate"
                                                        type="validUntilDate"
                                                        className="rounded-md text-slate-500 text-2xl p-2 border border-slate-100 outline-none"
                                                    />
                                                    <ErrorMessage name="validUntilDate"></ErrorMessage>
                                                </section>
                                                <section className="flex flex-col mt-6 max-w-[30%]">
                                                    <label htmlFor="cvv" className="">
                                                        CVV
                                                    </label>
                                                    <Field
                                                        name="cvv"
                                                        type="cvv"
                                                        className="rounded-md text-slate-500 text-2xl p-2 border border-slate-100 outline-none"
                                                    />
                                                    <ErrorMessage name="cvv"></ErrorMessage>
                                                </section>
                                            </div>
                                            <section className="flex flex-col mt-6">
                                                <label htmlFor="cardName" className="">
                                                    Your card name
                                                </label>
                                                <Field
                                                    name="cardName"
                                                    type="cardName"
                                                    className="rounded-md text-slate-500 text-2xl p-2 border border-slate-100 outline-none"
                                                />
                                                <ErrorMessage name="cardName"></ErrorMessage>
                                            </section>

                                            <button
                                                type="submit"
                                                className="p-2 bg-sky-500 hover:bg-sky-400 ease-in-out duration-200 text-slate-100 font-semibold rounded-md mt-8 mb-5"
                                            >
                                                Check out
                                            </button>
                                        </Form>
                                    </Formik>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="p-5 bg-white rounded-lg"></section>
                </section>
            </section>
        </section>
    );
}

export default Payment;
