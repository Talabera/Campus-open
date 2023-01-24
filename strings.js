let nombre = 'lucas';
let apellido = 'talabera';
let estudiante = `${nombre} ${apellido}`;
let estudianteMayus = estudiante.toLocaleUpperCase();
let estudianteMinus = estudiante.toLocaleLowerCase();
let estudianteLetras = estudiante.length;
let estudianteInicio = estudiante.charAt(0);
let estudianteFinal = estudiante.slice(-1);
let estudianteEspacio =  estudiante.replace(/ /g, "")   
let estudianteNombre = estudiante.includes(`${nombre}`)
console.log(estudianteEspacio)