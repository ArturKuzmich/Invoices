import React, {useState} from "react";
import './CreateInvoice.scss';
import { useHistory } from 'react-router-dom'
// npx json-server --watch data/db.json --port 8000

const CreateInvoice = () => {
    const [comment, setComment] = useState('');
    const [number, setNumber] = useState('');
    const [date_supplied, setDateSupplied] = useState('');
    const [date_created, setDateCreate] = useState('')
    const [isSubmit, setIsSubmit] = useState(false);
    const history = useHistory()


    const handleSubmit = (e) => {
        e.preventDefault()
        const invoice = { comment, number, date_supplied, date_created }
        setIsSubmit(true)
        fetch('http://localhost:8000/invoices', {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(invoice)
        }).then(() => {
            console.log('added')
            setIsSubmit(false)
            history.push('/')
        })
    }

    return(
        <div className="create_invoice">
            <form className="create_form" onSubmit={handleSubmit}>
                <div className="create_inner">
                    <div className="create_vis vis_l">
                        <div className="input_field">
                            <label >Number:</label>
                            <input
                                type="number"
                                placeholder="Select number"
                                value={number}
                                onChange={(event => setNumber(event.target.value))}
                            />
                        </div>
                        <div className="input_field">
                            <label >Supply Date:</label>
                            <input
                                type="date"
                                placeholder="Select date"
                                value={date_supplied}
                                onChange={(event => setDateSupplied(event.target.value))}
                            />
                        </div>
                    </div>
                    <div className="create_vis vis_r">
                        <div className="input_field">
                            <label >Invoice Date:</label>
                            <input
                                type="date"
                                placeholder="Select date"
                                value={date_created}
                                onChange={(event => setDateCreate(event.target.value))}

                            />
                        </div>
                    </div>
                </div>
                <div className="create_comment">
                    <label>Comment:</label>
                    <textarea
                        value={comment}
                        onChange={(event => setComment(event.target.value))}
                    >
                    </textarea>
                </div>
                <div className="form_action-row">

                    <button>Save</button>
                </div>
            </form>
        </div>
    )
}

export default CreateInvoice