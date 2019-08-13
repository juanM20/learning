var str = document.getElementById("res");

function Clean_Res(e) {
    document.getElementById('res').innerHTML = "";
}

function Write_in_Res(e) {

    var btn = e.target;
    var num = btn.innerHTML;
    document.getElementById('res').innerHTML += num;
}

function Operate() {

    let operate_string = str.innerHTML;
    let num1;
    let num2;
    let result;
    let result2;
    let index = 0;

    for (let i = 0; i < operate_string.length; i++) {
        if (operate_string[i] == "+" || operate_string[i] == "-" || operate_string[i] == "*" || operate_string[i] == "/")
            index = i;
    }

    num1 = operate_string.substr(0, index);
    num2 = operate_string.substr(index + 1, operate_string.length - 1);

    console.log('Num1: ' + parseInt(num1, 2));
    console.log('Num2: ' + parseInt(num2, 2));

    switch (operate_string[index]) {
        case '+':
            result = parseInt(num1, 2) + parseInt(num2, 2);
            console.log('Decimal_Result: ' + result);
            result2 = result.toString(2);
            console.log('Binary_Result: ' + result2);
            document.getElementById('res').innerHTML = result2;
            break;
        case '-':
            result = parseInt(num1, 2) - parseInt(num2, 2);
            console.log('Decimal_Result: ' + result);
            result2 = result.toString(2);
            console.log('Binary_Result: ' + result2);
            document.getElementById('res').innerHTML = result2;
            break;
        case '*':
            result = parseInt(num1, 2) * parseInt(num2, 2);
            console.log('Decimal_Result: ' + result);
            result2 = result.toString(2);
            console.log('Binary_Result: ' + result2);
            document.getElementById('res').innerHTML = result2;
            break;
        case '/':
            result = parseInt(num1, 2) / parseInt(num2, 2);
            console.log('Decimal_Result: ' + result);
            result2 = result.toString(2);
            console.log('Binary_Result: ' + result2);
            document.getElementById('res').innerHTML = result2;
            break;
    }

}


document.getElementById("btnClr").addEventListener("click", Clean_Res);

document.getElementById("btn0").addEventListener("click", Write_in_Res);
document.getElementById("btn1").addEventListener("click", Write_in_Res);
document.getElementById("btnSum").addEventListener("click", Write_in_Res);
document.getElementById("btnSub").addEventListener("click", Write_in_Res);
document.getElementById("btnMul").addEventListener("click", Write_in_Res);
document.getElementById("btnDiv").addEventListener("click", Write_in_Res);


document.getElementById("btnEql").addEventListener("click", Operate);