import React from 'react';
import './InvoicesListStyle.scss';


const InvoicesList = ( { invoces } ) => {
    console.log(invoces)
    return (
       <div className='invoice_list-preview'>
           {invoces.map(({_id, comment, data_created, date_supplied, number}) => {
               return(
                   <div key={_id}>
                       {_id}
                       {comment}
                   </div>
               )
           })}
       </div>
    )
}

export default InvoicesList