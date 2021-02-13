const sounds = ['applause','boo','gasp','tada','victory','wrong'];

// function create the buttons 
sounds.forEach(sound => {

    // creating the button
    const btn = document.createElement('button');
    // adding the class btn
    btn.classList.add('btn');

    // setting the text of the button equal to the name of the button 
    btn.innerText = sound;
    // creating the fucntion to stop the last audio and then playin the current audio
    btn.addEventListener('click', () => {
        stopSongs();

        document.getElementById(sound).play()
    })
    // adding a new button 
    document.getElementById('buttons').appendChild(btn);
})

// fucntion to stop audio
function stopSongs() {
    // we will look inside the array for each button 
    sounds.forEach(sound => {
        //get the button by it's id
        const song = document.getElementById(sound);
        // stop the audio
        song.pause();
        // setting the audio to the beggining 
        song.currentTime = 0;
    })
}