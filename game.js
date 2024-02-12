// Liste der Wörter
const words = ["katze", "hund", "elefant", "giraffe", "affe"];
let selectedWord = '';
let displayWord = '';
let attempts = 10;
let highscore = 0;

// Funktion zum Auswählen eines zufälligen Wortes
function selectRandomWord() {
    const randomIndex = Math.floor(Math.random() * words.length);
    selectedWord = words[randomIndex];
    displayWord = "_".repeat(selectedWord.length);
    document.getElementById('wordDisplay').innerText = displayWord;
}

// Spielstart
selectRandomWord();
