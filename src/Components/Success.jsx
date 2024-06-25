import React from 'react';
import { useLocation } from 'react-router-dom';

const Success = () => {
    const location = useLocation();
    console.log(location);

    return (
        <div className="container">
            <div className="payment-section">
            <h2>Payment Successful</h2>
            <p>Your payment has been successfully processed for your visa application.</p>
            <div className="mb-3">
                <label for="referenceNo" className="form-label">Reference No.</label>
                <input type="text" className="form-control" id="referenceNo" value="777820385327" readonly />
            </div>
            <div className="mb-3">
                <label for="amount" className="form-label">Amount</label>
                <input type="text" className="form-control" id="amount" value="$140.00" readonly />
            </div>
            <button type="button" class="btn btn-primary">Continue</button>
            </div>
        </div>
    );
}

export default Success;
