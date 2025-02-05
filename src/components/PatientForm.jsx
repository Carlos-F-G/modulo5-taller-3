import { useState } from "react";

const PatientForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    email: "",
  });

  const [error, setError] = useState(""); // Estado para errores

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validar que los campos no estén vacíos
    if (!formData.name || !formData.age || !formData.email) {
      setError("Todos los campos son obligatorios.");
      return;
    }

    setError(""); // Limpiar error si todo está bien
    console.log("Datos del paciente:", formData);
  };

  return (
    <form onSubmit={handleSubmit} className="patient-form">
      <label>
        Nombre:
        <input type="text" name="name" value={formData.name} onChange={handleChange} required />
      </label>
      <label>
        Edad:
        <input type="number" name="age" value={formData.age} onChange={handleChange} required />
      </label>
      <label>
        Email:
        <input type="email" name="email" value={formData.email} onChange={handleChange} required />
      </label>
      {error && <p style={{ color: "red" }}>{error}</p>} {/* Mensaje de error */}
      <button type="submit">Registrar Paciente</button>
    </form>
  );
};

export default PatientForm;
