let glowDurationConfig = document.querySelector('#cf-glow-duration');
let r = document.querySelector(':root');
let glowMode = document.querySelector('#cf-glow-mode');

glowDurationConfig.addEventListener('input', event => {
    let val = glowDurationConfig.value;
    document.querySelector('#glow-speed-val').innerHTML = val.toString() + 's';
    r.style.setProperty('--glow-duration', val.toString() + 's');
})

glowMode.addEventListener('input', () => {
    let mode = glowMode.value;
    document.querySelector('.lights-container').dataset.glowMode = mode;
})

let playBtn = document.querySelector('#play-btn');

playBtn.onclick = () => {
    console.log('click');
    playBtn.querySelector('#play').classList.toggle('hidden');
    playBtn.querySelector('#pause').classList.toggle('hidden');
    document.querySelectorAll('.light').forEach(e => {
        e.classList.toggle('paused');
    })
}
