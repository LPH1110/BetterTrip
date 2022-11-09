import { solid, regular } from '@fortawesome/fontawesome-svg-core/import.macro';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NavLink } from 'react-router-dom';
import { Tab } from '@headlessui/react';
import HeadlessTippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';

import images from '~/assets/images';
import { BoxContainer, Button, Image } from '~/components';
import styles from './Flight.module.scss';



function Flight() {
    return (
        <section className="h-full w-full pb-8">
            <BoxContainer />
            <div className="container-sm px-4 w-50 ">
            <form className="margin box" onSubmit="">
                <div className="text-center">
                    Buy Flight Ticket
                </div>

                <div className="text-center form-group">
                    <h4 className="form-error"></h4>
                </div>

                <div className="text-center form-group">
                    From
                    <input className="form-control" type="text" placeholder="Ho Chi Minh city"></input>
                </div>

                <p className=" text-center fs-10 text-wrap text-secondary">Bạn đồng ý với điều khoản, chính sách dữ liệu và chính sách cookie của chúng tôi.</p>
            </form>
        </div>
        </section>
        
    );
}

export default Flight;
