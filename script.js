function jitterText() {
    // Target any element with the class "jitter"
    const elements = document.querySelectorAll('.jitter');
    
    elements.forEach(el => {
        const x = (Math.random() * 1.5 - 0.75).toFixed(2);
        const y = (Math.random() * 1.5 - 0.75).toFixed(2);
        const r = (Math.random() * 1 - 0.5).toFixed(2);
        
        el.style.transform = `translate(${x}px, ${y}px) rotate(${r}deg)`;
    });
}

// Loops continuously every 150 milliseconds to mimic old projector frames
setInterval(jitterText, 150);
