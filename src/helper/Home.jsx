import { useState } from "react";
import PatientList from "../components/PatientList";
import Data from "../helper/data";

const Home = () => {
  const [doctors, setDoctors] = useState(Data);
  return (
    <div>
      <PatientList doctors={doctors} setDoctors={setDoctors} />
    </div>
  );
};

export default Home;
