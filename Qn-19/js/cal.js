let a;
let b;
let res;


function readNo()
{
	a=Number(document.getElementById("num1").value);
	b=Number(document.getElementById("num2").value);
	
}

function sum()
{
	readNo();
	res=Number(a)+Number(b);
	document.getElementById("res").value=res;	
	
}

function sub()
{
	readNo();
	res=Number(a)-Number(b);
	document.getElementById("res").value=res;	
}

function product()
{
	readNo();
	res=Number(a)*Number(b);
	document.getElementById("res").value=res;
}

function division()
{
	readNo();
	res=Number(a)/Number(b);
	document.getElementById("res").value=res;	
}

function mod()
{
	readNo();
	res=Number(a)%Number(b);
	document.getElementById("res").value=res;	
}


	
			
	