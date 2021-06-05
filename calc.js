const d = document;
const calc = d.getElementById('root')

//screen 
const screenCalc = d.createElement("div");
calc.appendChild(screenCalc);
screenCalc.classList.add('screenCalc');

const container = d.createElement('div');
screenCalc.appendChild(container);
container.classList.add('container')

const green = d.createElement('div');
container.appendChild(green);
green.classList.add('green');

const red = d.createElement('div');
container.appendChild(red);
red.classList.add('red');

const yellow = d.createElement('div');
container.appendChild(yellow);
yellow.classList.add('yellow');

const output = d.createElement('input')
container.appendChild(output);
output.classList.add('output')
output.setAttribute('type','tex')
output.setAttribute('disabled', true)

const input =d.createElement('input');
screenCalc.appendChild(input)
input.classList.add('input');
input.setAttribute('placeholder','0')
input.setAttribute('disabled', true)
input.setAttribute('type','tex')

const comput = d.createElement('span');
container.appendChild(comput);
comput.classList.add('comput');
comput.setAttribute('value','hhh');
comput.textContent = ''

//buttons
const divButtons = d.createElement('div');
calc.appendChild(divButtons)
divButtons.classList.add('divButtons');

const acButton = d.createElement('button');
divButtons.appendChild(acButton);
acButton.classList.add('AC');
acButton.innerText = 'AC';

const plusMinusButton = d.createElement('button');
divButtons.appendChild(plusMinusButton);
plusMinusButton.classList.add('operator')
plusMinusButton.textContent ='+/-';

const percentButton = d.createElement('button');
divButtons.appendChild(percentButton);
percentButton.classList.add('operator');
percentButton.textContent = '%';

const divideButton = d.createElement('button');
divButtons.appendChild(divideButton);
divideButton.classList.add('operator');
divideButton.textContent = '÷';

const sevenButton = d.createElement('button');
divButtons.appendChild(sevenButton);
sevenButton.classList.add('number');
sevenButton.innerText = '7';
sevenButton.setAttribute('value', '7');

const eigthButton = d.createElement('button');
divButtons.appendChild(eigthButton);
eigthButton.classList.add('number');
eigthButton.textContent = '8';
eigthButton.setAttribute('value','8');

const nineButton = d.createElement('button');
divButtons.appendChild(nineButton);
nineButton.classList.add('number');
nineButton.textContent = '9';
nineButton.setAttribute('value','9');

const multipButton = d.createElement('button');
divButtons.appendChild(multipButton);
multipButton.classList.add('operator');
multipButton.textContent = '×';

const fourButton = d.createElement('button');
divButtons.appendChild(fourButton);
fourButton.classList.add('number');
fourButton.textContent = '4';
fourButton.setAttribute('value','4');

const fiveButton = d.createElement('button');
divButtons.appendChild(fiveButton);
fiveButton.classList.add('number');
fiveButton.textContent= '5';
fiveButton.setAttribute('value','5');

const sixButton = d.createElement('button');
divButtons.appendChild(sixButton);
sixButton.classList.add('number');
sixButton.textContent = '6';
sixButton.setAttribute('value','6');

const minusButton = d.createElement('button');
divButtons.appendChild(minusButton);
minusButton.classList.add('operator');
minusButton.textContent= '-';

const oneButton = d.createElement('button');
divButtons.appendChild(oneButton);
oneButton.classList.add('number');
oneButton.textContent = '1';
oneButton.setAttribute('value','1');

const twoButton = d.createElement('button');
divButtons.appendChild(twoButton);
twoButton.classList.add('number');
twoButton.textContent = '2';
twoButton.setAttribute('value','2');

const trheeButton = d.createElement('button');
divButtons.appendChild(trheeButton);
trheeButton.classList.add('number');
trheeButton.textContent = '3';
trheeButton.setAttribute('value','3');

const plusButton = d.createElement('button');
divButtons.appendChild(plusButton);
plusButton.classList.add('operator');
plusButton.textContent = '+'

const zeroButton = d.createElement('button');
divButtons.appendChild(zeroButton);
zeroButton.classList.add('zeroButton')
zeroButton.textContent = '0';
zeroButton.setAttribute('value','0');

const dotButton = d.createElement('button');
divButtons.appendChild(dotButton);
dotButton.classList.add('number');
dotButton.textContent = '.'
dotButton.setAttribute('value','.')


const resultButton = d.createElement('button');
divButtons.appendChild(resultButton);
resultButton.classList.add('resultButton')
resultButton.textContent = '=';


//functions

const disableDot = ()=>{
    input.value.includes('.')? dotButton.setAttribute('disabled', true) : false;
}
const divide = (str,str2)=>{
    return Number(str)/Number(str2);    
}
const substract = (str,str2)=>{
    return Number(str)-Number(str2);    
}
const add = (str,str2)=>{
    return Number(str)+Number(str2);    
}
const multuply = (str,str2)=>{
    return Number(str)*Number(str2);    
}




divButtons.addEventListener('click',(e)=>{
    
    if(e.target.classList.contains('number') || e.target.classList.contains('zeroButton')){

        input.value = input.value.concat(e.target.value);
        console.log(input.value)
        console.log(output.value)
        disableDot();
    }
    if(e.target.classList.contains('AC')){
        input.value = '';
        output.value = '';
        comput.textContent='';
    }
            
    if(e.target.classList.contains('operator') && output.value === ''){
        output.value = input.value
        input.value ='';
        comput.textContent =  e.target.textContent

    }      
    if(e.target.contains(resultButton) && output.value !== ''){            
        comput.textContent === '×' ? input.value =  multuply(output.value,input.value):false;
        comput.textContent === '÷' ? input.value =  divide(output.value,input.value):false;
        comput.textContent === '-' ? input.value =  substract(output.value,input.value):false;
        comput.textContent === '+' ? input.value =  add(output.value,input.value):false;
        comput.textContent = '';
    }
    if(e.target.classList.contains('operator') && input.value !=='' && output.value !==''){
        comput.textContent  = e.target.textContent;
        comput.textContent === '×' ? output.value =  multuply(output.value,input.value):false;
        comput.textContent === '+' ? output.value =  add(output.value,input.value):false;
        comput.textContent === '-' ? output.value =  substract(output.value,input.value):false;
        comput.textContent === '÷' ? output.value =  divide(output.value,input.value):false;
        input.value = ''
        console.log('holi')
    }
    e.stopPropagation();
    })
    













