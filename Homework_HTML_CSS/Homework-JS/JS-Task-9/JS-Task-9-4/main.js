let adrs = prompt('') ;
if(adrs.startsWith('http://')) {
    console.log(adrs.slice(7));
} else if(adrs.startsWith('https://')) {
    console.log(adrs.slice(8));
}

