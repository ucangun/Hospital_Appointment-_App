import { useState } from "react";

const PatientList = ({
  doctors,
  setDoctors,
  patients,
  setPatients,
  selectedDoctorId,
  setSelectedDoctorId,
}) => {
  const handleAppointment = (id, doctorName) => {
    const selectedDoctor = doctors.find((doc) => doc.id === id);
    console.log(selectedDoctor);
    setDoctors([selectedDoctor]);

    setSelectedDoctorId(id);

    const actualPatients = patients.filter(
      (patient) => patient.doctor === doctorName
    );
    setPatients(actualPatients);
  };

  return (
    <div className="container">
      <div className="doctors_container">
        <button className="homepage">Homepage</button>
        {doctors.map((doctor) => (
          <div className="doctors" key={doctor.id}>
            <img src={doctor.image} alt={doctor.doctor} />
            <div className="doctors_info">
              <h3>{doctor.doctor}</h3>
              <p>{doctor.description}</p>
              <button
                onClick={() => handleAppointment(doctor.id, doctor.doctor)}
              >
                Appointments
              </button>
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
