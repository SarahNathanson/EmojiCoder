var stack=new Array();//create the stack
compileLine("👇parm");
compileLine("👆");
function compileLine(script){
	
	var command=script.slice(0,2);//emoji representation is 2 chars long
	var parameter=script.slice(2);//parameter is everything after first emoji
	console.log("Command: "+command);
	console.log("Parameter: "+parameter);

	//tests
	stack.push(parameter);
	console.log(stack.pop());

	if(command == "👇"){
		console.log("push");
		stack.push(parameter);
	}else if(command=="👆"){
		console.log("pop");
		var x=stack.pop();
		console.log(x);
	}
}

function getFormData(){
	
}