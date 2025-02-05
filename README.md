# Hospital Nueva Vida - Gestión de Pacientes

Este es un proyecto desarrollado con **React** que utiliza **Hooks** para manejar el estado, efectos secundarios y errores en una aplicación hospitalaria.

## Funcionalidades

- Manejo de formularios con `useState` para registrar pacientes.
- Obtención de datos de doctores desde una API con `useEffect`.
- Creación de un Hook personalizado (`useAuth.js`) para autenticación.
- Manejo de errores en formularios y peticiones a la API.
- Estilos básicos en `styles.css` para una interfaz limpia y minimalista.

---

## **Estructura del Proyecto**

hospital-hooks/ │── src/ │ ├── components/
# Componentes reutilizables │ │ ├── PatientForm.jsx
# Formulario de pacientes con useState │ │ ├── DoctorsList.jsx
# Lista de doctores obtenida con useEffect │ ├── hooks/
# Hooks personalizados │ │ ├── useAuth.js
# Hook para autenticación de usuario │ ├── styles.css
# Archivo de estilos globales │ ├── App.jsx
# Componente principal de la aplicación │ ├── index.jsx
# Punto de entrada de React │── 
- README.md # Documentación del proyecto │──
- package.json # Dependencias del proyecto │── vite.config.js # Configuración de Vite
