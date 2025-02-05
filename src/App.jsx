import { useState } from "react";
import PatientForm from "./components/PatientForm";
import DoctorsList from "./components/DoctorsList";
import useAuth from "./hooks/useAuth";

function App() {
  const { user, login, logout } = useAuth();
  const [username, setUsername] = useState("");

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>Registro de Pacientes</h1>

      {!user ? (
        <div>
          <input
            type="text"
            placeholder="Nombre de usuario"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <button onClick={() => login(username)}>Iniciar Sesión</button>
        </div>
      ) : (
        <div>
          <p>Bienvenido, {user}!</p>
          <button onClick={logout}>Cerrar Sesión</button>
        </div>
      )}

      <hr />
      <PatientForm />
      <DoctorsList />
    </div>
  );
}

export default App;
