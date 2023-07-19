import React, { useState } from 'react';
// import "./payment.css";

const PaymentPage = () => {
  const [cardNumber, setCardNumber] = useState('');
  const [cardName, setCardName] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCVV] = useState('');

  const handleCardNumberChange = (e) => {
    setCardNumber(e.target.value);
  };

  const handleCardNameChange = (e) => {
    setCardName(e.target.value);
  };

  const handleExpiryDateChange = (e) => {
    setExpiryDate(e.target.value);
  };

  const handleCVVChange = (e) => {
    setCVV(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Payment submitted');
  };

  return (
    <>
    
    <div className="d-flex justify-content-center align-items-center vh-100 ">
      <div className="container paymentForm">
        {/* <h1 className="text-center ">Payment Page</h1> */}
        <form onSubmit={handleSubmit}>
        <fieldset>
        <legend>Payment</legend>
          <div className="mb-3">
            <label htmlFor="cardNumber" className="form-label">Card Number</label>
            <input
              type="number"
              id="cardNumber"
              className="form-control"
              value={cardNumber}
              onChange={handleCardNumberChange}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="cardName" className="form-label">Cardholder Name</label>
            <input
              type="text"
              id="cardName"
              className="form-control"
              value={cardName}
              onChange={handleCardNameChange}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="expiryDate" className="form-label">Expiry Date</label>
            <input
              type="date"
              id="expiryDate"
              className="form-control"
              value={expiryDate}
              onChange={handleExpiryDateChange}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="cvv" className="form-label">CVV</label>
            <input
              type="text"
              id="cvv"
              className="form-control"
              value={cvv}
              onChange={handleCVVChange}
            />
          </div>

          <div className="text-center">
            <button type="submit" className="btn btn-primary">Submit</button>
          </div>
          </fieldset>
        </form>
      </div>
    </div>
    
    </>
  );
};

export default PaymentPage;
