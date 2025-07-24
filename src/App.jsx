import { useEffect, useState } from "react";

/* Componentes */
import { Header } from "./components/Header";
import { Main } from "./components/Main";
import { Form } from "./components/Form";
import { Message } from "./components/Message";
import { employeeService } from "./service/employeeService";

function App() {
  const [data, setData] = useState([]);

  const [showForm, setShowForm] = useState(false);

  const [message, setMessage] = useState({ show: false, text: "" });

  /* Fetch data inicial */
  const loadEmployees = async () => {
    try {
      const employees = await employeeService.getAll();
      setData(employees);
      console.log("Empleados cargados:", employees);
    } catch (error) {
      console.error("Error al cargar empleados:", error);
    }
  };

  useEffect(() => {
    loadEmployees();
  }, []);

  /* EMPLEADO A EDITAR */
  const [employee, setEmployee] = useState(null);

  /* MANEJO FOMRULARIO DE EDIT O ADD */
  const handleShowForm = (employee) => {
    setShowForm(true);
    setEmployee(employee);
  };

  const handleSaveData = async (employee) => {
    if (employee.id) {
      await employeeService
        .update(employee.id, employee)
        .then(() => {
          mostrarMensaje(`Empleado ${employee.nombre} actualizado`);
          setData((empl) => empl.map((emp) => (emp.id === employee.id ? employee : emp)));
        })
        .catch((error) => {
          mostrarMensaje(`Error al actualizar empleado: ${error.message}`);
        })
        .finally(() => handleCloseForm());
    } else {
      await employeeService
        .create(employee)
        .then((newEmployee) => {
          setData((empl) => {
            mostrarMensaje(`Empleado ${newEmployee.nombre} agregado`);
            return [...empl, newEmployee];
          });
        })
        .catch((error) => {
          mostrarMensaje(`Error al agregar empleado: ${error.message}`);
        })
        .finally(() => handleCloseForm());
    }
  };

  const handleCancelForm = () => {
    handleCloseForm();
  };

  /* Eliminar empleado */
  const handleDeleteEmployee = (id) => {
    if (window.confirm("¿Estás seguro de eliminar este empleado?")) {
      employeeService
        .delete(id)
        .then(() => {
          mostrarMensaje(`Empleado eliminado con ID: ${id}`);
          setData((empl) => empl.filter((emp) => emp.id !== id));
        })
        .catch((error) => {
          mostrarMensaje(`Error al eliminar empleado: ${error.message}`);
        })
        .finally(() => handleCloseForm());
    }
  };

  const handleCloseForm = () => {
    setShowForm(false);
    setEmployee(null);
  };

  const mostrarMensaje = (text) => {
    setMessage({ show: true, text });
    setTimeout(() => {
      setMessage({ show: false, text: "" });
    }, 3000);
  };

  const columns = [
    {
      header: "ID",
      accessorKey: "id",
    },
    {
      header: "Nombre",
      accessorKey: "nombre",
    },
    {
      header: "Puesto",
      accessorKey: "puesto",
    },
    {
      header: "Salario",
      accessorKey: "salario",
    },
    {
      id: "actions",
      header: "",
      cell: ({ row }) => (
        <div className="flex w-full flex-col sm:flex-row justify-center items-center gap-4">
          <button
            className="border w-full rounded-full px-2 cursor-pointer hover:bg-gray-400"
            onClick={() => handleShowForm(row.original)}
          >
            Editar
          </button>
          <button
            className="border w-full rounded-full px-2 cursor-pointer hover:bg-gray-400"
            onClick={() => handleDeleteEmployee(row.original.id)}
          >
            Eliminar
          </button>
        </div>
      ),
    },
  ];

  return (
    <>
      <div className="min-h-screen bg-gray-500 flex items-center justify-center flex-col text-gray-50">
        <Header onShowForm={() => handleShowForm(null)} />
        <Main columns={columns} data={data} />
        <footer className="bg-gray-600 text-center p-4 w-full">
          Desarrollado por Neider Guindigua
        </footer>
        {showForm && (
          <Form
            data={employee}
            onSave={handleSaveData}
            onCancel={handleCancelForm}
          />
        )}

        {message.show && (
          <Message
            message={message.text}
            onClose={() => setMessage({ show: false, text: "" })}
          />
        )}
      </div>
    </>
  );
}

export default App;
