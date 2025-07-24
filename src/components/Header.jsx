import IconHome from '../assets/home-svgrepo-com.svg';
import IconAdd from '../assets/add-user-svgrepo-com.svg';

export const Header = ({onShowForm}) => {

  return (
    <header className="bg-gray-900 w-full p-4 flex items-center justify-between gap-4">
      <div className="w-1/2">
        <h1 className="text-2xl font-bold">Sistema de Gestión de Empleados</h1>
      </div>
      <div className="flex gap-2 justify-center">
        <button className="bg-gray-500 px-3 py-1 rounded-2xl cursor-pointer hover:bg-gray-400 transition md:flex md:items-center md:gap-2" 
                title='Inicio'>
          <img src={IconHome} alt="Inicio" className="size-6" />
          <span className="hidden md:inline">Inicio</span>
        </button>
        <button className="bg-gray-500 px-3 rounded-2xl cursor-pointer hover:bg-gray-400 transition md:flex md:items-center md:gap-2"
                title='Agregar Empleado'
                onClick={onShowForm}>
          <img
            src={IconAdd}
            alt="Agregar Empleado"
            className="size-6"
          />
          <span className="hidden md:inline">Agregar Empleado</span>
        </button>
      </div>
    </header>
  );
};
