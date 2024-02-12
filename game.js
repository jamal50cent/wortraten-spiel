// Liste der Wörter
const words = ["katze", "hund", "elefant", "giraffe", "affe"];
let selectedWord = '';
let displayWord = '';
let attempts = 10;
let highscore = 0;

const images = [
    "https://images.pexels.com/photos/1061142/pexels-photo-1061142.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", // Bild URL für Highscore 1
    "https://images.pexels.com/photos/1061141/pexels-photo-1061141.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", // Bild URL für Highscore 2
    "https://images.pexels.com/photos/1061140/pexels-photo-1061140.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"// Bild URL für Highscore 3
];

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

        showHighscoreImage(); // Zeige ein Bild basierend auf dem Highscore

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

// Funktion, um ein Bild basierend auf dem Highscore anzuzeigen
function showHighscoreImage() {
    let imageUrl = images[highscore - 1] || images[0]; // Standardbild oder basierend auf Highscore
    document.getElementById('highscoreImage').src = imageUrl;
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