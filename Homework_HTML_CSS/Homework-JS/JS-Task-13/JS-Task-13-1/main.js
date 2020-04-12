let getSel = x => document.querySelector(x);

getSel('.color').addEventListener('click', function() {
    getSel('.listColor').style.display = 'flex';
    for (let i = 0; i < getSel('.listColor').children.length; i++) {
        getSel('.listColor').children[i].onclick = function() {
            document.body.style.background = getComputedStyle(this).backgroundColor;
        }
    }
});



getSel('.picture').addEventListener('click', function() {
    getSel('.listColor').style.display = 'flex';
    getSel('.firstRowLeftColor').classList.toggle('firstRowLeftPicture');
    getSel('.firstRowCenterColor').classList.toggle('firstRowCenterPicture');
    getSel('.firstRowRightColor').classList.toggle('firstRowRightPicture');
    getSel('.secondRowLeftColor').classList.toggle('secondRowLeftPicture');
    getSel('.secondRowCenterColor').classList.toggle('secondRowCenterPicture');
    getSel('.secondRowRightColor').classList.toggle('secondRowRightPicture');
    getSel('.thirdRowLeftColor').classList.toggle('thirdRowLeftPicture');
    getSel('.thirdRowCenterColor').classList.toggle('thirdRowCenterPicture ');
    getSel('.thirdRowRightColor').classList.toggle('thirdRowRightPicture');
    for(let i = 0; i < getSel('.listColor').children.length; i++){
        getSel('.listColor').children[i].onclick = function(){
            document.body.style.background = getComputedStyle(this).background;
        }
    }
})