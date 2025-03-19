const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');
const message = document.getElementById('message');

const messages = [
    "Are you sure?",
    "Really sure?",
    "Are you absolutely sure?",
    "Please say yes!",
    "Don't break my heart 💔",
    "I'll be the happiest person!",
    "Think again!"
];

let messageIndex = 0;
let noBtnClickCount = 0;

function moveButton(button) {
    const containerRect = document.querySelector('.container').getBoundingClientRect();
    const buttonRect = button.getBoundingClientRect();
    
    const maxX = containerRect.width - buttonRect.width;
    const maxY = containerRect.height - buttonRect.height;
    
    const randomX = Math.random() * maxX - maxX / 2;
    const randomY = Math.random() * maxY - maxY / 2;
    
    button.style.transform = `translate(${randomX}px, ${randomY}px)`;
}

noBtn.addEventListener('mouseover', () => {
    moveButton(noBtn);
});

noBtn.addEventListener('click', (e) => {
    e.preventDefault();
    moveButton(noBtn);
    noBtnClickCount++;
    
    if (noBtnClickCount >= 5) {
        noBtn.style.display = 'none';
    }
});

yesBtn.addEventListener('click', () => {
    if (messageIndex < messages.length) {
        message.textContent = messages[messageIndex];
        messageIndex++;
        yesBtn.classList.add('bigger');
    } else {
        message.textContent = "Yay! Happy Valentine's Day! ❤️";
        noBtn.style.display = 'none';
        yesBtn.style.transform = 'scale(2)';
    }
});