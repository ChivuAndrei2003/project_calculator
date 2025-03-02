function Add(a,b){
    return a + b;
};

function Subtract(a,b){
    return a - b;
};
function Multiply(a,b){
    return a * b;
};
function Divide(a,b){
    return a / b;
};


let num1;
let num2;
let operator;

function Operate(num1,num2,operator){
   let result;
    switch(operator){
        case "+":
            result = Add(num1,num2) ;
            break ;
        
        case "-":
            result = Subtract(num1,num2);
            break;
        
        case "*":
            result = Multiply(num1,num2);
            break ;

        case "/":
            if (num2 !== 0){
                result = Divide(num1,num2);}
                else {
                    result="lmao";
                }
            break;
       
            


    }
    return result;
};
//I have to continue tomorrow bcs I'm too tired right now

// buttons is a node list. It looks and acts much like an array.
const buttons = document.querySelectorAll("button");

// we use the .forEach method to iterate through each button
buttons.forEach((button) => {
  // and for each one we add a 'click' listener
  button.addEventListener("click", () => {
    alert(button.textContent);
  });
});
