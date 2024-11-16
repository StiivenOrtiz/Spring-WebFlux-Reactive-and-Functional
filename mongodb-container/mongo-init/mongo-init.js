// Switch to admin database first
db = db.getSiblingDB('admin');

// Check if user exists before creating
const userExists = db.getUser('mongo_user');
if (!userExists) {
  // Create the root user only if it doesn't exist
  db.createUser({
    user: 'mongo_user',
    pwd: 'mongo_pass',
    roles: [
      { role: 'root', db: 'admin' },
      { role: 'userAdminAnyDatabase', db: 'admin' },
      { role: 'dbAdminAnyDatabase', db: 'admin' },
      { role: 'readWriteAnyDatabase', db: 'admin' },
    ],
  });
}

// Switch to taskdb database
db = db.getSiblingDB('taskdb');

// Drop existing collections if they exist to avoid duplicates
if (db.getCollectionNames().indexOf('users') !== -1) {
  db.users.drop();
}
if (db.getCollectionNames().indexOf('tasks') !== -1) {
  db.tasks.drop();
}

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
