z = document.getElementById("input")

function clr(){
    z.value = " "
}
function num7(){
    z.value += "7"
}
function num8(){
    z.value += "8"
}
function num9(){
    z.value += "9"
}
function num4(){
    z.value += "4"
}
function num5(){
    z.value += "5"
}
function num6(){
    z.value += "6"
}
function num1(){
    z.value += "1"
}
function num2(){
    z.value += "2"
}
function num3(){
    z.value += "3"
}
function num0(){
    z.value += "0"
}
function setOPD(){
    z.value += "/"
}
function setOPX(){
    z.value += "*"
}
function setOPM(){
    z.value += "-"
}
function setOPP(){
    z.value += "+"
}
function press(){
    z.value += "."
}
function calculate(){
    document.getElementById('input').value=eval(document.getElementById('input').value)
}