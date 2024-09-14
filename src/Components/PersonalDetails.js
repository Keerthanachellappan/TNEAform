import React, { useState } from 'react';


const PersonalDetails = ({ nextStep }) => {
  const [formData, setFormData] = useState({
    candidateName: "",
    fatherName: "",
    motherName: "",
    dob: "",
    commAddress: "",
    premAddress: "",
    phoneNumber: "",
    alternatePhoneNumber: "",
    email: "",
    caste: "",
    community: "",
    motherTongue: "",
    gender: "",
    religion: "",
    nationality: "",
    aadharNumber: "",
    ccNumber: "",
    nativityNumber: "",
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
      {/* Personal Information */}
      <div className="form-container">
        <div className="container mx-5 mt-4 border">
          <div className="heading">
            <h2>1. Personal Information</h2>
          </div>

          {/* Full Name */}
          <div className="mb-3 row">
            <label className="col-sm-2 col-form-label">Candidate Name</label>
            <div className="col-sm-10">
                                <input 
                    type="text" 
                    className="form-control" 
                    name="candidateName"
                    id="candidateName" 
                    value={formData.candidateName}
                    onChange={handleChange}
                    placeholder="Enter your Name" 
                    required 
                  />
                           </div>
          </div>

          {/* Father's Name */}
          <div className="mb-3 row">
            <label className="col-sm-2 col-form-label">Father's Name or Guardian Name</label>
            <div className="col-sm-10">
              <input 
                type="text" 
                className="form-control" 
                name="fatherName"
                id="fathersName" 
                value={formData.fatherName}
                onChange={handleChange}
                placeholder="Enter your father's name" 
                required 
              />
            </div>
          </div>

          {/* Mother's Name */}
          <div className="mb-3 row">
            <label className="col-sm-2 col-form-label">Mother's Name</label>
            <div className="col-sm-10">
              <input 
                type="text" 
                className="form-control" 
                name="motherName"
                id="mothersName"
                value={formData.motherName}
                onChange={handleChange}
                placeholder="Enter your mother's name" 
                required 
              />
            </div>
          </div>

          {/* Date of Birth */}
          <div className="mb-3 row">
            <label className="col-sm-2 col-form-label">Date of Birth</label>
            <div className="col-sm-10">
              <input 
                type="date" 
                className="form-control" 
                name="dob"
                id="dob" 
                value={formData.dob}
                onChange={handleChange}
              />
            </div>
          </div>

          {/* Communication Address */}
          <div className="mb-4 row">
            <label className="col-sm-2 col-form-label">Communication Address</label>
            <div className="col-sm-10">
              <textarea 
                id="communicationAddress" 
                className="form-control" 
                name="commAddress"
                value={formData.commAddress}
                onChange={handleChange}
                placeholder="Enter your communication address" 
              ></textarea>
            </div>
          </div>

          {/* Permanent Address */}
          <div className="mb-4 row">
            <label className="col-sm-2 col-form-label">Permanent Address</label>
            <div className="col-sm-10">
              <textarea 
                id="permanentAddress" 
                className="form-control" 
                name="premAddress"
                value={formData.premAddress}
                onChange={handleChange}
                placeholder="Enter your Permanent address"
              ></textarea>
            </div>
          </div>

          {/* Email */}
          <div className="mb-3 row">
            <label className="col-sm-2 col-form-label">Email address</label>
            <div className="col-sm-10">
              <input 
                type="email" 
                className="form-control" 
                id="email" 
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="tnea@gmail.com" 
                required 
              />
            </div>
          </div>

          {/* Phone Number */}
          <div className="mb-3 row">
            <label className="col-sm-2 col-form-label">Phone Number</label>
            <div className="col-sm-10">
              <input 
                type="tel" 
                className="form-control" 
                id="phoneNumber" 
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                placeholder="Enter your phone number" 
                pattern="[0-9]{10}"
              />
            </div>
          </div>

          {/* Alternate Phone Number */}
          <div className="mb-3 row">
            <label className="col-sm-2 col-form-label">Alternate Phone Number</label>
            <div className="col-sm-10">
              <input 
                type="tel" 
                className="form-control" 
                id="alternatePhoneNumber" 
                name="alternatePhoneNumber"
                value={formData.alternatePhoneNumber}    
                onChange={handleChange}        
                placeholder="Enter an alternate phone number" 
                pattern="[0-9]{10}" 
              />
            </div>
          </div>

          {/* Gender */}
          <div className="mb-3 row">
            <label className="col-sm-2 col-form-label">Gender</label>
            <div className="col-sm-10">
              <div className="form-check form-check-inline">
                <input 
                  className="form-check-input" 
                  type="radio" 
                  name="gender" 
                  id="male" 
                  value="male"
                  checked={formData.gender === "male"}
                  onChange={handleChange}
                />
                <label className="form-check-label">Male</label>
              </div>
              <div className="form-check form-check-inline">
                <input 
                  className="form-check-input" 
                  type="radio" 
                  name="gender" 
                  id="female" 
                  value="female"
                  checked={formData.gender ==="female"}
                  onChange={handleChange}
                />
                <label className="form-check-label">Female</label>
              </div>
            </div>
          </div>

          {/* Religion */}
          <div className="mb-3 row">
            <label className="col-sm-2 col-form-label">Religion</label>
            <div className="col-sm-10">
              <div className="form-check form-check-inline">
                <input 
                  className="form-check-input" 
                  type="radio" 
                  name="religion" 
                  id="hindu" 
                  value="hindu"
                  checked={formData.religion === "hindu"}
                  onChange={handleChange}
                />
                <label className="form-check-label">Hindu</label>
              </div>
              <div className="form-check form-check-inline">
                <input 
                  className="form-check-input" 
                  type="radio" 
                  name="religion" 
                  id="muslim" 
                  value="muslim" 
                  checked={formData.religion === "muslim"}
                  onChange={handleChange}
                />
                <label className="form-check-label">Muslim</label>
              </div>
              <div className="form-check form-check-inline">
                <input 
                  className="form-check-input" 
                  type="radio" 
                  name="religion"
                  id="christian" 
                  value="christian" 
                  checked={formData.religion === "christian"} 
                  onChange={handleChange}
                />
                <label className="form-check-label">Christian</label>
              </div>
              <div className="form-check form-check-inline">
                <input 
                  className="form-check-input" 
                  type="radio" 
                  name="religion" 
                  id="otherReligion" 
                  value="other"
                  checked={formData.religion === "other"}
                  onChange={handleChange}
                />
                <label className="form-check-label">Other</label>
              </div>
            </div>
          </div>

          {/* Caste */}
          <div className="mb-3 row">
            <label className="col-sm-2 col-form-label">Caste</label>
            <div className="col-sm-8">
              <input 
                type="text" 
                className="form-control" 
                id="caste"
                name="caste"
                value={formData.caste}  
                onChange={handleChange}
              />
            </div>
          </div>

          {/* Community */}
          <div className="mb-3 row">
            <label className="col-sm-2 col-form-label">Community</label>
            <div className="col-sm-8">
              <div className="form-check form-check-inline">
                <input 
                  className="form-check-input" 
                  type="radio" 
                  name="community" 
                  id="oc"                 
                  checked={formData.community === "oc"}
                  onChange={handleChange}
                />
                <label className="form-check-label">OC</label>
              </div>
              <div className="form-check form-check-inline">
                <input 
                  className="form-check-input" 
                  type="radio" 
                  name="community" 
                  id="bc" 
                  checked={formData.community === "bc"}
                  onChange={handleChange}
                />
                <label className="form-check-label">BC</label>
              </div>
              <div className="form-check form-check-inline">
                <input 
                  className="form-check-input" 
                  type="radio" 
                  name="community" 
                  id="mbc" 
                  checked={formData.community === "mbc"}
                  onChange={handleChange}
                />
                <label className="form-check-label">MBC</label>
              </div>
              <div className="form-check form-check-inline">
                <input 
                  className="form-check-input" 
                  type="radio" 
                  name="community" 
                  id="sc" 
                  checked={formData.community === "sc"} 
                  onChange={handleChange}
                />
                <label className="form-check-label">SC</label>
              </div>
            </div>
          </div>

          {/* Nationality */}
          <div className="mb-3 row">
            <label className="col-sm-2 col-form-label">Nationality</label>
            <div className="col-sm-10">
              <div className="form-check form-check-inline">
                <input 
                  className="form-check-input" 
                  type="radio" 
                  name="nationality" 
                  id="indian"                 
                  checked={formData.nationality === "indian"}
                  onChange={handleChange}
                />
                <label className="form-check-label">Indian</label>
              </div>
              <div className="form-check form-check-inline">
                <input 
                  className="form-check-input" 
                  type="radio" 
                  name="nationality" 
                  id="otherNationality" 
                  checked={formData.nationality === "other"}
                  onChange={handleChange}
                />
                <label className="form-check-label">Other</label>
              </div>
            </div>
          </div>

          {/* Aadhar Number */}
          <div className="mb-3 row">
            <label className="col-sm-2 col-form-label">Aadhar Number</label>
            <div className="col-sm-10">
              <input 
                type="text" 
                className="form-control" 
                id="aadharNumber" 
                name="aadharNumber"
                value={formData.aadharNumber}
                onChange={handleChange}
              />
            </div>
          </div>

          {/* Mother's Tongue */}
          <div className="mb-3 row">
            <label htmlFor="mothersTongue" className="col-sm-2 col-form-label">Mother's Tongue</label>
            <div className="col-sm-10">
              <input 
                type="text" 
                className="form-control" 
                id="mothersTongue" 
                name="motherTongue"
                value={formData.motherTongue}
                onChange={handleChange}
              />
            </div>
            
          </div>
            {/* Button Container */}
      <button className="button continue" onClick={nextStep}>Save & Continue</button>
        </div>
       
      </div>

     
    </div>
  );
}

export default PersonalDetails;
