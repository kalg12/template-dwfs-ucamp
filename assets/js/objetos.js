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

/* Vamos a hacer uso del DOM para meter datos en el HTML */
document.getElementById("dom").innerHTML = `
<li>${curso.nombre}</li>

<table style="height: 205px;" width="440">
<tbody>
<tr>
<td style="width: 139.328px;">No.</td>
<td style="width: 139.328px;">Nombre</td>
<td style="width: 139.344px;">¿Cursado?</td>
</tr>
<tr>
<td style="width: 139.328px;">1</td>
<td style="width: 139.328px;">${curso.modulos[0].nombre}</td>
<td style="width: 139.344px;">${curso.modulos[0].cursado}</td>
</tr>
<tr>
<td style="width: 139.328px;">2</td>
<td style="width: 139.328px;">${curso.modulos[1].nombre}</td>
<td style="width: 139.344px;">${curso.modulos[1].cursado}</td>
</tr>
<tr>
<td style="width: 139.328px;">3</td>
<td style="width: 139.328px;">${curso.modulos[2].nombre}</td>
<td style="width: 139.344px;">${curso.modulos[2].cursado}</td>
</tr>
</tbody>
</table>

`;
