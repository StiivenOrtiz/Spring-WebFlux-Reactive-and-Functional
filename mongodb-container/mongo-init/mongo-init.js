db = db.getSiblingDB('taskdb');

// Crear colección de usuarios
db.createCollection('users');

// Insertar algunos usuarios
db.users.insertMany([
  {
    username: 'john_doe',
    email: 'john@example.com',
  },
  {
    username: 'jane_smith',
    email: 'jane@example.com',
  },
  {
    username: 'bob_wilson',
    email: 'bob@example.com',
  },
]);

// Crear colección de tareas
db.createCollection('tasks');

// Insertar algunas tareas
db.tasks.insertMany([
  {
    email: 'john@example.com',
    title: 'Completar informe',
    description: 'Terminar el informe mensual de ventas',
    completed: false,
  },
  {
    email: 'john@example.com',
    title: 'Reunión con cliente',
    description: 'Preparar presentación para el cliente',
    completed: true,
  },
  {
    email: 'jane@example.com',
    title: 'Actualizar base de datos',
    description: 'Actualizar registros de clientes',
    completed: false,
  },
  {
    email: 'bob@example.com',
    title: 'Revisar código',
    description: 'Hacer code review del último PR',
    completed: true,
  },
]);
