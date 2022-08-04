export const MARCAS = [
    { id: 1, nombre: 'Europeo'},
    { id: 2, nombre: 'Americano'},
    { id: 3, nombre: 'Asiatico'}
];

const YEARMAX = new Date().getFullYear(); // Coge el año actual
export const YEARS = Array.from(          // Función para crear un array
    new Array(20),                        // Nuevo array de 20 elementos
    (_ , index) => YEARMAX - index        // .map que recorre los 20 elementos, y le resta el index a YEARMAX y lo devuelve
);

export const PLANES = [
    { id: 1, nombre: 'Básico'},
    { id: 2, nombre: 'Completo'},
];
