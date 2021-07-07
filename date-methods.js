/* Opdracht 0: voorbeeld */
// Maak een nieuw date-object aan voor dit huidige moment en log dit in de terminal
// ---- Verwachte uitkomst: 2021-04-06T14:54:34.062Z (afhankelijk van het moment)

const currentDay = new Date();
console.log(currentDay);


/* Opdracht 1 */
// 1a. Maak een nieuw date-object aan voor dit huidige moment en log het aantal uren in de terminal
// 1b. Log daarna het aantal minuten in de terminal
// ---- Verwachte uitkomsten:
// Uren: 16 (als er een vier in de klok zit op het moment van aanroepen)
// Minuten: 36 (als het 16:36 is op het moment van aanroepen)

const currentTime = new Date();

console.log('Uren: ' + currentTime.getHours());
console.log('Minuten: ' + currentTime.getMinutes());



/* Opdracht 2 */
// Format het date-object dat je bij de vorige vraag hebt gemaakt naar een leesbare datum
// ---- Verwachte uitkomst: Tue Apr 06 2021 (afhankelijk van het moment)

//In het engels
console.log(currentTime.toDateString());

//Hier specificeren dat de dagen en maanden voluit geschreven mogen worden
const longOptions = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
};

//Hier datum en tijd in het Nederlands. Als je alleen de datum wil kan je .toLocaleDateString gebruiken
const dutchTime = currentTime.toLocaleTimeString('nl-NL', longOptions);
console.log(dutchTime);
