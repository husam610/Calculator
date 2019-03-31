let view="", result;
		
function press(x){
	view += x;
	document.getElementById('view').innerHTML= view;
	result=eval(view);
	//document.getElementById('result').innerHTML= result;
}

function equal(){
	view=result;
	view=view.toString();
	//document.getElementById('result').innerHTML= result;
	document.getElementById('view').innerHTML= view;
}

function clearRes(){
	result=0;
	view="";
	//document.getElementById('result').innerHTML= result;
	document.getElementById('view').innerHTML= view;
}	