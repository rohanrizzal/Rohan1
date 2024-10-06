// Assignment 1 | COMP1073 Client-Side JavaScript

/* Variables
-------------------------------------------------- */
var synth = window.speechSynthesis;

// Phrase arrays (replace these with your actual phrases)
var nouns = ['cat', 'dog', 'fox', 'rabbit', 'turtle'];
var verbs = ['jumps', 'runs', 'flies', 'sleeps', 'plays'];
var adjectives = ['quick', 'lazy', 'happy', 'sad', 'colorful'];
var places = ['in the park', 'at the beach', 'in the forest', 'on the road', 'in the garden'];

var storyDisplay = document.getElementById('storyDisplay');
var speakButton = document.getElementById('speakButton');
var generateStoryButton = document.getElementById('generateStory');
var resetButton = document.getElementById('reset');
var surpriseButton = document.getElementById('surpriseButton');

/* Functions
-------------------------------------------------- */
function speakNow(string) {
	var utterThis = new SpeechSynthesisUtterance(string);
	synth.speak(utterThis);
}

function generateRandomWord(array) {
	return array[Math.floor(Math.random() * array.length)];
}

function generateRandomStory() {
	var story = `Once upon a time, a ${generateRandomWord(adjectives)} ${generateRandomWord(nouns)} ${generateRandomWord(verbs)} ${generateRandomWord(places)}.`;
	storyDisplay.textContent = story;
	return story; // Return the generated story for speaking
}

function resetStory() {
	storyDisplay.textContent = "Click a button to generate a story!";
}

/* Event Listeners
-------------------------------------------------- */
generateStoryButton.onclick = function() {
	var story = generateRandomStory();
	speakNow(story); // Speak the generated story immediately
};

resetButton.onclick = resetStory;

speakButton.onclick = function() {
	speakNow(storyDisplay.textContent);
};

// Event Listener for the "Surprise" Button
surpriseButton.onclick = function() {
	var story = generateRandomStory(); // Randomly generate a story
	speakNow(story); // Speak the random story
};
