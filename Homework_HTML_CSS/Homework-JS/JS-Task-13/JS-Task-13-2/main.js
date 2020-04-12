let getSel = x => document.querySelector(x);

window.addEventListener('keydown', function(event){
    if(event.keyCode == 9){
        event.preventDefault();
        getSel('.area').value += '\t';
    }
    if(event.keyCode != 16){
        getSel(`.key${event.keyCode}`).style.backgroundColor = '#888';
        getSel(`.key${event.keyCode}`).style.color = '#fff';
    } else{
        getSel(`.keyShift${event.location}`).style.backgroundColor = '#888';
        getSel(`.keyShift${event.location}`).style.color = '#fff';
    }
})

window.addEventListener('keyup', function(event){
    if(event.keyCode != 16){
        getSel(`.key${event.keyCode}`).style.backgroundColor = '';
        getSel(`.key${event.keyCode}`).style.color = '';
    } else{
        getSel(`.keyShift${event.location}`).style.backgroundColor = '';
        getSel(`.keyShift${event.location}`).style.color = '';
    }
});