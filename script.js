let userChoice;
let num1;
let num2;
let operator;  
//cred ca trebuie sa fac ceva cu arrays la num1,num2 operattor (balari)
// care sa ia valorile introduse de utilizator
//ca design vreau sa fie un iphone cu aplicatia calculator deschisa
// cu btn on click nu trebuie sa faci aia cu parse int sdau prompt
//pt a lau valorile utilizatorului
function Clear(){}

function Operate(num1,num2,operator){
    
    if (operator==='+'){
        Add(num1,num2);
    };
    else if(operator==='*'){
        Multiply(num1,num2);
    };
    else if(operator==='-'){
        Subtract(num1,num2);
    };
    else{Divide(num1,num2);
    };

}


function Add(a,b){
    return a+b;
};

function Subtract(a,b){
    return a-b;
};

function Multiply(a,b){
    return a*b;
};

function Divide(a,b){
    return a/b;
};