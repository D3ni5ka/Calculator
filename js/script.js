let input = document.querySelector('#calculate');
let result = document.querySelector('.result');

let out = '';
input.value = null;

let addResult = document.querySelector('#addResult')
let saveResult = document.querySelector('#saveResult');



function insert(num) {
    input.value += num;
    out += num;
    result.innerHTML = out;
}

function cleaner() {
    input.value = '';
    out = '';
    result.innerHTML = out;
}

function equal() {
    if (out) {
        input.value = eval(out);
        result.innerHTML = eval(out);
    }
}


let allClean = document.querySelectorAll('#cleanup');
for (let elem of allClean) {
    elem.addEventListener('click', function () {
        input.value = '';
    })
}



addResult.addEventListener('click', func)
function func() {
    let savePar = document.createElement('p');
    savePar.innerHTML = eval(out);
    saveResult.appendChild(savePar);


    let saveParAll = document.querySelectorAll('#saveResult > p');
    console.log(saveParAll)

    for (let elem of saveParAll) {   
        elem.addEventListener('click', function(){
            input.value = this.innerHTML;
        })
    }
}









