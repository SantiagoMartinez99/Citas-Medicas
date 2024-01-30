import Patient from "./Patient";

function PatientList({ patients, setPatient, deletePatient }) {
  return (
    <div className="md:w-1/2 lg:w-3/5 mx-5 overflow-y-scroll md:h-screen pb-8">
      {patients && patients.length ? (
        <>
          <h2 className="font-black text-3xl text-center">
            Listado de Pacientes
          </h2>
          <p className="text-lg mt-5 text-center">
            Administra tus {""}
            <span className="text-indigo-600 font-bold">Pacientes y citas</span>
          </p>

          {patients.map((patient) => (
            <Patient
              key={patient.id}
              patient={patient}
              setPatient={setPatient}
              deletePatient={deletePatient}
            />
          ))}
        </>
      ) : (
        <>
          <h2 className="font-black text-3xl text-center">No hay pacientes</h2>
          <p className="text-lg mt-5 text-center">
            Comienza agregando pacientes {""}
            <span className="text-indigo-600 font-bold">
              y aparecerán en este lugar
            </span>
          </p>

        </>
      )}
    </div>
  );
}

export default PatientList;
