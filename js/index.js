class index {
    constructor() {
        this.departamentos = [];
        this.i = 1;
        this.p = 0;

        this.mostrarMenu();
    }

    buscarId(id) {
        for (let d of this.departamentos) {
            if (id == d.id) return true;
        }
        return false;
    }

    buscarDepartamentos(id) {
        for (let d of this.departamentos) {
          if (id == d.parent) return true;
        }
        return false;
    }

    crearDepartamento() {
        const prompt = require("prompt-sync")();

        console.log("\nCreando departamento...\n");
        let organigrama = {
            id: this.i,
            nombre: prompt("Ingrese el nombre: "),
            descripcion: prompt("Ingrese la descripcion: "),
            parent: this.p
        };     
        this.i += 1;
        this.departamentos.push(organigrama);
    }

    editarDepartamento(id) {
        const prompt = require("prompt-sync")();

        console.log("\nEditando departamento...\n");
        for (let d of this.departamentos) {
            if (id == d.id) {
                d.nombre = prompt("Edite el nombre: ");
                d.descripcion = prompt("Edite la descripcion: ");
            }
        }
    }

    eliminarDepartamento(id) {
        console.log("\nEliminando departamento...");
        let j = 0;
        for (let d of this.departamentos) {
            if (id == d.id) this.departamentos.splice(j, 1);
            j += 1;
        }
    }

    mostrarDepartamentos() {
        if (this.departamentos.length == 0)
            console.log("\n* Sin departamentos *");
        else {
            for(let d of this.departamentos) {
                if (this.p == d.id) {
                  console.log("\n\t-> ANCESTRO <-");
                  console.log("Id: " + d.id);
                  console.log("Nombre: " + d.nombre);
                  console.log("Descripcion: " + d.descripcion);
                  console.log("Parent: " + d.parent);
                }

                if (d.parent == this.p) {
                    console.log("\n-----------------------------");
                    console.log("Id: " + d.id);
                    console.log("Nombre: " + d.nombre);
                    console.log("Descripcion: " + d.descripcion);
                    console.log("Parent: " + d.parent);
                }
            }
        }
    }

    mostrarMenu() {
        const prompt = require("prompt-sync")();

        let aux = 0;
        let bandera = true;

        while(bandera) {
            
            this.mostrarDepartamentos();

            console.log("\n\tMenu");
            console.log("a) Agregar departamento");
            console.log("b) Seleccionar departamento");
            console.log("c) Editar departamento");
            console.log("d) Eliminar departamento");
            console.log("e) Salir\n");

            let op = prompt("Digite una opción: ");

            if (op == 'a') this.crearDepartamento();

            else if (op == 'b') {
                    console.log(" ");
                    let id = prompt("Seleccione el id: ");

                    if (this.buscarId(id)) {
                        aux = this.p;
                        this.p = id;
                        this.mostrarMenu();
                    }
                    else console.log("** Id no permitido **")
                
            }
            else if (op == 'c') {
                console.log(" ");
                let id = prompt("Seleccione el id: ");

                if (this.buscarId(id)) this.editarDepartamento(id);
                else console.log("** Id no permitido **");

            }
            else if (op == 'd') {
                console.log(" ");
                let id = prompt("Seleccione el id: ");

                if (this.buscarId(id)) {
                    if (this.buscarDepartamentos(id)) console.log("\n** No se puede eliminar **");
                    else this.eliminarDepartamento(id);
                } 
                else console.log("** Id no permitido **")
            }
            else if (op == 'e') {
                this.p = aux;
                bandera = false;
                console.log("\n** Saliendo... **");
            }
            else console.log("\nLa opcion no se encuentra en el menu");
        }
    }
}

function principal() { new index(); }

principal();
//window.onload = () => new index();