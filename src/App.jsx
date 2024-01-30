import Form from "./components/Form";
import Header from "./components/Header";
import PatientList from "./components/PatientList";
import { useState, useEffect } from "react";

function App() {
  const [patients, setPatients] = useState([]);
  const [patient, setPatient] = useState({});

  useEffect(() => {
    const obtainLS = () => {
      const patientsLS = JSON.parse(localStorage.getItem("patients")) ?? [];
      setPatients(patientsLS);
      console.log("Patients from LS:", patientsLS);
    }
    obtainLS();
  }, []);

  useEffect(() => {
    localStorage.setItem("patients", JSON.stringify(patients));
  }, [patients]);

  const deletePatient = (id) => {
    const updatedPatients = patients.filter((patient) => patient.id !== id);
    setPatients(updatedPatients);
  };

  return (
    <>
      <div className="container mx-auto mt-20 mb-5">
        <Header />
        <div className="mt-12 md:flex">
          <Form
            patient={patient}
            patients={patients}
            setPatients={setPatients}
            setPatient={setPatient}
          />
          <PatientList
            patients={patients}
            setPatient={setPatient}
            deletePatient={deletePatient}
          />
        </div>
      </div>
    </>
  );
}

export default App;
