import React, { useState, useEffect } from 'react';
import './HomeStyle.scss';
import InvoicesList from "../InvoicesList/InvoicesList";


const Home = () => {
    const [invoices, setInvoices] = useState(null);

    const handleDelete = (id) => {
        const newInvoices = invoices.filter(invoice => invoice._id !== id);
        setInvoices(newInvoices);
    }
    useEffect(() => {
        fetch(`http://localhost:8000/invoices`)
            .then(response => {
               return  response.json()
            }).then(data => {
            setInvoices(data)
        })
    },[])
    return (
        <div className="invoice_content">
            <div className="invoices_actions">
                <h4 className="actions_title">Actions</h4>
                <div className="actions_row-list">
                    <button className="bnt_actions">
                        Add new
                    </button>
                </div>
            </div>
           <InvoicesList invoices={invoices}  handleDelete={handleDelete} />
        </div>
    )
}

export default Home