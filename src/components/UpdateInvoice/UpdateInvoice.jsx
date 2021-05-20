import React, {useState, useEffect} from "react";
import {useHistory, useParams} from 'react-router-dom'
import useFetch from "../../utils/useFetch";
// npx json-server --watch data/db.json --port 8000

const UpdateInvoice = () => {
    const { id } = useParams();
    const history = useHistory();
    const [isSubmit, setIsSubmit] = useState(false);
    const {data: invoices, load,} = useFetch('http://localhost:8000/invoices/' + id)
    const [invoice, setInvoice] = useState(null)


    useEffect(() => {
        setInvoice(invoices)
    },[invoices])

    const handleSubmit = (e) => {
        e.preventDefault()
        setIsSubmit(true)
        fetch('http://localhost:8000/invoices/' + id, {
            method: "PUT",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({ _id: invoice.number,  comment: invoice.comment, number: invoice.number, date_supplied: invoice.date_supplied, date_created: invoice.date_created })
        }).then(() => {
            setIsSubmit(false)
            history.push('/')
        })
    }

    const handleInputChange = event => {
        const { name, value } = event.target
        setInvoice({ ...invoice, [name]: value })
    }
    return(
        <div className="create_invoice">
            {load && <div>...Loading</div>}
            {invoice && <form className="create_form"  onSubmit={handleSubmit}>
                <div className="create_inner">
                    <div className="create_vis vis_l">
                        <div className="input_field">
                            <label >Number:</label>
                            <input
                                type="number"
                                placeholder="Select number"
                                name="number"
                                value={invoice.number}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="input_field">
                            <label >Supply Date:</label>
                            <input
                                type="date"
                                name="date_supplied"
                                placeholder="Select date"
                                value={invoice.date_supplied}
                                onChange={handleInputChange}
                            />
                        </div>
                    </div>
                    <div className="create_vis vis_r">
                        <div className="input_field">
                            <label >Invoice Date:</label>
                            <input
                                type="date"
                                placeholder="Select date"
                                name="date_created"
                                value={invoice.date_created}
                                onChange={handleInputChange}
                            />
                        </div>
                    </div>
                </div>
                <div className="create_comment">
                    <label>Comment:</label>
                    <textarea
                        value={invoice.comment}
                        name="comment"
                        onChange={handleInputChange}
                    >
                    </textarea>
                </div>
                <div className="form_action-row">

                    <button>Update</button>
                </div>
            </form>}

        </div>
    )
}

export default UpdateInvoice