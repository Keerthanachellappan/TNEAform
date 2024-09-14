import React, { useState } from 'react';
import PersonalDetails from './PersonalDetails';
import AcademicInfo from './academicinfo';
import StudyInfo from './studyinfo';
import SpecialReservation from './Specialreservation';
import ScholarshipInfo from './Scholarshipinfo';

const Mainpage = () => {
  const [form, setForm] = useState(1); 
  const [formData, setFormData] = useState({});

  // Function to move to the next step
  const nextStep = () => {
    if (form < 5) {
      setForm(form + 1);
    }
  };

  // Function to move to the previous step
  const prevStep = () => {
    if (form > 1) {
      setForm(form - 1);
    }
  };

  // Function to handle changes in the form inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Render different components based on the current form step
  switch (form) {
    case 1:
      return <PersonalDetails nextStep={nextStep} handleChange={handleChange} values={formData} />;
    case 2:
      return <SpecialReservation nextStep={nextStep} prevStep={prevStep} handleChange={handleChange} values={formData} />;
    case 3:
      return <ScholarshipInfo nextStep={nextStep} prevStep={prevStep} handleChange={handleChange} values={formData} />;
    case 4:
      return <StudyInfo nextStep={nextStep} prevStep={prevStep} handleChange={handleChange} values={formData} />;
    case 5:
      return <AcademicInfo nextStep={nextStep} prevStep={prevStep} handleChange={handleChange} values={formData} />;
    default:
      return <div>Success! Form Submitted.</div>;
  }
};

export default Mainpage;
