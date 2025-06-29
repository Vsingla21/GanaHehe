const cardsContainer = document.getElementById('cards-container');
const progressBars = [];

// Define your audio and image paths
const audioPaths = [
    'audio/a1.mp3',
    'audio/a2.mp3',
    'audio/a3.mp3',
    'audio/a4.mp3',
    'audio/a5.mp3',
    'audio/a6.mp3',
];

const imagePaths = [
    'images/J.png',
    'images/A.png',
    'images/Y.png',
    'images/A.png',
    'images/N.png',
    'images/T.png',
];

const titlePaths = [
    'Jab koi baat..',
    'Aap Jaisa Koi..',
    'Ye Ladka haye..',
    'Aapki Nazron Ne..',
    'Nazar Ke Samne..',
    'Nazm nazm..'
]


// Create cards dynamically
for (let i = 0; i < audioPaths.length; i++) {
    createCard(i);
}

function createCard(index) {
    const card = document.createElement('div');
    card.classList.add('card');

    const image = document.createElement('img');
    image.src = imagePaths[index];
    image.alt = `Image ${index + 1}`;
    card.appendChild(image);

    const cardContent = document.createElement('div');
    cardContent.classList.add('card-content');

    const title = document.createElement('h2');
    title.textContent = titlePaths[index];
    cardContent.appendChild(title);

    const description = document.createElement('p');
    description.textContent = "Vanshika";
    cardContent.appendChild(description);

    const playerControls = document.createElement('div');
    playerControls.classList.add('player-controls');

    const audio = new Audio(audioPaths[index]); // Create audio element
    const playPauseBtn = document.createElement('button');
    playPauseBtn.textContent = 'Play';
    playPauseBtn.addEventListener('click', function() {
        togglePlayPause(index, audio);
    });
    playerControls.appendChild(playPauseBtn);

    const progressBar = document.createElement('div');
    progressBar.classList.add('progress-bar');
    const progress = document.createElement('div');
    progressBars.push(progress);
    progress.classList.add('progress');
    progressBar.appendChild(progress);
    playerControls.appendChild(progressBar);

    card.appendChild(cardContent);
    card.appendChild(playerControls);

    cardsContainer.appendChild(card);
}

function togglePlayPause(index, audio) {
    const playPauseBtn = cardsContainer.children[index].querySelector('button');
    if (playPauseBtn.textContent === 'Play') {
        playSong(index, audio);
    } else {
        pauseSong(index, audio);
    }
}

function playSong(index, audio) {
    audio.play(); // Play the audio
    progressBars[index].interval = setInterval(() => updateProgress(index, audio), 1000);
    cardsContainer.children[index].querySelector('button').textContent = 'Pause';
}

function pauseSong(index, audio) {
    audio.pause(); // Pause the audio
    clearInterval(progressBars[index].interval);
    cardsContainer.children[index].querySelector('button').textContent = 'Play';
}

function updateProgress(index, audio) {
    const progressBar = progressBars[index];
    const progress = (audio.currentTime / audio.duration) * 100;
    progressBar.style.width = progress + '%'; // Update progress bar based on audio currentTime
}
