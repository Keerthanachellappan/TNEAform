import React, { useState } from 'react';

const ScholarshipInfo = ({ nextStep, prevStep }) => {
  const [formData, setFormData] = useState({
    parentOccupation: "",
    annualIncome: "",
    firstGraduate: "",
    postMatric: "",
    educationLoan: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div>
      <div className="form-container">
        <div className="container mx-6 mt-3 border">
          <div className="heading">
            <h2>3.Scholarship Information</h2>
          </div>
      {/* Parent Occupation */}
      <div className="mb-3 row">
        <label className="col-form-label col-sm-2">Parent's Occupation</label>
        <div className="col-sm-10">
          <input 
            type="text" 
            className="form-control" 
            id="parentOccupation" 
            name="parentOccupation" 
            value={formData.parentOccupation} 
            onChange={handleChange} 
            placeholder="Enter Your Parent's Occupation" 
          />
          <div className="invalid-feedback">
            Please enter your parent's occupation.
          </div>
        </div>
      </div>

      {/* Annual Income */}
      <div className="mb-3 row">
        <label className="col-form-label col-sm-2">Annual Income</label>
        <div className="col-sm-10">
          <input 
            type="tel" 
            className="form-control" 
            id="annualIncome" 
            name="annualIncome" 
            value={formData.annualIncome} 
            onChange={handleChange} 
            placeholder="Enter your annual income" 
            required 
          />
          <div className="invalid-feedback">
            Please enter your annual income.
          </div>
        </div>
      </div>

      {/* First Graduate */}
      <label className="col-form-label col-sm-5">Are you a First Graduate?</label>
      <div className="col-sm-10">
        <div className="form-check form-check-inline">
          <input 
            className="form-check-input" 
            type="radio" 
            name="firstGraduate" 
            value="yes"
            checked={formData.firstGraduate === "yes"} 
            onChange={handleChange} 
          />
          <label className="form-check-label">Yes</label>
        </div>
        <div className="form-check form-check-inline">
          <input 
            className="form-check-input" 
            type="radio" 
            name="firstGraduate" 
            value="no" 
            checked={formData.firstGraduate === "no"} 
            onChange={handleChange} 
          />
          <label className="form-check-label">No</label>
        </div>
        <div className="invalid-feedback">
          Please select if you are a First Graduate.
        </div>
      </div>

      {/* Post Matric Scholarship */}
      <label className="col-form-label col-sm-5">Post Matric Scholarship (SC/SCA/ST/Converted Christians)</label>
      <div className="col-sm-10">
        <div className="form-check form-check-inline">
          <input 
            className="form-check-input" 
            type="radio" 
            name="postMatric" 
            value="yes" 
            checked={formData.postMatric === "yes"} 
            onChange={handleChange} 
          />
          <label className="form-check-label">Yes</label>
        </div>
        <div className="form-check form-check-inline">
          <input 
            className="form-check-input" 
            type="radio" 
            name="postMatric" 
            value="no" 
            checked={formData.postMatric === "no"} 
            onChange={handleChange} 
          />
          <label className="form-check-label">No</label>
        </div>
        <div className="invalid-feedback">
          Please select if you are eligible for Post Matric Scholarship.
        </div>
      </div>

      {/* Education Loan */}
      <label className="col-form-label col-sm-5">Are you planning to avail Education Loan?</label>
      <div className="col-sm-10">
        <div className="form-check form-check-inline">
          <input 
            className="form-check-input" 
            type="radio" 
            name="educationLoan" 
            value="yes" 
            checked={formData.educationLoan === "yes"} 
            onChange={handleChange} 
          />
          <label className="form-check-label">Yes</label>
        </div>
        <div className="form-check form-check-inline">
          <input 
            className="form-check-input" 
            type="radio" 
            name="educationLoan" 
            value="no" 
            checked={formData.educationLoan === "no"} 
            onChange={handleChange} 
          />
          <label className="form-check-label">No</label>
        </div>
        <div className="invalid-feedback">
          Please select if you are planning to avail an Education Loan.
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

export default ScholarshipInfo;
