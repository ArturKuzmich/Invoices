import React from 'react';
import { useParams, useHistory } from 'react-router-dom'
import './InvoiceDetailsStyle.scss';
import useFetch from "../../utils/useFetch";

const InvoiceDetails =() => {
    const { id } = useParams()
    const {data: invoices, load,} = useFetch('http://localhost:8000/invoices/' + id)
    const history = useHistory()


    const handleDelete = () => {
        fetch('http://localhost:8000/invoices/' + invoices._id, {
            method: "DELETE",
        } ).then(() => {
            history.push('/')
        })
    }
    return(
        <div className="invoice_details">
            {load && <div>...Loading</div>}
            {invoices && (
                <div className="details_inner">
                    <div className="invoice_row">
                        <div className='date'>Date Create: <span>{invoices.date_created}</span></div>
                        <div className='date'>Date Supplied: <span>{invoices.date_supplied}</span></div>
                    </div>
                    <p className="invoice_comment">
                        {invoices.comment}
                    </p>
                    <div className="invoice_row row_actions">
                        <button className="action_btn">Edit</button>
                        <button className="action_btn" onClick={handleDelete}>Delete</button>
                    </div>
                </div>
            )}
        </div>
    )
}

export default InvoiceDetails