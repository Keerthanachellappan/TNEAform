import React, { useState } from 'react';


const Specialreservation = ({ nextStep, prevStep }) => {
  const [formData, setFormData] = useState({
    sportsPerson: "",
    exserviceman: "",
    differentlyAbled: "",
    tfcNumber: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  return (
    <div>
      <div className="form-container">
        <div className="container mx-6 mt-3 border">
          <div className="heading">
            <h2>2. Special Reservation Information</h2>
          </div>

          {/* Sports Person */}
          <div className="mb-3 row">
            <label className="col-form-label">
              Whether you are a candidate under quota for Eminent Sports Person as per annexure-II, item No.22 of information brochure?
            </label>
            <div className="col-sm-10">
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  name="sportsPerson"
                  value="yes"
                  checked={formData.sportsPerson === "yes"}
                  onChange={handleChange}
                />
                <label className="form-check-label">Yes</label>
              </div>
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  name="sportsPerson"
                  value="no"
                  checked={formData.sportsPerson === "no"}
                  onChange={handleChange}
                />
                <label className="form-check-label">No</label>
              </div>
              <div className="invalid-feedback">
                Please select if you are a Sports person or not.
              </div>
            </div>
          </div>

          {/* EX-Service Man */}
          <div className="mb-3 row">
            <label className="col-form-label">
              Ex-Serviceman (Only Army/Navy/Air force services are Eligible)
            </label>
            <div className="col-sm-10">
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  name="exserviceman"
                  value="yes"
                  checked={formData.exserviceman === "yes"}
                  onChange={handleChange}
                />
                <label className="form-check-label">Yes</label>
              </div>
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  name="exserviceman"
                  value="no"
                  checked={formData.exserviceman === "no"}
                  onChange={handleChange}
                />
                <label className="form-check-label">No</label>
              </div>
              <div className="invalid-feedback">
                Please select Ex-Serviceman or not.
              </div>
            </div>
          </div>

          {/* Differently Abled Person */}
          <div className="mb-3 row">
            <label className="col-form-label ">
              Differently Abled Person
            </label>
            <div className="col-sm-10">
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  name="differentlyAbled"
                  value="yes"
                  checked={formData.differentlyAbled === "yes"}
                  onChange={handleChange}
                />
                <label className="form-check-label">Yes</label>
              </div>
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  name="differentlyAbled"
                  value="no"
                  checked={formData.differentlyAbled === "no"}
                  onChange={handleChange}
                />
                <label className="form-check-label">No</label>
              </div>
              <div className="invalid-feedback">
                Please select if you are differently abled.
              </div>
            </div>
          </div>

          {/* TFC Center Verification */}
          <div className="mb-3 row">
            <label className="col-sm-4 col-form-label">
              TFC Center for Certification Verification
            </label>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control"
                id="tfcNumber"
                name="tfcNumber"
                value={formData.tfcNumber}
                onChange={handleChange}
                placeholder="Enter your TFC Verification Center"
                pattern="[0-9]{10}"
                required
              />
            </div>
          </div>

          {/* Buttons */}
          <div className="button-container">
            <button className="button back" onClick={(prevStep)}>Back</button>
            <button className="button continue" onClick={nextStep}>Save & Continue</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Specialreservation;
