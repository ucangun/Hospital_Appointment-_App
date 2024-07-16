const PatientList = ({ doctors }) => {
  return (
    <div className="container">
      <div className="doctors_container">
        {doctors.map((doctor) => (
          <div className="doctors" key={doctor.id}>
            <img src={doctor.image} alt={doctor.doctor} />
            <div className="doctors_info">
              <h3>{doctor.doctor}</h3>
              <p>{doctor.description}</p>
              <button>Appointments</button>
            </div>
          </div>
        ))}
      </div>
      <div className="patients_container">
        <h1>sadkjgnvsa d</h1>
      </div>
    </div>
  );
};

export default PatientList;
