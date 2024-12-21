const display = document.getElementById("display");
const buttons =document.querySelectorAll('.btn, .btn-operator, .btn-eual');
buttons.forEACH(button => {
    button.addEventListener('click',() =>{
        const value = button.innerText;
        if(value === 'C'){
            display.innerText=""
        }else if (value === '=') {
            try {
                display.innerText = eval(display.inner)
            }
        }       
    })
})