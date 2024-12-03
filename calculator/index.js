function add(){
    let a=parseInt(document.getElementById("a1").value)
    let b=parseInt(document.getElementById("a2").value)
    result=document.getElementById("res").innerHTML=a+b
}
function sub(){
    let a=parseInt(document.getElementById("a1").value)
    let b=parseInt(document.getElementById("a2").value)
    result=document.getElementById("res").innerHTML=a-b
}
function mul(){
    let a=parseInt(document.getElementById("a1").value)
    let b=parseInt(document.getElementById("a2").value)
    result=document.getElementById("res").innerHTML=a*b
}
function div(){
    let a=parseInt(document.getElementById("a1").value)
    let b=parseInt(document.getElementById("a2").value)
    result=document.getElementById("res").innerHTML=a/b
}
function mod(){
    let a=parseInt(document.getElementById("a1").value)
    let b=parseInt(document.getElementById("a2").value)
    result=document.getElementById("res").innerHTML=a%b
}
function exp(){
    let a=parseInt(document.getElementById("a1").value)
    let b=parseInt(document.getElementById("a2").value)
    result=document.getElementById("res").innerHTML=a**b
}