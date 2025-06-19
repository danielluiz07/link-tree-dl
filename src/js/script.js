// --- Controle de música ---
const musica = document.getElementById("musica");
const playButton = document.getElementById("playButton");
const pauseButton = document.getElementById("pauseButton");

playButton.addEventListener("click", () => {
    musica.play();
    playButton.disabled = true;
    pauseButton.disabled = false;
});

pauseButton.addEventListener("click", () => {
    musica.pause();
    playButton.disabled = false;
    pauseButton.disabled = true;
});


// --- Animação de fundo ---
const canvas = document.getElementById("background");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const particles = [];
const numParticles = 150;

for (let i = 0; i < numParticles; i++) {
    particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 2 + 1,
        d: Math.random() * numParticles,
    });
}

let angle = 0;

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "rgba(255, 255, 255, 0.8)";
    ctx.beginPath();

    for (let i = 0; i < numParticles; i++) {
        const p = particles[i];
        ctx.moveTo(p.x, p.y);
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2, true);
    }

    ctx.fill();
    update();
}

function update() {
    angle += 0.01;

    for (let i = 0; i < numParticles; i++) {
        const p = particles[i];
        p.y += Math.cos(angle + p.d) + 1 + p.r / 2;
        p.x += Math.sin(angle) * 2;

        if (p.y > canvas.height) {
            particles[i] = {
                x: Math.random() * canvas.width,
                y: 0,
                r: p.r,
                d: p.d,
            };
        }
    }
}

setInterval(draw, 33);