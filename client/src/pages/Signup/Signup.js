import axios from 'axios';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';

function Signup() {
    const [email, setEmail] = useState('');
    const navigate = useNavigate();

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
            const res = await axios.post('http://localhost:3001/auth/store', data);
            console.log(res.data);
            navigate('/login');
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
                        Create account
                    </button>
                </Form>
            </Formik>
        </section>
    );
}

export default Signup;
