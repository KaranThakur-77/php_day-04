var btn=document.getElementById("btn1")
var btn1=document.getElementById("btn2")
var btn2=document.getElementById("btn3")
var btn3=document.getElementById("btn4")
btn.addEventListener("click",function () {
    document.body.style.backgroundColor="red"
})
btn1.addEventListener("click",function () {
    document.body.style.backgroundColor="lime"
})
btn2.addEventListener("click",function () {
    document.body.style.backgroundColor="blue"
})
btn3.addEventListener("click",function () {
    document.body.style.backgroundColor="black"
})