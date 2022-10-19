import React from 'react';

function DialogContainer({ authentication }) {
    return (
        <section className="modal ml-0 inset-0 fixed flex items-center justify-center">
            <section className="modal-overlay absolute w-full h-full bg-gray-500 opacity-50"></section>
            <section className="modal-body bg-white z-20"></section>
        </section>
    );
}

export default DialogContainer;
