const Empleados = [
  {
    EmpleadoID: 1,
    HorarioID: 101,
    HorarioFecha: "2025-07-13",
    Name: "Eduardo",
    Apellido: "Ferreras",
    Username: "eduado154@gmail.com",
    Password: "123",
    Role: "owner",
    Phone: "000-000-0000",
    Estado: "Activo",
    Img: "https://tse4.mm.bing.net/th/id/OIP.aoLu6p0Vi3ntiaTSddpfwwHaEK?r=0&w=770&h=433&rs=1&pid=ImgDetMain&o=7&rm=3",
    horario: [
      { horarioID: 1, dia: "Lunes", start: "08:00", end: "17:00" },
      { horarioID: 2, dia: "Martes", start: "08:00", end: "17:00" },
      { horarioID: 3, dia: "Miércoles", start: "08:00", end: "17:00" },
      { horarioID: 4, dia: "Jueves", start: "08:00", end: "17:00" },
      { horarioID: 5, dia: "Viernes", start: "08:00", end: "17:00" },
      { horarioID: 6, dia: "Sábado", start: "08:00", end: "12:00" },
      { horarioID: 7, dia: "Domingo", start: "00:00", end: "00:00" }, // día libre o cerrado
    ]
  },
  {
    EmpleadoID: 2,
    HorarioID: 102,
    HorarioFecha: "2025-07-13",
    Name: "Ana",
    Apellido: "Hernandez",
    Username: "Ana@gmail.com",
    Password: "123",
    Role: "Employee",
    Phone: "000-000-0000",
    Estado: "Activo",
    Img: "https://tse4.mm.bing.net/th/id/OIP.aoLu6p0Vi3ntiaTSddpfwwHaEK?r=0&w=770&h=433&rs=1&pid=ImgDetMain&o=7&rm=3",
    horario: [
      { horarioID: 8, dia: "Lunes", start: "09:00", end: "18:00" },
      { horarioID: 9, dia: "Martes", start: "09:00", end: "18:00" },
      { horarioID: 10, dia: "Miércoles", start: "09:00", end: "18:00" },
      { horarioID: 11, dia: "Jueves", start: "09:00", end: "18:00" },
      { horarioID: 12, dia: "Viernes", start: "09:00", end: "18:00" },
      { horarioID: 13, dia: "Sábado", start: "09:00", end: "13:00" },
      { horarioID: 14, dia: "Domingo", start: "00:00", end: "00:00" },
    ]
  },
  {
    EmpleadoID: 3,
    HorarioID: 103,
    HorarioFecha: "2025-07-13",
    Name: "Miguel",
    Apellido: "Perez",
    Username: "ePerez@gmail.com",
    Password: "123",
    Role: "Admin",
    Phone: "000-000-0000",
    Estado: "Activo",
    Img: "https://tse4.mm.bing.net/th/id/OIP.aoLu6p0Vi3ntiaTSddpfwwHaEK?r=0&w=770&h=433&rs=1&pid=ImgDetMain&o=7&rm=3",
    horario: [
      { horarioID: 15, dia: "Lunes", start: "07:00", end: "16:00" },
      { horarioID: 16, dia: "Martes", start: "07:00", end: "16:00" },
      { horarioID: 17, dia: "Miércoles", start: "07:00", end: "16:00" },
      { horarioID: 18, dia: "Jueves", start: "07:00", end: "16:00" },
      { horarioID: 19, dia: "Viernes", start: "07:00", end: "16:00" },
      { horarioID: 20, dia: "Sábado", start: "07:00", end: "12:00" },
      { horarioID: 21, dia: "Domingo", start: "00:00", end: "00:00" },
    ]
  },
  {
    EmpleadoID: 4,
    HorarioID: 104,
    HorarioFecha: "2025-07-13",
    Name: "Jose",
    Apellido: "Rodriguez",
    Username: "Rodriguez@gmail.com",
    Password: "123",
    Role: "Admin",
    Phone: "000-000-0000",
    Estado: "Inactivo",
    Img: "https://tse4.mm.bing.net/th/id/OIP.aoLu6p0Vi3ntiaTSddpfwwHaEK?r=0&w=770&h=433&rs=1&pid=ImgDetMain&o=7&rm=3",
    horario: [
      { horarioID: 22, dia: "Lunes", start: "10:00", end: "19:00" },
      { horarioID: 23, dia: "Martes", start: "10:00", end: "19:00" },
      { horarioID: 24, dia: "Miércoles", start: "10:00", end: "19:00" },
      { horarioID: 25, dia: "Jueves", start: "10:00", end: "19:00" },
      { horarioID: 26, dia: "Viernes", start: "10:00", end: "19:00" },
      { horarioID: 27, dia: "Sábado", start: "10:00", end: "14:00" },
      { horarioID: 28, dia: "Domingo", start: "00:00", end: "00:00" },
    ]
  }  
];

export default Empleados;
