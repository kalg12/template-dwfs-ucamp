console.log("Hola 🤖");
/* ------------------- */
const curso = {
  nombre: "UCAMP",
  tipos: "FullStack",
  modulos: [
    { nombre: "css", cursado: true },
    { nombre: "JavaScript", cursado: true },
    { nombre: "React", cursado: false },
  ],
  saludar: (nombreDePersona) => {
    console.log(`Hola, mucho gusto ${nombreDePersona}`);
  },
};

/* Impresión en consola */
console.log(typeof curso);
/* Aquí va a imprimir el nombre de la empresa: UCAMP */
console.log(curso.nombre);

/* Aquí quiero imprimir el nombre JavaScript del objeto que se encuentra en mi array módulos */
console.log(curso.modulos[1].nombre);
