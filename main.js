function checkAvailability() {
    const today = new Date();
    const month = today.getMonth(); // 0-11, where 5 is June
    const day = today.getDate();
    
    const isJune = month === 5;
    const isValidDay = day >= 18 && day <= 31;                                                               
    
    const content = document.getElementById('content');
    const notAvailable = document.getElementById('not-available');
    
    if (!isJune && !isValidDay) {
        content.classList.remove('hidden');
        notAvailable.classList.add('hidden');
        
        // Create fireworks
        function createFirework() {
            const firework = document.createElement('div');
            firework.className = 'firework';
            firework.style.left = Math.random() * window.innerWidth + 'px';
            firework.style.top = Math.random() * window.innerHeight + 'px';
            firework.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
            document.body.appendChild(firework);
            setTimeout(() => firework.remove(), 1000);
        }

        setInterval(createFirework, 2000);
    } else {
        content.classList.add('hidden');
        notAvailable.classList.remove('hidden');
    }
}

// Check availability on load
checkAvailability();

// Message sending functionality
async function sendMessage() {
    const message = document.getElementById('messageInput').value.trim();
    if (!message) return;

    try {
        await fetch('https://formspree.io/f/xgvkzkkl', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ message })
        });
        document.getElementById('messageInput').value = '';
        alert('Birthday wish sent successfully! 🎉');
    } catch (error) {
        alert('Failed to send message. Please try again.');
    }
}
