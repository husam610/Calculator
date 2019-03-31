let str=" ",
	arr=[],
	operation=0;
		
function press(x){
	str += x;
	document.getElementById('view').innerHTML= str;
	console.log(`${str} , ${arr} , ${operation}`);
}

function addColor(){
	document.getElementById(1).classList.add('gray');
	document.getElementById(2).classList.add('gray');
	document.getElementById(3).classList.add('gray');
	document.getElementById(4).classList.add('gray');
}

function oper(n){
	//1=+ , 2=-,3=x ,4=/
	operation=n;
	if(str.length>1){
		arr.push(parseInt(str,10));
		str=" ";
		addColor();
		document.getElementById(n).classList.remove('gray');
	}
	console.log(`${str} , ${arr} , ${operation}`);
}

function pushStr(){
	if(str.length>1) {arr.push(parseInt(str,10));}
}

function equal(n1=0,n2=0,ope=1){
	switch(ope){
		case 1:
		str=n1+n2;
		break;

		case 2:
		str=n1-n2;
		break;

		case 3:
		str=n1*n2;
		break;

		case 4:
		str=n1/n2;
		break;
	}
	str=str.toString();
	document.getElementById('view').innerHTML= str;
	arr=[];
	addColor();
	console.log(`${str} , ${arr} , ${operation}`);
}

function clearRes(){
	str=" ";
	arr=[];
	operation=0;
	addColor();
	document.getElementById('view').innerHTML= str;
	console.log(`${str} , ${arr} , ${operation}`);
}	


/*
class Calculator{
	constructor(str, arr, operation){
		this.str = " ";
		this.arr = [];
		this.operation = 0;
	}

	press(x){
		str += x;
		document.getElementById('view').innerHTML= str;
		console.log(`${str} , ${arr} , ${operation}`);
	}

	addColor(){
		document.getElementById(1).classList.add('gray');
		document.getElementById(2).classList.add('gray');
		document.getElementById(3).classList.add('gray');
		document.getElementById(4).classList.add('gray');
	}

	oper(n){
		//1=+ , 2=-,3=x ,4=/
		operation=n;
		if(str.length>1){
			arr.push(parseInt(str,10));
			str=" ";
			addColor();
			document.getElementById(n).classList.remove('gray');
		}
		console.log(`${str} , ${arr} , ${operation}`);
	}

	pushStr(){
		if(str.length>1) {arr.push(parseInt(str,10));}
	}

	equal(n1=0,n2=0,ope=1){
		switch(ope){
			case 1:
			str=n1+n2;
			break;

			case 2:
			str=n1-n2;
			break;

			case 3:
			str=n1*n2;
			break;

			case 4:
			str=n1/n2;
			break;
		}
		str=str.toString();
		document.getElementById('view').innerHTML= str;
		arr=[];
		addColor();
		console.log(`${str} , ${arr} , ${operation}`);
	}

	clearRes(){
		str=" ";
		arr=[];
		operation=0;
		addColor();
		document.getElementById('view').innerHTML= str;
		console.log(`${str} , ${arr} , ${operation}`);
	}
}
*/