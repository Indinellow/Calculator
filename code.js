function roundToX(num,places){
    return +(Math.round(num+`e+${places}`) + `e-${places}`);
}

function roundResult(number) {
    return Math.round(number * 1000) / 1000
  }

function addition(a,b){
    let c=a+b;
    return c;
}

function subtraction(a,b){
    let c = a-b;
    return c;
}

function multiplication(a,b){
    let c = a*b;
    return c;
}

function division(a,b){
    if(b===0){
        return 'We dont want to crash the universe!'
    }
    let c = a/b;
    return c;
}

function operate(operator,a,b){
    switch (operator) {
        case 'multiplication':
            return multiplication(a,b);
        case 'addition':
            return addition(a,b);
        case 'subtraction':
            return subtraction(a,b);
        case 'division':
            return division(a,b);
        default:
            return 'Nonvalid input!'
    }
}

function resetEverything(){
    firstNumberString='';
    secondNumberString='';
    operatorString='';
    operatorSymbol='';
}

function callOperate(){
    
    if(firstNumberString=='' && temporaryResult!=''){
         firstNumberString = temporaryResult;
       }
    if(secondNumberString!=''&& operatorString!=''){
        let firstNumber=parseFloat(firstNumberString);   
        let secondNumber=parseFloat(secondNumberString);
        result.textContent = `${operate(operatorString, firstNumber,secondNumber)}`;
        input.textContent=`${firstNumberString} ${operatorSymbol} ${secondNumberString} =`;

        return operate(operatorString, firstNumber,secondNumber);
    }
    else{
        return 'missing';
    }
}




function concatenateToNumber(number){
    if(operatorString==''){
        if(firstNumberString.length<=15){
            if(firstNumberString=='' && number=='.'){
                firstNumberString='0.';}
            else{
                if(firstNumberString=='0' && number!='.'){
                    firstNumberString=number;
                }
                else{
                    firstNumberString+=number;
                }
            }
        }
    }
    else{
        if(secondNumberString.length<=15){
            if(secondNumberString=='' && number=='.'){
                secondNumberString='0.'}
            else{
                if (secondNumberString=='0' && number!='.'){
                    secondNumberString=number;
                }
                else{
                    secondNumberString+=number;
                }
            }
        }
    }
    if(firstNumberString.length>=15 || secondNumberString.length>=15){
        result.textContent=`Can't handle these numbers`
    }
    else{
    input.textContent=`${firstNumberString} ${operatorSymbol} ${secondNumberString}`;
    result.textContent='';
    }
}

function swapStringToSymbol(string)
{switch (string) {
    case 'multiplication':
        operatorSymbol='×';
        break;
    case 'addition':
        operatorSymbol='+';
        break;
    case 'subtraction':
        operatorSymbol='−';
        break;
    case 'division':
        operatorSymbol='÷';
        break;
}
}

function setOperator(string){
    if(firstNumberString.length<=15 && secondNumberString.length<=15){
        if (operatorString==''){
            if(firstNumberString=='' && temporaryResult!=''){
                firstNumberString = temporaryResult;
            }
            operatorString=string;
            swapStringToSymbol(string);
            input.textContent=`${firstNumberString} ${operatorSymbol} ${secondNumberString}`;
            result.textContent='';
        }
        else{
            if(secondNumberString!=''){
                let outcome = callOperate();
                firstNumberString=`${outcome}`;
                operatorString=string;
                swapStringToSymbol(string);
                secondNumberString='';
                input.textContent=`${firstNumberString} ${operatorSymbol} ${secondNumberString}`;
                }
        }
    }

}

function undoFunction(){
    if(operatorString==''){
        firstNumberString=firstNumberString.substring(0,firstNumberString.length-1)
    }
    else{
        secondNumberString=secondNumberString.substring(0,secondNumberString.length-1)
    }
    input.textContent=`${firstNumberString} ${operatorSymbol} ${secondNumberString}`;

}

function addDecimal(){
    if (operatorString==''){
        if(!firstNumberString.includes('.')){
            concatenateToNumber('.');
        }
    }
    else{
        if(!secondNumberString.includes('.')){
            concatenateToNumber('.');
        }
    }
}

function checKeyAndExecute(string){
    if(parseInt(string)>=0 && parseInt(string)<=9){
        concatenateToNumber(string);
    }
    else if(string=='*'){
        setOperator('multiplication');
    }
    else if(string=='+'){
        setOperator('addition');
    }
    else if(string=='-'){
        setOperator('subtraction');
    }
    else if(string=='/'){
        setOperator('division');
    }
    else if(string=='Enter'){    
        temporaryResult= `${callOperate()}`;
        if(temporaryResult!='missing'){
            resetEverything();}
           
    }
    else if(string=='Backspace'){
        undoFunction();
    }
    else if(string=='.'){
        addDecimal();    
    }
}

function plusMinusSign(){
    if (operatorString==''){
        if(firstNumberString.at(0)!='-'){
            firstNumberString='-'+firstNumberString;
        }
        else{
            firstNumberString=firstNumberString.substring(1,firstNumberString.length);
        }
    }
    else{
        if(secondNumberString.at(0)!='-'){
            secondNumberString='-'+secondNumberString;
        }
        else{
            secondNumberString=secondNumberString.substring(1,secondNumberString.length);
        }
    }
    input.textContent=`${firstNumberString} ${operatorSymbol} ${secondNumberString}`;

}

function removeTransition(e) {
    if (e.propertyName !== 'transform') return;
    e.target.classList.remove('clicked');
  }

let firstNumberString='';
let secondNumberString='';
let operatorString='';
let operatorSymbol='';
let temporaryResult='';

const input = document.querySelector('.input');
input.addEventListener('change',()=>{
    input.textContent=`${firstNumberString} ${operatorSymbol} ${secondNumberString}`;
})
const result=document.querySelector('.result');
// result.textContent=`${operate(operatorString,firstNumberString,secondNumberString)}`;

const equal=document.querySelector('#equal');
equal.addEventListener('click',()=>{
    temporaryResult= `${callOperate()}`;
    if(temporaryResult!='missing'){
        resetEverything();}
    });

const number0 = document.querySelector('#number-0');
const number1 = document.querySelector('#number-1');
const number2 = document.querySelector('#number-2');
const number3 = document.querySelector('#number-3');
const number4 = document.querySelector('#number-4');
const number5 = document.querySelector('#number-5');
const number6 = document.querySelector('#number-6');
const number7 = document.querySelector('#number-7');
const number8 = document.querySelector('#number-8');
const number9 = document.querySelector('#number-9');

number0.addEventListener('click',()=> concatenateToNumber('0'));
number1.addEventListener('click',()=> concatenateToNumber('1'));
number2.addEventListener('click',()=> concatenateToNumber('2'));
number3.addEventListener('click',()=> concatenateToNumber('3'));
number4.addEventListener('click',()=> concatenateToNumber('4'));
number5.addEventListener('click',()=> concatenateToNumber('5'));
number6.addEventListener('click',()=> concatenateToNumber('6'));
number7.addEventListener('click',()=> concatenateToNumber('7'));
number8.addEventListener('click',()=> concatenateToNumber('8'));
number9.addEventListener('click',()=> concatenateToNumber('9'));

const divisionButton = document.querySelector('#division');
divisionButton.addEventListener('click',()=>setOperator('division'))

const additionButton = document.querySelector('#addition');
additionButton.addEventListener('click',()=>setOperator('addition'))

const multiplicationButton = document.querySelector('#multiplication');
multiplicationButton.addEventListener('click',()=>setOperator('multiplication'));

const subtractionButton = document.querySelector('#subtraction');
subtractionButton.addEventListener('click',()=>setOperator('subtraction'));

const allClear = document.querySelector('#allClear');
allClear.addEventListener('click',()=>{
    firstNumberString='';
    secondNumberString='';
    operatorString='';
    operatorSymbol='';
    input.textContent='';
    result.textContent='';
})

const undo = document.querySelector('#undo');
undo.addEventListener('click',undoFunction);

const decimal=document.querySelector('#decimal');
decimal.addEventListener('click',addDecimal);

window.addEventListener('keydown',function(e){
    e.preventDefault();
    checKeyAndExecute(e.key);
    const oneButton = document.querySelector(`button[data-key="${e.key}"]`);
    if(oneButton!=null)
    {oneButton.classList.add('clicked');}
})

const plusMinusSignButton = document.querySelector('#plusMinusSign');
plusMinusSignButton.addEventListener('click',plusMinusSign);

const buttons=Array.from(document.querySelectorAll('button'));
buttons.forEach(oneButton=>{
    oneButton.addEventListener('click',()=>{
        oneButton.classList.add('clicked')
    })
    oneButton.addEventListener('transitionend',removeTransition);
})
