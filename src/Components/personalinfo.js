import React from 'react';

const PersonalInfo = ({ prevStep, values, handleSubmit }) => {
  return (
    <div>
      <h2>Personal Information</h2>
      <dl>
        <dt>First Name:</dt>
        <dd>{values.firstName || 'N/A'}</dd>
        
        <dt>Father Name:</dt>
        <dd>{values.fatherName || 'N/A'}</dd>

        <dt>Mother Name:</dt>
        <dd>{values.motherName || 'N/A'}</dd>

        <dt>Communication Address:</dt>
        <dd>{values.commAddress || 'N/A'}</dd>

        <dt>Permanent Address:</dt>
        <dd>{values.premAddress || 'N/A'}</dd>

        <dt>Phone Number:</dt>
        <dd>{values.phoneNumber || 'N/A'}</dd>

        <dt>Alternate Phone Number:</dt>
        <dd>{values.alternatePhoneNumber || 'N/A'}</dd>

        <dt>Date of Birth:</dt>
        <dd>{values.dob || 'N/A'}</dd>

        <dt>Gender:</dt>
        <dd>{values.gender || 'N/A'}</dd>

        <dt>Community:</dt>
        <dd>{values.community || 'N/A'}</dd>

        <dt>Caste:</dt>
        <dd>{values.caste || 'N/A'}</dd>

        <dt>Religion:</dt>
        <dd>{values.religion || 'N/A'}</dd>

        <dt>Nationality:</dt>
        <dd>{values.nationality || 'N/A'}</dd>

        <dt>Mother Tongue:</dt>
        <dd>{values.motherTongue || 'N/A'}</dd>

        <dt>Aadhar Number:</dt>
        <dd>{values.aadharNumber || 'N/A'}</dd>
      </dl>
       

      <div className="button-group">
        <button onClick={prevStep}>Back</button>
        <button onClick={handleSubmit}>Confirm</button>
      </div>
    </div>
  );
};

export default PersonalInfo;
