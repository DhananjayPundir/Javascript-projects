let ipt = document.getElementById('input');
let btn = document.querySelectorAll('button');
let string="";

btn.forEach(b =>{
    b.addEventListener('click',(e)=>{
        if(e.target.innerHTML == '='){
            string = eval(string);
            ipt.value = string;
        }
        else if(e.target.innerHTML == 'AC'){
            string = "";
            ipt.value = string;
        }
        else if(e.target.innerHTML == 'DEL'){
            string = string.substring(0, string.length-1);
            ipt.value = string;
        }
        else if (e.target.innerHTML === 'x!') {
            string = factorial(parseInt(string)).toString();
            ipt.value = string;
        } else if (e.target.innerHTML === '%') {
            string = (parseFloat(string) / 100).toString();
            ipt.value = string;
        }
        else{
            string += e.target.innerHTML;
            ipt.value = string;
        }
    });
});

function factorial(n) {
    if (n < 0) return "Error";
    if (n === 0 || n === 1) return 1;
    let result = 1;
    for (let i = n; i > 1; i--) {
        result *= i;
    }
    return result;
}