import React from 'react';
import './InvoicesListStyle.scss';
import PropTypes from 'prop-types';
import {Link} from "react-router-dom";

const InvoicesList = ( { invoices } ) => {
    return (
       <div className='invoice_list-preview'>
           <h3 className="invoices_title">Invoices</h3>
           <div className="invoice_head">
            <span className="head_item">Create</span>
            <span className="head_item">No</span>
            <span className="head_item">Supply</span>
            <span className="head_item">Comment</span>
            <span className="head_item"></span>
           </div>
           {invoices.map(({ _id, comment, date_created, date_supplied, number }) => {
               return(
                   <Link to={`/invoice/${_id}`} className="list_view" key={_id} >
                        <div className="list_item">{date_created}</div>
                       <div className="list_item">{number}</div>
                       <div className="list_item">{date_supplied}</div>
                       <div className="list_item item_comment">{comment}</div>
                   </Link>
               )
           })}
       </div>
    )
}

export default InvoicesList;

InvoicesList.propTypes = {
    invoices: PropTypes.array,
    handleDelete: PropTypes.func

}