import React, { useState } from 'react';

const AcademicInfo = (nextStep, prevStep) => {
  const [formData, setFormData] = useState({
    qualifyExam: "",
    boardExam: "",
    regNumber: "",
    rollNumber: "",
    qualifiedYear: "",
    hscGroup: "",
    groupCode: "",
    mediumInstruction: "",
    hscMaxMarks: "",
    hscObtMarks: "",
    sslcMaxMarks: "",
    sslcObtMarks: "",
    applyNeet: "",
    applyJEE: "",
    applyImuCet: "",
    emisNumber: "",
    ccNumber: "",
    nativityNumber: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevStep) => ({
      ...prevStep,
      [name]: value
    }));
  };

  return (
    <div className="form-container">
        <div className="container mx-6 mt-3 border">
     
          <h2>5.Academic Information</h2>

          {/* Qualifying Examination */}
          <div className="form-group mb-3">
            <label>Qualifying Examination</label>
            <input 
              type="text" 
              name="qualifyExam" 
              className="form-control"
              value={formData.qualifyExam} 
              onChange={handleChange} 
              placeholder="Enter Qualifying Examination" 
            />
          </div>

          {/* Board of the Examination */}
          <div className="form-group mb-3">
            <label>Name of the Board of the Examination</label>
            <input 
              type="text" 
              name="boardExam" 
              className="form-control"
              value={formData.boardExam} 
              onChange={handleChange} 
              placeholder="Board of the Examination" 
            />
          </div>

          {/* Permanent Registration Number */}
          <div className="form-group mb-3">
            <label>Permanent Registration Number</label>
            <input 
              type="number" 
              name="regNumber" 
              className="form-control"
              value={formData.regNumber} 
              onChange={handleChange} 
              placeholder="Enter Registration Number" 
            />
          </div>

          {/* HSC Roll Number */}
          <div className="form-group mb-3">
            <label>HSC Roll Number</label>
            <input 
              type="number" 
              name="rollNumber" 
              className="form-control"
              value={formData.rollNumber} 
              onChange={handleChange} 
              placeholder="Enter HSC Roll Number" 
            />
          </div>

          {/* HSC Qualified Year */}
          <div className="form-group mb-3">
            <label>HSC Qualified Year</label>
            <input 
              type="text" 
              name="qualifiedYear" 
              className="form-control"
              value={formData.qualifiedYear} 
              onChange={handleChange} 
              placeholder="Enter HSC Qualifying Year" 
            />
          </div>

          {/* HSC Group */}
          <div className="form-group mb-3">
            <label>HSC Group</label>
            <fieldset className="form-group">
              <div className="form-check form-check-inline">
                <input 
                  type="radio" 
                  id="hscAcademic" 
                  name="hscGroup" 
                  className="form-check-input"
                  value="hscAcademic"
                  checked={formData.hscGroup === "hscAcademic"} 
                  onChange={handleChange} 
                />
                <label className="form-check-label" htmlFor="hscAcademic">HSC Academic</label>
          </div>
          <div className="form-check form-check-inline">
            <input 
              type="radio" 
              id="hscVocational" 
              name="hscGroup" 
              className="form-check-input"
              value="hscVocational"
              checked={formData.hscGroup === "hscVocational"} 
              onChange={handleChange} 
            />
            <label className="form-check-label" htmlFor="hscVocational">HSC Vocational</label>
          </div>
        </fieldset>
      </div>

      {/* Group Code */}
      <div className="form-group mb-3">
        <label>Group Code</label>
        <input 
          type="text" 
          name="groupCode" 
          className="form-control"
          value={formData.groupCode} 
          onChange={handleChange} 
          placeholder="Enter Group Code" 
        />
      </div>

      {/* Medium of Instruction */}
      <div className="form-group mb-3">
        <label>Medium of Instruction</label>
        <input 
          type="text" 
          name="mediumInstruction" 
          className="form-control"
          value={formData.mediumInstruction} 
          onChange={handleChange} 
          placeholder="Enter Medium of Instruction" 
        />
      </div>

      {/* HSC Maximum Marks */}
      <div className="form-group mb-3">
        <label>HSC Maximum (Total) Marks</label>
        <input 
          type="number" 
          name="hscMaxMarks" 
          className="form-control"
          value={formData.hscMaxMarks} 
          onChange={handleChange} 
          placeholder="Enter HSC Maximum Marks" 
        />
      </div>

      {/* HSC Obtained Marks */}
      <div className="form-group mb-3">
        <label>HSC Obtained Marks</label>
        <input 
          type="number" 
          name="hscObtMarks" 
          className="form-control"
          value={formData.hscObtMarks} 
          onChange={handleChange} 
          placeholder="Enter HSC Obtained Marks" 
        />
      </div>

      {/* SSLC Maximum Marks */}
      <div className="form-group mb-3">
        <label>SSLC Maximum (Total) Marks</label>
        <input 
          type="number" 
          name="sslcMaxMarks" 
          className="form-control"
          value={formData.sslcMaxMarks} 
          onChange={handleChange} 
          placeholder="Enter SSLC Maximum Marks" 
        />
      </div>

      {/* SSLC Obtained Marks */}
      <div className="form-group mb-3">
        <label>SSLC Obtained Marks</label>
        <input 
          type="number" 
          name="sslcObtMarks" 
          className="form-control"
          value={formData.sslcObtMarks} 
          onChange={handleChange} 
          placeholder="Enter SSLC Obtained Marks" 
        />
      </div>

      {/* NEET Application */}
      <div className="form-group mb-3">
        <label>Have you applied for NEET?</label>
        <fieldset className="form-group">
          <div className="form-check form-check-inline">
            <input 
              type="radio" 
              id="applyNeetYes" 
              name="applyNeet" 
              className="form-check-input"
              value="yes"
              checked={formData.applyNeet === "yes"} 
              onChange={handleChange} 
            />
            <label className="form-check-label" htmlFor="applyNeetYes">Yes</label>
          </div>
          <div className="form-check form-check-inline">
            <input 
              type="radio" 
              id="applyNeetNo" 
              name="applyNeet" 
              className="form-check-input"
              value="no"
              checked={formData.applyNeet === "no"} 
              onChange={handleChange} 
            />
            <label className="form-check-label" htmlFor="applyNeetNo">No</label>
          </div>
        </fieldset>
      </div>

      {/* JEE Application */}
      <div className="form-group mb-3">
        <label>Have you applied for JEE?</label>
        <fieldset className="form-group">
          <div className="form-check form-check-inline">
            <input 
              type="radio" 
              id="applyJeeYes" 
              name="applyJEE" 
              className="form-check-input"
              value="yes"
              checked={formData.applyJEE === "yes"} 
              onChange={handleChange} 
            />
            <label className="form-check-label" htmlFor="applyJeeYes">Yes</label>
          </div>
          <div className="form-check form-check-inline">
            <input 
              type="radio" 
              id="applyJeeNo" 
              name="applyJEE" 
              className="form-check-input"
              value="no"
              checked={formData.applyJEE === "no"} 
              onChange={handleChange} 
            />
            <label className="form-check-label" htmlFor="applyJeeNo">No</label>
          </div>
        </fieldset>
      </div>

      {/* IMU CET Application */}
      <div className="form-group mb-3">
        <label>Have you applied for IMU CET?</label>
        <fieldset className="form-group">
          <div className="form-check form-check-inline">
            <input 
              type="radio" 
              id="applyImuCetYes" 
              name="applyImuCet" 
              className="form-check-input"
              value="yes"
              checked={formData.applyImuCet === "yes"} 
              onChange={handleChange} 
            />
            <label className="form-check-label" htmlFor="applyImuCetYes">Yes</label>
          </div>
          <div className="form-check form-check-inline">
            <input 
              type="radio" 
              id="applyImuCetNo" 
              name="applyImuCet" 
              className="form-check-input"
              value="no"
              checked={formData.applyImuCet === "no"} 
              onChange={handleChange} 
            />
            <label className="form-check-label" htmlFor="applyImuCetNo">No</label>
          </div>
        </fieldset>
      </div>

      {/* EMIS Number */}
      <div className="form-group mb-3">
        <label>Educational Management Information System (EMIS) Number</label>
        <input 
          type="number" 
          name="emisNumber" 
          className="form-control"
          value={formData.emisNumber} 
          onChange={handleChange} 
        />
      </div>

      {/* Community Certificate Number */}
      <div className="form-group mb-3">
        <label>Community Certificate Number</label>
        <input 
          type="number" 
          name="ccNumber" 
          className="form-control"
          value={formData.ccNumber} 
          onChange={handleChange} 
        />
      </div>

      {/* Nativity Certificate Number */}
      <div className="form-group mb-3">
        <label>Nativity Certificate Number (if applicable)</label>
        <input 
          type="number" 
          name="nativityNumber" 
          className="form-control"
          value={formData.nativityNumber} 
          onChange={handleChange} 
        />
      </div>
      <div className="button-container">
            <button className="button back" onClick={(prevStep)}>Back</button>
            <button className="button continue" onClick={nextStep}>Save & Continue</button>
          </div>
    </div>
 
  {/* Buttons */}
 
</div>
); 

};

export default AcademicInfo;