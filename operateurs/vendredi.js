var age=40;
var name="Bob";


if (age>18)
{
	
	document.write('je suis majeur<br>');
}
else
{
	
	document.write("je suis mineur<br>");
}
if (age<12){
	document.write("Je suis un enfant<br>");

}
if(name=="tom")
{
document.write("Je m'appelle tom<br>");
}
else if (name=="max") 
{
	document.write(" Je m'appelle Max<br>");
}
else 
{
	document.write("Je ne m'appelle ni Max ni Tom<br>");
}

console.log(name,age);
if(name=="Bob" && age==40)
{
	document.write("Je m'appelle Bob et j'ai 40 ans<br>");
}



