document.body.addEventListener('keyup', (event)=>{
    playSound(event.code.toLowerCase());
});

document.querySelector('.composer button').addEventListener('click',()=>{
    let valueinput = document.querySelector('#input').value;

    if(valueinput !== '') {
        let songArray = valueinput.split('');

        CompositioSound(songArray);
    }
});

function playSound(sound) {
    let elementsound = document.querySelector(`#s_${sound}`);
    let teclaColor = document.querySelector(`div[data-key="${sound}"]`);


    if (elementsound) {
        elementsound.play();
    }

    if (teclaColor) {
        teclaColor.classList.add("active");

        setTimeout(()=>{
            teclaColor.classList.remove('active');
        }, 500);
    }


};

function CompositioSound(songArray) {
    let interval = 0;

    for (let item of songArray) {
        
        setTimeout(()=>{
            playSound(`key${item}`);
        }, interval)

        interval += 300;
    }
}