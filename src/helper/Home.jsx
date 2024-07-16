import { useState } from "react";
import PatientList from "../components/PatientList";
import Data from "../helper/data";
import DataDoctors from "../helper/doctor";
import AddPatient from "../components/AddPatient";
import Navbar from "../components/Navbar";

const Home = () => {
  const [doctors, setDoctors] = useState(DataDoctors);
  const [patients, setPatients] = useState(Data);
  const [selectedDoctorId, setSelectedDoctorId] = useState(null);
  const [isCompleted, setIsCompleted] = useState(false);

  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  return (
    <div>
      <Navbar />
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
  );
};

export default Home;
