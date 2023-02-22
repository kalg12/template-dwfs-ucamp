console.log("Tema: Clases");

/* -----Clases------ */

/* Declarando una clase */
class Persona {
  constructor(nombre, apellido) {
    this.nombre = nombre;
    this.apellido = apellido;
  }
  saludar() {
    console.log(`El nombre capturado fue: ${this.nombre} ${this.apellido}`);
  }
}

/* Instanciar una clase */
const persona1 = new Persona("Kevin", "Luciano");
const persona2 = new Persona("Leo", "Ramírez");
persona1.saludar();
persona2.saludar();
