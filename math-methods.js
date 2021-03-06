/* Opdracht 0: voorbeeld */
// Log het cijfer PI in de terminal
// ---- Verwachte uitkomst: 3.141592653589793

console.log(Math.PI);

/* Opdracht 1: */
// Bereken de omtrek van een cirkel met een diameter van 4 en log dit in de terminal. De eenheid (cm, meters, etc. maakt niet uit).
// Tip: de formule is omtrek = diameter * pi
// ---- Verwachte uitkomst: 12.566370614359172

function circumferenceOfCircle (diameter) {
    return Math.PI * diameter
}

console.log(circumferenceOfCircle(4));

/* Opdracht 2: */
// Bereken de omtrek van een cirkel met een diameter van 12 en rond dit af naar een heel getal. Log dit in de terminal.
// ---- Verwachte uitkomst: 38

function circumferenceRound (diameter) {
    return Math.round(Math.PI * diameter)
}

console.log(circumferenceRound(12));

/* Opdracht 3: */
// Bereken de wortel van 9 en log dit in de terminal
// ---- Verwachte uitkomst: 3

const squareOfx = Math.sqrt(9);

console.log(squareOfx);

/* Opdracht 4: */
// Genereer een willekeurig getal tussen de 0 en 1 en doe dan een check:
// * is het willekeurige getal groter dan 0.5 ? Log dan het getal met "Het glas is halfvol" in de terminal
// * is het willekeurige getal kleiner dan 0.5 ? Log dan het getal met "Het glas is half leeg" in de terminal
// Tip: iedere keer als je het script opnieuw draait (wel even een extra spatie toevoegen o.i.d.) is dit getal anders ;)
// ---- Verwachte uitkomst: Bijbehorende zin afhankelijk van de

//Ik heb hier math.round toegevoegd om op 1 decimal uit te komen
//De opdracht is onduidelijk "kleiner dan 0.5" of "groter dan 0.5" en wat als het gelijk is aan 0.5? Ik heb het zo gelaten.
const randomNumber = Math.round(Math.random() * 10)/10;

if (randomNumber > 0.5) {
    console.log(randomNumber + ' Het glas is half vol' + '\n')
} else {
    console.log(randomNumber + ' Het glas is half leeg' + '\n')
}