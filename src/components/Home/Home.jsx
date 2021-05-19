import React, { useState, useEffect } from 'react';
import './HomeStyle.scss';
import InvoicesList from "../InvoicesList/InvoicesList";
import {Link} from "react-router-dom";


const Home = () => {
    const [invoices, setInvoices] = useState(null);
    const [load, setLoad] = useState(true)

    const handleDelete = (id) => {
        const newInvoices = invoices.filter(invoice => invoice._id !== id);
        setInvoices(newInvoices);
    }
    useEffect(() => {
            fetch(`http://localhost:8000/invoices`)
                .then(response => {
                    if(!response.ok){
                        throw Error
                    }
                    return  response.json()
                }).then(data => {
                setInvoices(data)
                setLoad(false)
            }).catch(err => {
                console.log(err.message)
            })
    },[])
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
            {invoices && <InvoicesList invoices={invoices} handleDelete={handleDelete}/>}
        </div>
    )
}

export default Home