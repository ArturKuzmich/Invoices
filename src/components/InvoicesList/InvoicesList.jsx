import React from 'react';
import './InvoicesListStyle.scss';
import PropTypes from 'prop-types';

const InvoicesList = ( { invoices, handleDelete } ) => {
    return (
       <div className='invoice_list-preview'>
           {invoices.map(({ _id, comment, data_created, date_supplied, number }) => {
               return(
                   <div className="list_view" key={_id} >
                       <div className="view_inner">
                           {comment}
                       </div>
                   </div>
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