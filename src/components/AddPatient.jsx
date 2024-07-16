import { useState } from "react";

const AddPatient = ({ name, setName, date, setDate }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !date) return;
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="formAdd">
          <label htmlFor="patientName">Patient Name</label>
          <input
            type="text"
            id="patientName"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="formAdd">
          <label htmlFor="date">Day & Time</label>
          <input
            type="datetime-local"
            id="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>
        <button type="submit" className="btnSubmit">
          Add Patient
        </button>
      </form>
    </>
  );
};

export default AddPatient;
