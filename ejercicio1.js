
var n1=prompt("Ingrese el primer numero");
n1=parseInt(n1);
var n2=prompt ("ingrese el segundo numero");
n2=parseInt(n2);
var n3=prompt ("ingrese el Tercer numero");
n3=parseInt(n3);

if (n1>n2 && n2>n3){
  document.write("el numero mayor es:"+ n1);
  document.write("el numero menor es "+ n3);
}

if (n1>n3 && n3>n2){
  document.write("el numero mayor es:"+ n1);
  document.write("el numero menor es "+ n2);
}
if (n2>n1 && n1>n3){
  document.write("el numero mayor es:"+ n2);
  document.write("el numero menor es "+ n3);

}
if (n2>n3 && n3>n1){
  document.write("el numero mayor es:"+ n2);
  document.write("el numero menor es "+ n1);

}
if (n3>n2 && n2>n1){
  document.write("el numero mayor es:"+ n3);
  document.write("el numero menor es "+ n1);

}

if (n3>n1 && n1>n2){
  document.write("el numero mayor es:"+ n3);
  document.write("el numero menor es "+ n2);

}
