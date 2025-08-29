//PRIMERA PARTE 

//Primer ejercicio:
interface estudiantes{
    nombre:string;
    edad: number;
    curso: string;
    direccion: direcciones
    mostrarInfo:()=> void;
}
interface direcciones{
    calle:string
    ciudad: string
    pais:string
}

const estudiante:estudiantes = {
    nombre: 'Juan',
    edad: 22,
    curso: 'Matemáticas',
    direccion:{
        calle: 'Av. Siempre Viva',
        ciudad: 'Bogotá',
        pais: 'Colombia'
    },
    mostrarInfo() {
    return `${this.nombre} estudia ${this.curso} en
    ${this.direccion.ciudad}`;
    }
};
console.log(estudiante.mostrarInfo());


//segundo ejercicio
interface productos{
    id:number;
    nombre:string;
    precio: number;
    stock: number;
    mostrarDetalle:()=>void;
}


const producto:productos = {
    id: 1,
    nombre: 'Laptop',
    precio: 3500,
    stock: 10,
    mostrarDetalle() {
    return `${this.nombre} cuesta $${this.precio} y hay ${this.stock}
unidades disponibles`;
    }
};

console.log(producto.mostrarDetalle());

//tercer ejercicio 
interface peliculas{
  titulo:string;
  director:string;
  duracion:number;
  genero:string;
  reproducir:()=> void;
}


const pelicula:peliculas = {
  titulo: 'Avengers: Endgame',
  director: 'Anthony y Joe Russo',
  duracion: 181,
  genero: 'Acción',
  reproducir() {
    return `Reproduciendo: ${this.titulo} - Dirigida por
${this.director}`;
    }
};

console.log(pelicula.reproducir());

//Cuarto ejercicio
interface vehiculos {
    marca:string;
    modelo:string;
    anio:2022;
    encender:()=>void;
}

const vehiculo:vehiculos= {
    marca: 'Toyota',
    modelo: 'Corolla',
    anio: 2022,
    encender() {
return `${this.marca} ${this.modelo} está encendido`;
    }
};

console.log(vehiculo.encender());

//Quinto ejercicio 
interface Usuarios{
    username:string;
    password:string;
    roles: string[];
    login:()=> void;
}

const usuario:Usuarios={
    username: 'admin01',
    password: '123456',
    roles: ['admin', 'editor'],
    login() {
return `Usuario ${this.username} ha iniciado sesión con roles:
${this.roles.join(', ')}`;
    }
};

console.log(usuario.login());


//SEGUNDA PARTE

// true no se puede usar como tipo en una unión
let myValue: number | string | boolean = 10;
console.log(myValue);

// Boolean con mayúscula es un objeto, el tipo correcto es boolean
let myBoolean: boolean = true;
console.log(myBoolean);

// se asignó un string a una variable de tipo number
let healthPoints: number = 150;
console.log(healthPoints);

//otraEtiqueta no está en los tipos permitidos
let otherMultipleDataType: number | boolean | "myTag" = "myTag";
console.log(otherMultipleDataType);

// myVar sin asignar valores admitidos 
let myVar: any;
myVar = 123;
myVar = true;
myVar = "texto";
myVar = {};
console.log(myVar);

//las constantes deben inicializarse
const myConstant: number = 5;
console.log(myConstant);

// inferedDataType se infirió como string, no acepta number
let inferedDataType: string | number = "Texto inicial";
inferedDataType = 123;
console.log(inferedDataType);

// 1 no es boolean
const isActive: boolean = true;
console.log(isActive);

//true no pertenece al tipo number | string
let mixed: number | string | boolean = true;
console.log(mixed);

//while es palabra reservada
let whileVar: string = "Hola";
console.log(whileVar);

//numer no existe, debe ser number
let myNumber: number = 10;
console.log(myNumber);

// 3 es string y el arreglo es number
let numeros: number[] = [1, 2, 3];
console.log(numeros);

// falta el segundo valor en la tupla [string, number]
let tupla: [string, number] = ["Hola", 10];
console.log(tupla);

// el orden de tipos en la tupla estaba invertido
let otraTupla: [string, boolean] = ["Hola", true];
console.log(otraTupla);

// no se puede asignar null a una variable inferida como string
let texto: string | null = "Hola mundo";
texto = null;
console.log(texto);

// "amarillo" no está en el tipo literal
let color: "rojo" | "verde" | "azul" = "rojo";
console.log(color);

// any permite cualquier tipo, pero si se quiere usar toUpperCase debe ser string
let valor: any = "texto";
console.log(valor.toUpperCase());

// una constante no puede reasignarse
const version: number = 1.0;
console.log(version);

// Si se quiere cambiar el valor debe ser con let
let versionMutable: number = 1.0;
versionMutable = 2.0;
console.log(versionMutable);

// persona no tenía definido apellido en su tipo inferido
// hay que definirlo desde el inicio o declarar el tipo con apellido opcional
let persona: { nombre: string; apellido?: string } = { nombre: "Ana" };
persona.apellido = "Ruiz";
console.log(persona);

// undefined no es válido para tipo number
//  usar unión con undefined
let edad: number | undefined = undefined;
console.log(edad);

