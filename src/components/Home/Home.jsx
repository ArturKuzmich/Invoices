import React, { useState, useEffect } from 'react';
import './HomeStyle.scss';
import InvoicesList from "../InvoicesList/InvoicesList";
import {Link} from "react-router-dom";
import useFetch from "../../utils/useFetch";


const Home = () => {
    const {data: invoices, load,} = useFetch('http://localhost:8000/invoices')

    return (
        <div className="invoice_content">
            <div className="invoices_actions">
                <h4 className="actions_title">Actions</h4>
                <div className="actions_row-list">
                    <Link to="/create" className="link_actions">
                        Add new
                    </Link>
                </div>
            </div>
            {load && <div>...Loading</div>}
            {invoices && <InvoicesList invoices={invoices} />}
        </div>
    )
}

export default Home