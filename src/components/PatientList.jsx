import { useState } from "react";
import Data from "../helper/data";

const PatientList = ({ doctors, setDoctors }) => {
  const [app, setApp] = useState(true);

  const handleHomePage = () => {
    setDoctors(Data);
  };

  const handleAppointments = (id) => {
    const actualDoctors = doctors.filter((doctor) => doctor.id === id);
    setDoctors(actualDoctors);
  };

  return (
    <div className="container">
      <div className="doctors_container">
        <button className="homepage" onClick={handleHomePage}>
          Homepage
        </button>
        {doctors.map((doctor) => (
          <div className="doctors" key={doctor.id}>
            <img src={doctor.image} alt={doctor.doctor} />
            <div className="doctors_info">
              <h3>{doctor.doctor}</h3>
              <p>{doctor.description}</p>
              <button onClick={() => handleAppointments(doctor.id)}>
                Appointments
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="patients_container">
        <h1>Patient List</h1>
        {doctors.map((doctor) => (
          <div className="patients_status" key={doctor.id}>
            <div className="patients_info">
              <p>{doctor.text}</p>
              <p>{doctor.day}</p>
              <p>{doctor.doctor}</p>
            </div>
            <div className="patients_button">
              <button>delete</button>
              <button>complete</button>
            </div>
          </div>
        ))}
      </div>
      <form>
        <div className="formAdd">
          <label htmlFor="patientName">Patient Name</label>
          <input type="text" id="patientName" />
        </div>
        <div className="formAdd">
          <label htmlFor="date">Day & Time</label>
          <input type="datetime-local" id="date" />
        </div>
        <button type="submit" className="btnSubmit">
          Add Patient
        </button>
      </form>
    </div>
  );
};

export default PatientList;
