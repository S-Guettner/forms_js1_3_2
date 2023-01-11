let output = document.getElementById("output");


let counter = 0;
output.innerHTML = counter;

function calculate (input){
    counter += input;
    output.innerHTML = counter;
}


function reset(){
    counter = 0;
    output.innerHTML = counter;
}

function timesTwo(){
    counter = counter * 2;
    output.innerHTML = counter;
}








