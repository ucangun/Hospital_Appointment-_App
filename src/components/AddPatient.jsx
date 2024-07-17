import { format } from "date-fns";
import Data from "../helper/data";
import { useState } from "react";

const AddPatient = ({ setPatients, selectedDoctorId }) => {
  // State to manage the new patient's name and date
  const [name, setName] = useState("");
  const [date, setDate] = useState("");

  // Handle form submission to add a new patient
  const handleSubmit = (e, doctorName) => {
    e.preventDefault();
    if (!name || !date) return;

    const formattedDate = format(new Date(date), "MMM do 'at' h:mma");

    const newPatient = {
      id: crypto.randomUUID(),
      text: name,
      day: formattedDate,
      completed: false,
      doctor: selectedDoctorId,
    };

    const allPatients = JSON.parse(localStorage.getItem("patients")) || Data;
    const updatedPatients = [...allPatients, newPatient];
    const actualPatients = updatedPatients.filter(
      (patient) => patient.doctor === doctorName
    );
    setPatients(actualPatients);
    localStorage.setItem("patients", JSON.stringify(updatedPatients));

    setName("");
    setDate("");
  };
  return (
    <div className="formContainer">
      <div className="wrapper">
        <form onSubmit={(e) => handleSubmit(e, selectedDoctorId)}>
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
      </div>
    </div>
  );
};

export default AddPatient;
