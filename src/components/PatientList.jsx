import Data from "../helper/data";
import DataDoctors from "../helper/doctor";

const PatientList = ({
  doctors,
  setDoctors,
  patients,
  setPatients,
  selectedDoctorId,
  setSelectedDoctorId,
  isCompleted,
  setIsCompleted,
}) => {
  const handleAppointment = (id, doctorName) => {
    const selectedDoctor = doctors.filter((doc) => doc.id === id);
    setDoctors(selectedDoctor);

    setSelectedDoctorId(doctorName);

    const actualPatients = patients.filter(
      (patient) => patient.doctor === doctorName
    );
    setPatients(actualPatients);
  };

  const handleHomePage = () => {
    setDoctors(DataDoctors);
    setPatients(Data);
    setSelectedDoctorId(null);
  };

  const handleDelete = (id) => {
    const actualPatients = patients.filter((patient) => patient.id !== id);
    setPatients(actualPatients);
  };

  const handleComplete = (id) => {
    const actualPatients = patients.map((patient) =>
      patient.id === id ? { ...patient, complete: !patient.complete } : patient
    );
    setPatients(actualPatients);
    setIsCompleted(!isCompleted);
  };

  return (
    <div className="container">
      <div className="doctors_container">
        {selectedDoctorId && (
          <button className="homepage" onClick={handleHomePage}>
            Homepage
          </button>
        )}
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
          <div
            className={`patients_status ${isCompleted ? "completed" : ""}`}
            key={patient.id}
          >
            <div className="patients_info">
              <p>{patient.text}</p>
              <p>{patient.day}</p>
              <p>{patient.doctor}</p>
            </div>
            <div className="patients_button">
              <button onClick={() => handleDelete(patient.id)}>delete</button>
              <button onClick={() => handleComplete(patient.id)}>
                complete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PatientList;
