let f1 = document.forms['ss'];

f1.button.addEventListener('click', function() {
    if(f1.first.value == '') {
        !f1.second.placeholder;
    } else {
        f1.second.placeholder = f1.first.value;
        f1.first.value = ''
    }
});


f1.placeholder.addEventListener('blur', function() {
    this.placeholder = this.value;
    this.value =''
})