# 🏢 Sistema de Gestión de Empleados

Una aplicación web moderna desarrollada con React para la gestión integral de empleados. Forma parte de un proyecto fullstack con backend en Spring Boot.

## 🚀 Características Principales

### ✨ Funcionalidades Clave

- **📋 Visualización de Empleados**: Lista completa de empleados con información detallada (ID, Nombre, Puesto, Salario)
- **➕ Agregar Empleados**: Formulario intuitivo para registrar nuevos empleados
- **✏️ Editar Empleados**: Modificación de información existente con formulario pre-cargado
- **🗑️ Eliminar Empleados**: Eliminación segura con confirmación de usuario
- **💬 Notificaciones**: Sistema de mensajes para confirmar operaciones exitosas o errores
- **📱 Diseño Responsivo**: Interfaz adaptable a diferentes dispositivos
- **🎨 UI Moderna**: Interfaz elegante con Tailwind CSS

### 🛠️ Tecnologías Utilizadas

- **Frontend**: React 19.1.0
- **Estilos**: Tailwind CSS 4.1.11
- **Tablas**: TanStack React Table 8.21.3
- **Build Tool**: Vite 7.0.4
- **Linting**: ESLint 9.30.1

## 📦 Estructura del Proyecto

```
src/
├── components/          # Componentes reutilizables
│   ├── Form.jsx        # Formulario de empleados (crear/editar)
│   ├── Header.jsx      # Barra de navegación superior
│   ├── Main.jsx        # Contenedor principal
│   ├── Message.jsx     # Sistema de notificaciones
│   └── Table.jsx       # Componente de tabla de datos
├── service/            # Servicios de API
│   ├── api.js         # Cliente HTTP base
│   └── employeeService.js # Servicios específicos de empleados
├── assets/            # Recursos estáticos (iconos SVG)
├── App.jsx           # Componente raíz
└── main.jsx         # Punto de entrada
```

## 🔧 Instalación y Configuración

### Prerrequisitos
- Node.js (versión 16 o superior)
- npm o yarn

### Instalación

1. Clona el repositorio:
```bash
git clone [URL_DEL_REPOSITORIO]
cd gest-empleados
```

2. Instala las dependencias:
```bash
npm install
```

3. Configura las variables de entorno:
```bash
# Crea un archivo .env con:
VITE_API_URL=http://localhost:8080/api
```

4. Inicia el servidor de desarrollo:
```bash
npm run dev
```

## 🎯 Uso de la Aplicación

### Gestión de Empleados

1. **Ver Empleados**: La tabla principal muestra todos los empleados registrados
2. **Agregar Empleado**: 
   - Haz clic en el botón "Agregar Empleado" en el header
   - Completa el formulario con: Nombre, Puesto y Salario
   - Haz clic en "Guardar"
3. **Editar Empleado**:
   - Haz clic en "Editar" en la fila del empleado deseado
   - Modifica los campos necesarios
   - Haz clic en "Guardar"
4. **Eliminar Empleado**:
   - Haz clic en "Eliminar" en la fila del empleado
   - Confirma la eliminación en el diálogo

### Validaciones
- Todos los campos son obligatorios
- El salario debe ser un número válido
- Confirmación requerida para eliminaciones

## 🌐 API Integration

La aplicación se conecta con un backend Spring Boot a través de los siguientes endpoints:

- `GET /empleados` - Obtener todos los empleados
- `POST /empleados` - Crear nuevo empleado
- `PUT /empleados/{id}` - Actualizar empleado existente
- `DELETE /empleados/{id}` - Eliminar empleado

## 📱 Características de UX/UI

- **Diseño Responsivo**: Adaptable a móviles, tablets y escritorio
- **Iconografía Clara**: Iconos SVG para mejorar la usabilidad
- **Feedback Visual**: Mensajes de confirmación y error
- **Formularios Modales**: Ventanas emergentes para edición/creación
- **Confirmaciones de Seguridad**: Diálogos antes de eliminar datos

## 🧪 Scripts Disponibles

```bash
npm run dev      # Servidor de desarrollo
npm run build    # Compilar para producción
npm run preview  # Previsualizar build de producción
npm run lint     # Ejecutar linter
```

## 👨‍💻 Autor

**Neider Guindigua**

---

## 📝 Notas del Proyecto

Este proyecto forma parte del curso "Java desde 0" de Udemy, específicamente del módulo de integración React + Spring Boot. Representa una implementación práctica de un CRUD completo con arquitectura frontend-backend separada.

## 🔄 Próximas Mejoras

- [ ] Filtros y búsqueda
- [ ] Validaciones avanzadas
