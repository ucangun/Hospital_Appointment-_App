import { useState } from "react";

const PatientList = ({ doctors, setDoctors }) => {
  const [app, setApp] = useState(true);

  const handleAppointments = (id) => {
    const actualDoctors = doctors.filter((doctor) => doctor.id === id);
    setDoctors(actualDoctors);
    setApp((app) => !app);
  };
  return (
    <div className="container">
      <div className="doctors_container">
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
      {app && (
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
      )}
    </div>
  );
};

export default PatientList;
