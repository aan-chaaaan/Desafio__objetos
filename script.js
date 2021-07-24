function Consultorio(nombre, pacientes) {
  this.nombre = nombre;
  this.pacientes = pacientes;
}

function Paciente(nombre, edad, rut, diagnostico) {
  var _nombre = nombre;
  var _edad = edad;
  var _rut = rut;
  var _diagnostico = diagnostico;

  Object.defineProperty(this, "nombre", {
    get: function () {
      return _nombre;
    },
    set: function (nuevoNombre) {
      _nombre = nuevoNombre;
    },
  });

  Object.defineProperty(this, "edad", {
    get: function () {
      return _edad;
    },
    set: function (nuevaEdad) {
      _edad = nuevaEdad;
    },
  });

  Object.defineProperty(this, "rut", {
    get: function () {
      return _rut;
    },
    set: function (nuevoRut) {
      _rut = nuevoRut;
    },
  });

  Object.defineProperty(this, "diagnóstico", {
    get: function () {
      return _diagnostico;
    },
    set: function (nuevoDiagnostico) {
      _diagnostico = nuevoDiagnostico;
    },
  });
}

Consultorio.prototype.buscar_Paciente = function (nombre_Paciente_busqueda) {
  let indice = -1;

  for (i = 0; i < this.pacientes.length; i++) {
    if (this.pacientes[i].nombre == nombre_Paciente_busqueda) {
      indice = i;
    }
  }

  if (indice >= 0) {
    console.log(
      "PACIENTE ENCONTRADO, sus datos son:",
      this.pacientes[indice].nombre
    );
  } else {
    console.log("PACIENTE NO ENCONTRADO");
  }
};

const primerPaciente = new Paciente(
  "Beatriz Pinzon Solano",
  "25",
  "11.222.333-4",
  "Resfrio"
);

const segundoPaciente = new Paciente(
  "Armando Mendoza",
  "30",
  "11.222.333-4",
  "Covid"
);

console.log(primerPaciente);
console.log(segundoPaciente);

Consultorio.prototype.todos_los_pacientes = function () {
  console.log(this.pacientes);
};

const ConsultorioMadreTeresDeCalcuta = new Consultorio(
  "Consultorio madre teresa de calcuta",
  [primerPaciente, segundoPaciente]
);

ConsultorioMadreTeresDeCalcuta.todos_los_pacientes();
ConsultorioMadreTeresDeCalcuta.buscar_Paciente("Beatriz Pinzon Solano");
ConsultorioMadreTeresDeCalcuta.buscar_Paciente("Armando Mendoza");
