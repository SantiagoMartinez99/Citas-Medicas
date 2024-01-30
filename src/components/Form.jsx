import { useEffect, useState } from "react";
import Error from "./Error";
function Form({ patient, patients, setPatients }) {
  const [petName, setPetName] = useState("");
  const [ownerName, setOwnerName] = useState("");
  const [email, setEmail] = useState("");
  const [dischargedDay, setDischargedDay] = useState("");
  const [symptoms, setSymptoms] = useState("");

  const [error, setError] = useState(false);

  useEffect(() => {
    if (Object.keys(patient).length > 0) {
      setPetName(patient.petName);
      setOwnerName(patient.ownerName);
      setEmail(patient.email);
      setDischargedDay(patient.dischargedDay);
      setSymptoms(patient.symptoms);
    }
  }, [patient]);

  const generateId = () => {
    const random = Math.random().toString(36).substring(2);
    const fecha = Date.now().toString(36);
    return fecha + random;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Enviando Formulario");
    if ([petName, ownerName, email, dischargedDay, symptoms].includes("")) {
      console.log("Hay al menos un campo vacío");
      setError(true);
    } else {
      console.log("Todos llenos");

      const objectPatient = {
        petName,
        ownerName,
        email,
        dischargedDay,
        symptoms,
      };

      if (patient.id) {
        objectPatient.id = patient.id;

        const updatedPatient = patients.map((patientState) =>
          patientState.id === patient.id ? objectPatient : patientState
        );

        setPatients(updatedPatient);
      } else {
        objectPatient.id = generateId();
        setPatients([...patients, objectPatient]);
      }

      setPetName(""),
        setOwnerName(""),
        setEmail(""),
        setDischargedDay(""),
        setSymptoms("");
      setError(false);
    }
  };

  return (
    <div className="md:w-1/2 lg:w-2/5 mx-5 pb-8">
      <h2 className="font-black text-3xl text-center">Seguimiento Pacientes</h2>
      <p className="text-lg mt-5 text-center">
        Añade pacientes y {""}
        <span className="text-indigo-600 font-bold">Adminístralos</span>
      </p>

      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-lg rounded-lg py-6 px-5 my-5"
      >
        <div className="mb-5">
          <label
            htmlFor="petName"
            className="block text-gray-700 font-bold uppercase"
          >
            Nombre Mascota
          </label>
          <input
            id="petName"
            type="text"
            placeholder="Nombre de la mascota"
            className="border-2 w-full p-2 mt-2 placeholder:text-gray-400 rounded-md"
            value={petName}
            onChange={(e) => setPetName(e.target.value)}
          ></input>
        </div>
        <div className="mb-5">
          <label
            htmlFor="ownerName"
            className="block text-gray-700 font-bold uppercase"
          >
            Nombre Propietario
          </label>
          <input
            id="ownerName"
            type="text"
            placeholder="Nombre Propietario"
            className="border-2 w-full p-2 mt-2 placeholder:text-gray-400 rounded-md"
            value={ownerName}
            onChange={(e) => setOwnerName(e.target.value)}
          ></input>
        </div>
        <div className="mb-5">
          <label
            htmlFor="email"
            className="block text-gray-700 font-bold uppercase"
          >
            Email
          </label>
          <input
            id="email"
            type="email"
            placeholder="Email Contacto Propietario"
            className="border-2 w-full p-2 mt-2 placeholder:text-gray-400 rounded-md"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></input>
        </div>
        <div className="mb-5">
          <label
            htmlFor="dischargedDay"
            className="block text-gray-700 font-bold uppercase"
          >
            Alta
          </label>
          <input
            id="dischargedDay"
            type="date"
            className="border-2 w-full p-2 mt-2 placeholder:text-gray-400 rounded-md"
            value={dischargedDay}
            onChange={(e) => setDischargedDay(e.target.value)}
          ></input>
        </div>
        <div className="mb-2">
          <label
            htmlFor="symptoms"
            className="block text-gray-700 font-bold uppercase"
          >
            Síntomas
          </label>
          <textarea
            id="symptoms"
            type="date"
            placeholder="Sintomas"
            className="border-2 w-full p-2 mt-2 placeholder:text-gray-400 rounded-md"
            value={symptoms}
            onChange={(e) => setSymptoms(e.target.value)}
          ></textarea>
        </div>

        {error && <Error message="todos los campos son obligatorios" />}

        <input
          type="submit"
          className="bg-indigo-600 w-full p-3 text-white uppercase font-bold rounded-lg  hover:bg-indigo-700 cursor-pointer transition-colors"
          value={patient.id ? "Editar Paciente" : "Agregar Paciente"}
        ></input>
      </form>
    </div>
  );
}

export default Form;
