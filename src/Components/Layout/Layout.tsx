import React from 'react';
import "./Layout.css";

function Layout(props:any) {
    const { children } = props;
    return (
        <div className="layout">
            {children}
        </div>
    );
}

export default Layout;
