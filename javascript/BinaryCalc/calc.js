var str = document.getElementById("res");

function Clean_Res(e) {
    document.getElementById('res').innerHTML = "";
}

function Write_in_Res(e) {

    var btn = e.target;
    var num = btn.innerHTML;
    document.getElementById('res').innerHTML += num;
}

function Operate(operate_string) {

    let num1;
    let num2;

    operate_string.search("");
}


document.getElementById("btnClr").addEventListener("click", Clean_Res);

document.getElementById("btn0").addEventListener("click", Write_in_Res);
document.getElementById("btn1").addEventListener("click", Write_in_Res);
document.getElementById("btnSum").addEventListener("click", Write_in_Res);
document.getElementById("btnSub").addEventListener("click", Write_in_Res);
document.getElementById("btnMul").addEventListener("click", Write_in_Res);
document.getElementById("btnDiv").addEventListener("click", Write_in_Res);


document.getElementById("btnEql").onclick = Operate(str.innerText);