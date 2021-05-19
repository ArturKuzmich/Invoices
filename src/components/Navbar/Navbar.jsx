import React from 'react';
import './NavbarStyle.scss';
import { useLocation } from 'react-router-dom';

const Navbar = () => {
    const location = useLocation()

    const rerenderText = () => {
        if(location.pathname === '/'){
            return 'Invoices'
        }else{
            return 'Create Invoices'
        }
    }
    return (
        <header className="invoice_header">
            <h1 className="header_title">
                {rerenderText()}
            </h1>
        </header>
    )
}

export default Navbar