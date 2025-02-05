import { useState, useEffect } from "react";

const DoctorsList = () => {
  const [doctors, setDoctors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(""); // Estado para errores

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users") // API de prueba
      .then((response) => {
        if (!response.ok) {
          throw new Error("Error al obtener los doctores.");
        }
        return response.json();
      })
      .then((data) => {
        setDoctors(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <h2>Lista de Doctores</h2>
      {loading && <p>Cargando...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>} {/* Mostrar error si hay */}
      <ul>
        {doctors.map((doctor) => (
          <li key={doctor.id}>{doctor.name} - {doctor.email}</li>
        ))}
      </ul>
    </div>
  );
};

export default DoctorsList;
