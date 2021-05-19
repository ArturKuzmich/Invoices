import React from "react";
import './CreateInvoice.scss';

const CreateInvoice = () => {
    return(
        <div className="create_invoice">
            <form className="create_form">
                <div className="create_vis vis_l">
                    <div className="input_field">
                        <label >Number:</label>
                        <input type="number" placeholder="Select number"/>
                    </div>
                    <div className="input_field">
                        <label >Supply Date:</label>
                        <input type="date" placeholder="Select date"/>
                    </div>
                </div>
                <div className="create_vis vis_r">
                    <div className="input_field">
                        <label >Invoice Date:</label>
                        <input type="date" placeholder="Select date"/>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default CreateInvoice