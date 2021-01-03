/*
DEPARTAMENTO: DIRECCIÓN GENERAL
DESCENDIENTES: 
- DIRECCIÓN GENERAL
- SECRETARIA DIRECCIÓN GENERAL
- CENTRO DE INNOVACIÓN Y TRANSFERENCIA DE TECNOLOGÍA

DEPARTAMENTO: DIRECCIÓN ADMINISTRATIVA
DESCENDIENTES: 
- DIRECCIÓN ADMINISTRATIVA
- RECURSOS FINANCIEROS
- RECURSOS HUMANOS
- RECURSOS MATERIALES Y SERVICIOS GENERALES

DEPARTAMENTO: DIRECCIÓN DE PLANEACIÓN Y VINCULACIÓN
DESCENDIENTES:
- DIRECCIÓN DE PLANEACIÓN Y VINCULACIÓN
- SECRETARÍA DE DIRECCIÓN DE PLANEACIÓN Y VINCULACIÓN
- SUBDIRECCIÓN DE VINCULACIÓN
    - COORDINACIÓN DE EGRESADOS
    - OFICINA DE SERVICIO SOCIAL
- SISTEMA DE GESTIÓN INTEGRAL (SGC Y SGA)
- BECAS
    - PROGRAMACIÓN Y PRESUPUESTOS
    - COMUNICACIÓN Y DIFUSIÓN
- ACTIVIDADES EXTRAESCOLARES
- SERVICIOS ESCOLARES
- SECRETARIAS DE SERVICIOS ESCOLARES
- CENTRO DE INFORMACIÓN

DEPARTAMENTO: DIRECCIÓN ACADÉMICA
DESCENDIENTES:
- DIRECCIÓN ACADÉMICA
- SECRETARIA DE DIRECCIÓN ACADÉMICA
- COORDINACIÓN DE POSGRADOS
- DIVISIÓN DE ESTUDIOS PROFESIONALES
- JEFATURA DE INGENIERÍA EN SISTEMAS COMPUTACIONALES
- JEFATURA DE INGENIERÍA ELECTROMECÁNICA
- JEFATURA DE INGENIERÍA CIVIL
- JEFATURA DE INGENIERÍA INDUSTRIAL
- JEFATURA DE INGENIERÍA BIOQUÍMICA
- JEFATURA DE INGENIERÍA AMBIENTAL
- JEFATURA DE INGENIERÍA EN TECNOLOGÍAS DE LA INFORMACIÓN Y COMUNICACIONES
- JEFATURA DE INGENIERÍA PETROLERA
- JEFATURA DE INGENIERÍA EN GESTIÓN EMPRESARIAL
- DESARROLLO ACADÉMICO 
    - ORIENTACIÓN EDUCATIVA
    - PROGRAMA DE TUTORÍAS
    - FORMACIÓN Y ACTUALIZACIÓN DOCENTE
- SISTEMATIZACIÓN Y REDES
- LABORATORIO DE ELECTRÓNICA
- LABORATORIO DE QUÍMICA
- LABORATORIO DE INVESTIGACIÓN AVANZADA
- NAVE INDUSTRIAL
- COORDINACIÓN DE LENGUAS EXTRANJERAS
- CIENCIAS BÁSICAS
- PSICOLOGO
- SALA DE MAESTROS 1
- SALA DE MAESTROS 2

DEPARTAMENTO: SUBDIRECCIÓN SISTEMA ABIERTO
DESCENDIENTES:
- SUBDIRECCIÓN DEL SISTEMA ABIERTO
- SECRETARIA DE LA SUBDIRECCIÓN DEL SISTEMA ABIERTO
- COORDINADORA DE INGENIERÍA INDUSTRIAL
- COORDINADOR DE INGENIERÍA EN SISTEMAS COMPUTACIONALES
- COORDINADORA DE INGENIERÍA EN GESTIÓN EMPRESARIAL
- ENCARGADO DEL SERVICIO SOCIAL DEL SISTEMA ABIERTO
- ENCARGADA DEL IDIOMA INGLÉS DEL SISTEMA ABIERTO 
*/
class index {
    constructor() {
        console.log("--- Comienzo programa ---");
        this.departamentos = [];
        this.mostrarOpciones();
    }



    crearDepartamento() {
        let obj = new organigrama();
        obj.id = 5;

        console.log(obj.id);

        departamentos = [];
    }

    mostrarOpciones() {
        let bandera = true;
        while(bandera) {
            console.log("Menu de opciones");
            console.log("1 -> Agregar departamento");
            console.log("2 -> Seleccionar departamento");
            console.log("3 -> Salir");

            let op = prompt("Digite una opción:") 
            
            switch(op) {
                case '1':

                break;

                case '2':

                break;

                case '3':
                    bandera = false;
                    console.log("Salio del programa");
                break;

                default:
                    console.log("La opcion no se encuentra en el menu");
                break;    
            }
        }
    }

    generarIdAleatorio() {
        return Math.floor((Math.random() * 10) + 0);
    }
}

class organigrama {
  constructor() {
    this.id = 0;
    this.nombre = "";
    this.descripcion = "";
    this.parent = "";
  }

  get id() {
    return this.id;
  }

  set id(id) {
    this.id = id;
  }

  get nombre() {
    return this.nombre;
  }

  set nombre(nombre) {
    this.nombre = nombre;
  }

  get descripcion() {
    return this.descripcion;
  }

  set descripcion(descripcion) {
    this.descripcion = descripcion;
  }

  get parent() {
    return this.parent;
  }

  set parent(parent) {
    this.parent = parent;
  }
}

window.onload = () => new index();