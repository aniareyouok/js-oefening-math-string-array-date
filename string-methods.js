/* Opdracht 0: voorbeeld */
// Check de lengte van onderstaande string en log dit in de terminal
// ---- Verwachte uitkomst: 10

const word = "zoetsappig";
console.log(word.length);


/* Opdracht 1 */
//  Check of het woord "Banaan" langer is dan het woord "Aardappel" en log dit in de terminal.
// ---- Verwachte uitkomst: false

//Ik had hier eerst aparte variabelen gemaakt voor fruit.length en vegetable.length, maar vond dat eigenlijk overbodig

const fruit = "Banaan";
const vegetable = "Aardpeer";

if (vegetable.length > fruit.length) {
    let VegetableIsTheLongestWord = true
    console.log(VegetableIsTheLongestWord)
} else {
    let VegetableIsTheLongestWord = false
    console.log(VegetableIsTheLongestWord)
}

/* Opdracht 2 */
//  Zorg ervoor dat de laatste letter van het woord in fruit en vegetable (hierboven) in de terminal gelogd wordt.
//  Tip: bedenk 1 manier die voor beide woorden zou werken.
// ---- Verwachte uitkomst voor fruit: "n"
// ---- Verwachte uitkomst voor vegetable: "l"

//Ik heb 'length' gebruikt om het index nummer van de laatste letter te kunnen bepalen
// Vervolgens haal ik de letter op met de 'charAt' functie.
//Op deze manier kan 'fruit' of 'vegetable' altijd een ander word met een ander lengte zijn.
// Het werkt nu dus ook met bijvoorbeeld 'aardbei' en 'ui'.

let lastIndexOfFruit = fruit.length-1;
let lastIndexOfVeggie = vegetable.length-1;

console.log(fruit.charAt(lastIndexOfFruit) + ' & ' + vegetable.charAt(lastIndexOfVeggie));


/* Opdracht 3 */
//  Haal de spaties aan het begin en eind van onderstaande zin weg en log dit in de terminal
// ---- Verwachte uitkomst: "De kat krabt de krullen van de trap"

const userInput = "  De kat krabt de krullen van de trap ";

neatInput = userInput.trim();

console.log(neatInput);

/* Opdracht 4 */
// Check of het woord "Fantastisch" in onderstaande zin voorkomt en log dit in de terminal.
// ---- Verwachte uitkomst: true

const story = "We vinden de behaalde resultaten werkelijk prachtig. Fantastisch, nietwaar?"

const hiddenWord = 'Fantastisch';

if (story.includes(hiddenWord)) {
    const wordFound = true;
    console.log(wordFound)
} else {
    const wordFound = false;
    console.log(wordFound)
}

/* Opdracht 5 */
// Knip de vraag van bovenstaande tekst (story) af, zodat alleen het eerste gedeelte overblijft en log dit in de terminal.
// ---- Verwachte uitkomst: "We vinden de behaalde resultaten werkelijk prachtig."


//Ik gebruik .substring in combinatie met indexOF
//De reden is luiheid, omdat ik niet wil lopen tellen op welk index nummer het spatie na het puntje zich bevindt
//Op deze manier werkt het ook bij een andere tekst, want de eerste zin wordt geprint/gelogd onafhankelijk van hoe lang de zin is.

const shorterSentence = story.substring(0, (story.indexOf('.')+1));

console.log(shorterSentence);

/* Opdracht 6 */
// Maak van onderstaand bedrag een Nederlands bedrag door het volgende te doen:
// * Vervang het dollar-teken voor een euro-teken
// * Vervang de punt voor een komma
// Log dit in de terminal.
// ---- Verwachte uitkomst: "€35,59"

const price = "$35.59";

const euroPrice = price.replace('$', '€')
const dutchPrice = euroPrice.replace('.', ',');

console.log(dutchPrice);



