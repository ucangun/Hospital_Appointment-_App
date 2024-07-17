import Data from "../helper/data";
import DataDoctors from "../helper/doctor";

const PatientList = ({
  doctors,
  setDoctors,
  patients,
  setPatients,
  selectedDoctorId,
  setSelectedDoctorId,
}) => {
  // Handle displaying appointments for a selected doctor
  const handleAppointment = (id, doctorName) => {
    const selectedDoctor = doctors.filter((doc) => doc.id === id);
    setDoctors(selectedDoctor);

    setSelectedDoctorId(doctorName);

    const allPatients = JSON.parse(localStorage.getItem("patients")) || Data;
    const actualPatients = allPatients.filter(
      (patient) => patient.doctor === doctorName
    );
    setPatients(actualPatients);
  };

  // Handle returning to the homepage and resetting the doctor list
  const handleHomePage = () => {
    setDoctors(DataDoctors);
    const allPatients = JSON.parse(localStorage.getItem("patients")) || Data;
    setPatients(allPatients);
    setSelectedDoctorId(null);
  };

  // Handle deleting a patient's appointment

  const handleDelete = (id) => {
    if (
      window.confirm(
        "Are you sure you want to delete patient appointment information?"
      )
    ) {
      const actualPatients = patients.filter((patient) => patient.id !== id);
      setPatients(actualPatients);
      localStorage.setItem("patients", JSON.stringify(actualPatients));
    }
  };

  // Handle marking a patient's appointment as completed
  const handleComplete = (id) => {
    const actualPatients = patients.map((patient) =>
      patient.id === id
        ? { ...patient, completed: !patient.completed }
        : patient
    );
    setPatients(actualPatients);
    // setIsCompleted(!isCompleted);
    localStorage.setItem("patients", JSON.stringify(actualPatients));
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
        <h2>Patient List</h2>
        {patients.map((patient) => (
          <div
            className={`patients_status ${
              patient.completed ? "completed" : ""
            }`}
            key={patient.id}
          >
            <div className="patients_info">
              <p className="patient_name">{patient.text}</p>
              <p className="patient_date">{patient.day}</p>
              <p className="patient_doctor">{patient.doctor}</p>
            </div>
            <div className="patients_button">
              <button onClick={() => handleComplete(patient.id)}>
                {patient.completed ? "Undo" : "Complete"}
              </button>
              <button onClick={() => handleDelete(patient.id)}>Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PatientList;
