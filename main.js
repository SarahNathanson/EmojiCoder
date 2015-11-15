var stack=new Array();//create the stack
var button = document.getElementById("button");
var code = document.getElementById("code");
var output = document.getElementById("output");
button.addEventListener("click", compileCode);
//tests
/*compileLine("👇🌚🌝🌚🌚🌚🌚🌚🌝");
compileLine("👆");*/
function compileCode(){
	code = document.getElementById("code");
	console.log(code.value);
	var scriptArray=code.value.split("\n");
	for(var i=0;i<scriptArray.length;i++){
		compileLine(scriptArray[i]);
	}
}

function compileLine(script){
	var command=script.slice(0,2);//emoji representation is 2 chars long
	var emojiParam=script.slice(2);//parameter is everything after first emoji
	var parameter="";
	if(emojiParam.length>0){
		parameter=binaryToParameter(emojiParam);
	}
	console.log("Line: "+script);
	console.log("Command: "+command);
	console.log("Parameter: "+parameter);

	if(command == "👇"){//push onto stack
		console.log("push");
		stack.push(parameter);
	}else if(command=="👆"){//pop from stack
		console.log("pop");
		var x=stack.pop();
		console.log(x);
	}else if(command=="✋"){//output top item from stack

	}else if(command=="👋"){//output param

	}
	else{
		console.log("Incorrect command");
		//ADD THROWS AN ERROR IN USER OUTPUT
	}
}

function binaryToParameter(emojiParam){ //🌝=1 🌚=0
	var binary="";
	for(var i=0;i<emojiParam.length;i+=2){
		if(emojiParam.slice(i,i+2)=="🌚"){
			binary+="0";
		}else if(emojiParam.slice(i,i+2)=="🌝"){
			binary+="1";
		}else{
			console.log("Incorrect param");
			//ADD THROWS AN ERROR IN USER OUTPUT
			return "Incorrect param";
		}
	}
	if(binary.length==8){
		var decInt=parseInt(binary,2);//turns binary string into decimal int
		var myChar=String.fromCharCode(decInt);
		return myChar;
	}
	else{
		console.log("Incorrect param");
		//ADD THROWS AN ERROR IN USER OUTPUT
		return "Incorrect param";
	}
	
}

