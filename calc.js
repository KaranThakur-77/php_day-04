var test1 = document.getElementById("num1");
var test2 = document.getElementById("num2");
var op = document.getElementById("op");
var btn1 = document.getElementById("btn");
var txtArea = document.getElementById("result");

btn1.addEventListener("click", function () {
  var answer = 0;
  switch (op.options[op.selectedIndex].value) {
    case "5":
      answer = parseFloat(test1.value) + parseFloat(test2.value);
      break;
    case "2":
        answer=parseFloat(test1.value)-parseFloat(test2.value)
      break;

      case "3":
        answer=parseFloat(test1.value)*parseFloat(test2.value)
        break;
      case "4":
        answer=parseFloat(test1.value)/parseFloat(test2.value)
        break;
  }
//   alert(answer)
  txtArea.value=answer
});
