const AddPatient = ({
  name,
  setName,
  date,
  setDate,
  patients,
  setPatients,
  selectedDoctorId,
}) => {
  // Handle form submission to add a new patient
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !date) return;

    const newPatient = {
      id: crypto.randomUUID(),
      text: name,
      day: date,
      completed: false,
      doctor: selectedDoctorId,
    };

    const allPatients = JSON.parse(localStorage.getItem("patients")) || [];
    const actualPatients = [...allPatients, newPatient];
    setPatients(actualPatients);
    localStorage.setItem("patients", JSON.stringify(actualPatients));

    setName("");
    setDate("");
  };
  return (
    <div className="formContainer">
      <form onSubmit={handleSubmit}>
        <div className="formAdd">
          <label htmlFor="patientName">Patient Name</label>
          <input
            type="text"
            id="patientName"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="formAdd">
          <label htmlFor="date">Day & Time</label>
          <input
            type="datetime-local"
            id="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>
        <button type="submit" className="btnSubmit">
          Add Patient
        </button>
      </form>
    </div>
  );
};

export default AddPatient;
