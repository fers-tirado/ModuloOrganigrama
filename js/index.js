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
        console.log("Creando departamentos");
        let organigrama = {
            id: prompt("Ingrese el id"),
            nombre: prompt("Ingrese el nombre"),
            descripcion: prompt("Ingrese la descripcion"),
            parent: prompt("Ingrese el parent")
        };     

        this.departamentos.push(organigrama);
    }

    mostrarDepartamentos() {
        if (this.departamentos.length == 0)
            console.log("No hay departamentos");
        else {
            for(let d of this.departamentos) {
                console.log("Id: " + d.id);
                console.log("Nombre: " + d.nombre);
                console.log("Descripcion: " + d.descripcion);
                console.log("Parent" + d.parent);
            }
        }
    }

    mostrarOpciones() {
        let bandera = true;
        while(bandera) {
            this.mostrarDepartamentos();
            console.log("Menu de opciones");
            console.log("a) Agregar departamento");
            console.log("b) Seleccionar departamento");
            console.log("c) Salir");

            let op = prompt("Digite una opción:");
            
            switch(op) {
                case 'a':
                    //console.log("Creando departamentos");
                    this.crearDepartamento();
                break;

                case 'b':

                break;

                case 'c':
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

/*class organigrama {
  constructor() {
    this.id = 0;
    this.nombre = "";
    this.descripcion = "";
    this.parent = 0;
  }

  getId() {
    return this.id;
  }

  setId(id) {
    this.id = id;
  }

  getNombre() {
    return this.nombre;
  }

  setNombre(nombre) {
    this.nombre = nombre;
  }

  getDescripcion() {
    return this.descripcion;
  }

  setDescripcion(descripcion) {
    this.descripcion = descripcion;
  }

  getParent() {
    return this.parent;
  }

  setParent(parent) {
    this.parent = parent;
  }
}
*/
window.onload = () => new index();