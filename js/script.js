// catching DOM
let input = document.querySelector('.input');
let button = document.querySelector('#neonShadow');
let error = document.querySelector('.error');
let result = document.querySelector('.result');


button.addEventListener('click', ()=> {

    if(input.value == ''){
        
        error.innerHTML = 'Please Enter Number';
        result.innerHTML='';
        
    }
    else{
        error.innerHTML = '';
        result.innerHTML = '';
        for(let i=1; i<=10; i++){
            result.innerHTML += input.value + ' x ' + i +' = '+(input.value*i) + '<br>'
        }
        input.value= '';
    }
    
})
