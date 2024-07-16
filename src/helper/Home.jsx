import { useState } from "react";
import PatientList from "../components/PatientList";
import Data from "../helper/data";
import DataDoctors from "../helper/doctor";
import AddPatient from "../components/AddPatient";

const Home = () => {
  const [doctors, setDoctors] = useState(DataDoctors);
  const [patients, setPatients] = useState(Data);

  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  return (
    <div>
      <PatientList
        doctors={doctors}
        setDoctors={setDoctors}
        patients={patients}
        setPatients={setPatients}
      />
      <AddPatient name={name} setName={setName} date={date} setDate={setDate} />
    </div>
  );
};

export default Home;
