console.log("Some here in TypeScript con Platzi");


let number : number;
number = 234;
// number=true; // error

let numberImplicit = 1231124;


let fruits: string[] = ['Apple', 'Orange', 'Banana'];

let fruitsGeneric: Array<string> = ['Apple', 'Orange', 'Banana'];

let arr = [1, 3, 'Apple', 'Orange', 'Banana', true, false];

let fruitsGenericAll: Array<string>;
fruits = ['Apple', 'Orange', 'Banana'];

let ids: Array<number>;
ids = [23, 34, 100, 124, 44];



// Acertions
//Angle Bracket: <Type>
let username : any;
username = (<string>'danijazzero').toUpperCase()
///as: variable as type
username = (username as string).toLowerCase()


// Functions

// // Crear una Fotografia: JS
// function createPicture(title, date, size) {
//     // title
// }

type SquareSize = '100x100' | '500x500' | '1000x1000'
// Usamos TS, definimos tipos para paramentros
function createPicture(title:string, date: string, size: SquareSize) {
    // Se crea la fotografia
    console.log('create Picture using', title, date, size);
}

createPicture('My Birthday', '2020-03-10', '500x500');
// createPicture('Colombia', '2020-03-20'); // --> Error

// Parametros opcionales
function createPictureTwo(title?:string, date?: string, size?: SquareSize) {
    // Se crea la fotografia
    console.log('create Picture using', title, date, size);
}

// Flat Array Function
const createPic = (title: string, date: string, size: SquareSize): object => {
    // return {
    //     title: title,
    //     date: date,
    //     size: size
    // };
    return { title, date, size };
};

const picture = createPic('Platzi session', '2020-03-10', '100x100');
console.log(picture);