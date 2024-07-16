import { useState } from "react";
import Data from "../helper/data";

const PatientList = ({ doctors, setDoctors, patients, setPatients }) => {
  const [app, setApp] = useState(false);

  const handleHomePage = () => {
    setDoctors(Data);
    setApp((app) => !app);
  };

  const handleAppointments = (id) => {
    const actualDoctors = doctors.filter((doctor) => doctor.id === id);
    setDoctors(actualDoctors);
    setApp((app) => !app);
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
              {app ? (
                " "
              ) : (
                <button onClick={() => handleAppointments(doctor.id)}>
                  Appointments
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
      <div className="patients_container">
        <h1>Patient List</h1>
        {patients.map((patient) => (
          <div className="patients_status" key={patient.id}>
            <div className="patients_info">
              <p>{patient.text}</p>
              <p>{patient.day}</p>
              <p>{patient.doctor}</p>
            </div>
            <div className="patients_button">
              <button>delete</button>
              <button>complete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PatientList;
