var stack=new Array();//create the stack
compileLine("👇parm");
compileLine("👆");
function compileLine(script){
	
	var command=script.slice(0,2);//emoji representation is 2 chars long
	var emojiParam=script.slice(2);//parameter is everything after first emoji
	var parameter=binaryToParameter(emojiParam);
	console.log("Command: "+command);
	console.log("Parameter: "+parameter);

	if(command == "👇"){
		console.log("push");
		stack.push(parameter);
	}else if(command=="👆"){
		console.log("pop");
		var x=stack.pop();
		console.log(x);
	}
}

function binaryToParameter(emojiParam){ //🌝=1 🌚=0
	var binary="";
	for(int i=0;i<emojiParam.length();i++){
		if(emojiParam.slice(i,i+1)=="🌚"){
			binary+="0";
		}else if(emojiParam.slice(i,i+1)=="🌝"){
			binary+="1";
		}else{
			console.log("Incorrect param");
			//ADD THROWS AN ERROR IN USER OUTPUT
			return "Incorrect param";
		}
	}
	if(binary.length()==8){
		
		return 
	}
	else{
		console.log("Incorrect param");
		//ADD THROWS AN ERROR IN USER OUTPUT
		return "Incorrect param";
	}
	
}
function getFormData(){
	
}