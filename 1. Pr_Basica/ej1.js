var res = 0
var contador = 0

for (let i = 0; i < 5; i++) {
  var num=parseInt(prompt("Introduce un numero"));
  res=num + res;
  if (num > 100){
    contador++
  }
}

alert(res)
alert(contador)