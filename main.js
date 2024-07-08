let mascotas = [];

function Mascota(nombre, raza, edad, color) {
    this.nombre = nombre;
    this.raza = raza;
    this.edad = edad;
    this.color = color;
}

function ingresarMascotas() {
    const nombre_mascota = prompt("Ingresa el nombre de tu mascota");
    const raza_mascota = prompt("Ingresa la raza de su mascota");
    const edad_mascota = parseInt(prompt("Ingresa la edad de su mascota"));
    const color_mascota = prompt("Describa el color de su mascota");

    return new Mascota(nombre_mascota, raza_mascota, edad_mascota, color_mascota);
}


for (let i = 0; i < 2; i++) {
    mascotas.push(ingresarMascotas());
}


function filtrarPorEdadMinima(edadMinima) {
    return mascotas.filter(mascota => mascota.edad >= edadMinima);
}

const edadMinimaFiltro = parseInt(prompt("Ingresa la edad mínima para filtrar mascotas"));

const mascotasFiltradas = filtrarPorEdadMinima(edadMinimaFiltro);


console.log("Mascotas con edad igual o superior a", edadMinimaFiltro, "años:");
console.log(mascotasFiltradas);

const nombreBuscado = prompt("Ingresa el nombre de la mascota que deseas buscar");


const mascotaEncontrada = mascotas.find(mascota => mascota.nombre === nombreBuscado);


if (mascotaEncontrada) {
     console.log("Mascota encontrada:", mascotaEncontrada);
} else {
     console.log("No se encontró ninguna mascota con ese nombre.");
}



