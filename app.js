//Oppgave 1
// Variable for navnet
let navn = "Mathias";
// Print av navnet
console.log('Hei ' + navn);

// Oppgave 2
let a = 6;
let b = 5;

console.log(a + b);
console.log(a * b);
console.log(a / b);
console.log(a - b);

// Oppgave 3
// let alder = prompt("Hvor gammel er du?");
//if (alder < 18) {
//  console.log("Du får ikke kjøpe øl");
//} else {
//    console.log("Du får kjøpe øl");
//}

// Oppgave 4
let bilett = prompt("Hvor gammel er du?");
if (bilett < 18) {
    console.log("Du kan kjøpe barnebillett");
}
else if (bilett >= 18 && bilett < 67) {
    console.log("Du kan kjøpe voksenbillett");
}
else {
    console.log("Du kan kjøpe honnørbillett");
}
