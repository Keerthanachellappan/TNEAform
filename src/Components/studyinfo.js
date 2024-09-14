import React, { useState } from 'react';

const StudyInfo = ({ nextStep, prevStep }) => {
  const [formData, setFormData] = useState({
    categorySchool: "",
    civicStatus: "",
    studiedEightTwelth: "",
    studiedGovt: "",
    studiedPrivate: "",        
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  return (
  
      <div className="form-container">
        <div className="container mx-6 mt-3 border">
          <h2>4.School of Study Information</h2>

          {/* Category of School */}
          <div className="form-group mb-3">
            <label>Category of School</label>
            <input 
              type="text" 
              name="categorySchool" 
              className="form-control"
              value={formData.categorySchool} 
              onChange={handleChange} 
              placeholder="Enter Category of School" 
            />
          </div>

          {/* Civic Status of School */}
          <div className="form-group mb-3">
            <label>Civic Status of School Location</label>
            <input 
              type="text" 
              name="civicStatus" 
              className="form-control"
              value={formData.civicStatus} 
              onChange={handleChange} 
              placeholder="Enter Civic status of Location" 
            />
          </div>

          {/* Studied VIII to XII in Tamil Nadu */}
          <div className="form-group mb-3">
            <label>Have you studied VIII to XII in Tamil Nadu?</label>
            <fieldset className="form-group">
              <div className="form-check form-check-inline">
                <input 
                  type="radio" 
                  name="studiedEightTwelth" 
                  className="form-check-input"
                  value="yes"
                  checked={formData.studiedEightTwelth === "yes"}
                  onChange={handleChange}            
                />
                <label className="form-check-label">Yes</label>
              </div>
              <div className="form-check form-check-inline">
                <input 
                  type="radio" 
                  name="studiedEightTwelth" 
                  className="form-check-input"
                  value="no"
                  checked={formData.studiedEightTwelth === "no"} 
                  onChange={handleChange}            
                />
                <label className="form-check-label">No</label>
              </div>
            </fieldset>
          </div>

          {/* Studied RTE in Private School */}
          <div className="form-group mb-3">
            <label>Have you studied from VI to VIII in private school under RTE and IX to XII in Government School?</label>
            <fieldset className="form-group">
              <div className="form-check form-check-inline">
                <input 
                  type="radio" 
                  name="studiedPrivate" 
                  className="form-check-input"
                  value="yes"
                  checked={formData.studiedPrivate === "yes"} 
                  onChange={handleChange}            
                />
                <label className="form-check-label">Yes</label>
              </div>
              <div className="form-check form-check-inline">
                <input 
                  type="radio" 
                  name="studiedPrivate" 
                  className="form-check-input"
                  value="no"
                  checked={formData.studiedPrivate === "no"} 
                  onChange={handleChange}            
                />
                <label className="form-check-label">No</label>
              </div>
            </fieldset>
          </div>

          {/* Studied in Government School */}
          <div className="form-group mb-3">
            <label>Have you studied VI to XII in Government School?</label>
            <fieldset className="form-group">
              <div className="form-check form-check-inline">
                <input 
                  type="radio" 
                  name="studiedGovt" 
                  className="form-check-input"
                  value="yes"
                  checked={formData.studiedGovt === "yes"} 
                  onChange={handleChange}            
                />
                <label className="form-check-label">Yes</label>
              </div>
              <div className="form-check form-check-inline">
                <input 
                  type="radio" 
                  name="studiedGovt" 
                  className="form-check-input"
                  value="no"
                  checked={formData.studiedGovt === "no"} 
                  onChange={handleChange}            
                />
                <label className="form-check-label">No</label>
              </div>
            </fieldset>

            
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

export default StudyInfo;
