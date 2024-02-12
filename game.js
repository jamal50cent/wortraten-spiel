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


// Funktion zum Rateversuch eines Buchstabens
function guessLetter() {
    const guess = document.getElementById('guessInput').value.toLowerCase();
    if (guess && selectedWord.includes(guess)) {
        updateDisplayWord(guess);
    } else {
        attempts--;
        updateProgress();
        if (attempts <= 0) {
            alert('Leider verloren! Das Wort war: ' + selectedWord);
            restartGame();
        }
    }
    document.getElementById('guessInput').value = ''; // Eingabefeld leeren
}

// Funktion zum Aktualisieren des angezeigten Wortes
function updateDisplayWord(guess) {
    let newDisplay = '';
    for (let i = 0; i < selectedWord.length; i++) {
        if (selectedWord[i] === guess) {
            newDisplay += guess;
        } else {
            newDisplay += displayWord[i];
        }
    }
    displayWord = newDisplay;
    document.getElementById('wordDisplay').innerText = displayWord;

    if (!displayWord.includes('_')) {
        alert('Gewonnen!');
        highscore++;
        updateHighscore();
        restartGame();
    }
}

// Highscore aktualisieren
function updateHighscore() {
    document.getElementById('highscore').innerText = 'Highscore: ' + highscore;
}


// Fortschritt aktualisieren
function updateProgress() {
    document.getElementById('progress').innerText = 'Verbleibende Versuche: ' + attempts;
}

// Spiel neustarten
function restartGame() {
    attempts = 10;
    selectRandomWord();
    updateProgress();
    updateHighscore();
}

// Spielstart
selectRandomWord();
updateProgress();
updateHighscore();