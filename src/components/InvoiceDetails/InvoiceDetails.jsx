import React from 'react';
import { useParams } from 'react-router-dom'
import './InvoiceDetailsStyle.scss';
import useFetch from "../../utils/useFetch";

const InvoiceDetails =() => {
    const { id } = useParams()
    const {data: invoices, load,} = useFetch('http://localhost:8000/invoices/' + id)
    return(
        <div>

        </div>
    )
}

export default InvoiceDetails