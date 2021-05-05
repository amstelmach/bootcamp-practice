// challenge 1 - deklaracja zmiennych

//number
const number = 1;

//string
const sentence = "Ala ma kota";
const word = 'notatnik';
const word1 = `telefon`;

//boolean
const check1 = true;
const check2 = false;

//null -typ Null to inaczej typ pusty. Posiada jedną wartość w formie literału: null. Typ ten jest zwracany przez funkcje, które to mają zamiar zwrócić nieistniejący obiekt.

//undefined - gdy nie inicjalizujemy zmiennej; gdy próbujemy odczytać wartość z funkcji, która nic nie zwraca; gdy odwołamy się do właściwości obiektu, który nie istnieje

//const empty;

function test(){
    return;
}

console.log(test());

const obj = {};

console.log(obj.a);


//symbol

const sym1 = Symbol();
const sym2 = Symbol();

console.log(sym1 === sym2);

//bigInt

const hugeNum = 9304949392920202929n;

const hugeNum1 = BigInt(9393040402992011111111);

//object
const dog = {
    name: "reksio",
    age: "2",
    food: "meat"
}

const table = [1, 2, 3, 4, 5];


function sum(a,b) {
    return a + b;
}

// challenge 2 - tworzenie funkcji

//deklaracja funkcji

function someFunction() {

}

//wyrażenie funkcyjne - podstawienie funkcji pod zmienną

const someFunction1 = function() {

}

// wyrażenie funkcyjne można też zapisać za pomocą funkcji strzałkowej; zamiast słowa "function" pojawia się => "fat arrow";

// możemy pominąć nawiasy gdy mamy tylko jeden parametr funkcji; jeśli parametrów jest więcej niż jeden bądź nie ma ich w ogóle - nawiasy muszą zostać!

const someFunction2 = a => {

}

const someFunction3 = () => {

}

// jeżeli funkcja ma tylko jedną instrukcję to możemy ominąć nawiasy klamrowe (jeż)

const someFunction4 = function (a) {
    console.log( a * a );
}

const someFunction5 = a => console.log ( a * a );

// jeżeli jedyną instrukcją funkcji jest instrukcja return to ją również możemy zredukować

const someFunction6 = a => a * a;



// challenge 3 - 

//const age = prompt("Ile masz lat?");

//if (age < 18) {
  //   console.log("nie możesz kupić piwa");
//} else {
//    console.log("możesz już kupić piwo");
//}

// tablice
//challenge 1

const fruits = ["strawberry", "apple", "blueberry", "banana", "passion fruit"];

console.log(fruits[0]);
console.log(fruits[ fruits.length-1]);


for (let i = 0; i < fruits.length; i++) {
     console.log(fruits[i]);
}

//challenge 3

let numbers = [1, 4, 10, 15, 99, 80, 1, 45, 11, 23, 3, 95];

//const num = 0;
//for (var i=0; i < fruits.length; i++) {
//num = num + fruits[i];
//}

//console.log(num);