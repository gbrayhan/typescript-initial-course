"use strict";
console.log("Some here in TypeScript con Platzi");
var number;
number = 234;
// number=true; // error
var numberImplicit = 1231124;
var fruits = ['Apple', 'Orange', 'Banana'];
var fruitsGeneric = ['Apple', 'Orange', 'Banana'];
var arr = [1, 3, 'Apple', 'Orange', 'Banana', true, false];
var fruitsGenericAll;
fruits = ['Apple', 'Orange', 'Banana'];
var ids;
ids = [23, 34, 100, 124, 44];
// Acertions
//Angle Bracket: <Type>
var username;
username = 'danijazzero'.toUpperCase();
///as: variable as type
username = username.toLowerCase();
// Usamos TS, definimos tipos para paramentros
function createPicture(title, date, size) {
    // Se crea la fotografia
    console.log('create Picture using', title, date, size);
}
createPicture('My Birthday', '2020-03-10', '500x500');
// createPicture('Colombia', '2020-03-20'); // --> Error
// Parametros opcionales
function createPictureTwo(title, date, size) {
    // Se crea la fotografia
    console.log('create Picture using', title, date, size);
}
// Flat Array Function
var createPic = function (title, date, size) {
    // return {
    //     title: title,
    //     date: date,
    //     size: size
    // };
    return { title: title, date: date, size: size };
};
var picture = createPic('Platzi session', '2020-03-10', '100x100');
console.log(picture);
