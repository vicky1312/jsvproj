const x = parseFloat (prompt("enter your first number: "));
const y = parseFloat (prompt("enter your second number: "));

const operator = prompt("enter operator (+, -, /, *)");
let result = 0;
if (isNaN (x)|| isNaN(y)){
    alert("Incorrect input, refresh and provide appropriate input")
}else{

    if (operator== '+'){
        result = x+y;
    }else if (operator == '-'){
        result = x-y;
    }else if (operator == '/'){
        result = x/y;
    }else if (operator == '*'){
        result = x*y;
    }
    document.write(x + operator + y + '=' + result);

    }