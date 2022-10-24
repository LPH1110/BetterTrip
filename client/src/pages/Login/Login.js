import axios from 'axios';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { useRef, useState, createRef } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import { actions, useStore } from '~/store';
import { Image, Toast } from '~/components';
import images from '~/assets/images';

function Login() {
    const navigate = useNavigate();
    const toastRef = createRef();
    const [showToast, setShowToast] = useState(false);
    const [toastBody, setToastBody] = useState({
        message: '',
        status: 'default',
    });
    const [, dispatch] = useStore();

    const authenForm = useRef();

    const initialValues = {
        email: '',
        password: '',
    };

    const validationSchema = Yup.object().shape({
        email: Yup.string().email().required(),
        password: Yup.string().min(8).required(),
    });

    const handleSubmit = async (data) => {
        try {
            const res = await axios.post('http://localhost:3001/auth/login', data);
            const { error } = res.data;
            setShowToast(true);
            setTimeout(() => {
                setShowToast(false);
            }, 2000);

            if (!error) {
                setToastBody({ message: 'Logged in successfully!', status: 'success' });
                const { accessToken } = res.data;
                localStorage.setItem('accessToken', accessToken);
                dispatch(actions.setUserSession(res.data, true));

                setTimeout(() => {
                    navigate('/');
                }, 2000);
            } else {
                setToastBody({ message: error, status: 'error' });
            }
        } catch (e) {
            console.error(e);
        }
    };

    const handleErrorMessage = (message, name) => {
        // const inputElement = authenForm.current.querySelector(`[name='${name}']`);
        // inputElement.classList.add('ring-pink-600');
        return <div className="text-pink-600">{message.replace(name, 'This field')}</div>;
    };

    return (
        <section className="flex flex-col items-center justify-center h-screen">
            <NavLink end to="/" className="mb-8 p-4 max-w-[20rem]">
                <Image src={images.logo} alt="logo" />
            </NavLink>
            <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
                <Form ref={authenForm} className="w-full max-w-lg">
                    <section className="mb-6 flex flex-col">
                        <label htmlFor="email" className="text-slate-900 font-semibold">
                            Email address
                        </label>
                        <Field
                            name="email"
                            type="email"
                            className="mt-[0.64rem] px-3 py-2 focus:outline-none ring-1 ring-slate-200 focus:ring-2 focus:ring-sky-400 shadow-sm rounded-md"
                        />
                        <ErrorMessage name="email">{(message) => handleErrorMessage(message, 'email')}</ErrorMessage>
                    </section>
                    <section className="mb-6 flex flex-col">
                        <label htmlFor="password" className="text-slate-900 font-semibold">
                            Password
                        </label>
                        <Field
                            name="password"
                            type="password"
                            className="mt-[0.64rem] px-3 py-2 focus:outline-none ring-1 ring-slate-200 focus:ring-2 focus:ring-sky-400 shadow-sm rounded-md"
                        />
                        <ErrorMessage name="password">
                            {(message) => handleErrorMessage(message, 'password')}
                        </ErrorMessage>
                    </section>
                    <button
                        type="submit"
                        className="inline-flex justify-center items-center w-full px-4 py-3.5 mt-8 font-semibold rounded-lg text-white bg-slate-900 hover:bg-slate-700"
                    >
                        Sign in to account
                    </button>
                </Form>
            </Formik>
            <p className="p-4 mt-8">
                Having no account?{' '}
                <NavLink to="/signup" className="hover:underline hover:underline-offset-4 ml-1 text-sky-500">
                    Create a new one!
                </NavLink>
            </p>
            {showToast && <Toast ref={toastRef} message={toastBody.message} status={toastBody.status} />}
        </section>
    );
}

export default Login;
