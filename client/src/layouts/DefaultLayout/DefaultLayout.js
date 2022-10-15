import React from 'react';

function DefaultLayout({ children }) {
    return (
        <div className="wrapper">
            <header>header</header>
            <div className="content">{children}</div>
        </div>
    );
}

export default DefaultLayout;
