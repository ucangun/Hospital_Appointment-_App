import { useState } from "react";
import PatientList from "../components/PatientList";
import Data from "../helper/data";
import DataDoctors from "../helper/doctor";
import AddPatient from "../components/AddPatient";
import Navbar from "../components/Navbar";

const Home = () => {
  // State to manage the list of doctors
  const [doctors, setDoctors] = useState(DataDoctors);
  // State to manage the list of patients
  const [patients, setPatients] = useState(
    () => JSON.parse(localStorage.getItem("patients")) || Data
  );

  // State to manage the selected doctor's ID
  const [selectedDoctorId, setSelectedDoctorId] = useState(null);

  return (
    <div>
      <Navbar />
      <div className="bgContainer">
        <PatientList
          doctors={doctors}
          setDoctors={setDoctors}
          patients={patients}
          setPatients={setPatients}
          selectedDoctorId={selectedDoctorId}
          setSelectedDoctorId={setSelectedDoctorId}
        />
        {selectedDoctorId && (
          <AddPatient
            patients={patients}
            setPatients={setPatients}
            selectedDoctorId={selectedDoctorId}
          />
        )}
      </div>
    </div>
  );
};

export default Home;
