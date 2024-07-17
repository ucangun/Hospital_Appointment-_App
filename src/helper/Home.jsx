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
  // State to manage the completion status
  const [isCompleted, setIsCompleted] = useState(false);

  // State to manage the new patient's name and date
  const [name, setName] = useState("");
  const [date, setDate] = useState("");

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
          isCompleted={isCompleted}
          setIsCompleted={setIsCompleted}
        />
        {selectedDoctorId && (
          <AddPatient
            patients={patients}
            setPatients={setPatients}
            name={name}
            setName={setName}
            date={date}
            setDate={setDate}
            selectedDoctorId={selectedDoctorId}
            setSelectedDoctorId={setSelectedDoctorId}
          />
        )}
      </div>
    </div>
  );
};

export default Home;
