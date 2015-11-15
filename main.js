var button = document.getElementById("button");
var code = document.getElementById("code");
var output = document.getElementById("output");
var outputcontainer = document.getElementById("outputcontainer");
var stack=new Array();//create the stack
var accumulator=0;
var x=0;//temp for nums
var stringBuilder="";
button.addEventListener("click", compileCode);
	outputcontainer.style.display = "none";
function compileCode(){
	outputcontainer.style.display = "inline";
stack=new Array();//create the stack
accumulator=0;
x=0;//temp for nums
stringBuilder="";
output.value="";
var scriptArray=code.value.split("\n");
for(var i=0;i<scriptArray.length;i++){
var effect=compileLine(scriptArray[i],i,scriptArray);
	i+=effect;
}
}
function compileLine(script,lineNum,scriptArray){
var command=script.slice(0,2);//emoji representation is 2 chars long
var modifier=script.slice(2,4);
var emojiParam=script.slice(4,20);//parameter is everything after first emoji
var parameter="";
if(emojiParam.length>0){
if(modifier=="🔡"){//modifier is binary char
parameter=charToParameter(emojiParam);
}else if(modifier=="🔢"){//modifer is decimal int
parameter=numToParameter(emojiParam)
}
else{
console.log("Incorrect modifier");
//ADD THROWS AN ERROR
}
}
console.log("Line: "+script);
console.log("Command: "+command);
console.log("Modifier: "+modifier);
console.log("Parameter: "+parameter);

if(command == "👇"){//push onto stack
console.log("push");
stack.push(parameter);
}else if(command=="👆"){//pop from stack
console.log("pop");
var popped=stack.pop();
console.log(popped);
}else if(command=="✋"){//output top item from stack
output.value+=stack[stack.length-1];
}else if(command=="👋"){//output param
output.value+=parameter;
}else if(command=="📦"){//set accumulator
	accumulator=parameter;
}else if(command=="➕ "){//add to accumulator 
	accumulator+=parameter;
}else if(command=="➖ "){//subtract from accumulator 
	accumulator-=parameter;
}else if(command=="➗ "){//divide accumulator by
	accumulator=Math.round(accumulator/parameter);
}else if(command=="✖ "){//mulitply accumulator by
	accumulator*=parameter;
}
else if(command=="📫"){//output accumlator
	output.value+=accumulator;
}else if(command=="📝"){//output newline
	output.value+="\n"
}else if(command=="🔻"){//push accumulator on to stack
	stack.push(accumulator);
}
else if(command=="🔺"){//set accumulator to top of stack
	accumulator=stack[stack.length-1];
}else if(command=="🎒"){//set x
	x=parameter;
}else if(command=="🚥"){//push x on to stack
	stack.push(x);
}
else if(command=="🚦"){//set x to top of stack
	x=stack[stack.length-1];
	console.log("X is "+x);
}else if(command=="🔹"){//set x to accumulator
	x=accumulator;
}else if(command=="🔸"){//set accumulator to x
	accumulator=x;
}else if(command=="➕✖"){//add x to accumulator 
	accumulator+=x;
}else if(command=="➖✖"){//subtract x from accumulator 
	accumulator-=x;
}else if(command=="➗✖"){//divide accumulator by x
	accumulator=Math.round(accumulator/x);
}else if(command=="✖✖"){//mulitply accumulator by x
	accumulator*=x;
}else if(command=="📪"){//output x
	console.log("X is "+x);
	output.value+=x;
}else if(command=="🔛"){//compare x to accumulator //binary 0 for < 1 for = 2 for >
	console.log(parameter);
	if(parameter==0){ //x < accumulator
		if(x<accumulator){
			return 0;
		}else{
			return 1
		}
	}else if(parameter==1){ //x equals accumulator
		if(x==accumulator){
			return 0;
		}else{
			return 1
		}
	}else if(parameter==2){//x > accumulator
		if(x>accumulator){
			return 0;
		}else{
			return 1
		}
	}
}//need to update read me starting here
else if(command=="🔁"){//repeat next line [param] times
	console.log("here");
	for(var tired=0;tired<parameter-1;tired++){
		console.log("loop");
		var temp=compileLine(scriptArray[lineNum+1],lineNum,scriptArray);
	}
}else if(command=="📧"){//set stringbuilder to [param]
	stringbuilder=parameter;
}else if(command=="📥"){//add [param] to stringbuilder
	stringbuilder+=parameter;
}else if(command=="📤"){//remove last char from stringbuilder
	stringbuilder=stringbuilder.slice(0,stringbuilder.length-1);
}else if(command=="📨"){//output stringbuilder
	output.value+=stringbuilder;
}
else{
console.log("Incorrect command");
//ADD THROWS AN ERROR IN USER OUTPUT
}
return 0;
}

function numToParameter(emojiParam){
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
return decInt;
}
else{
console.log("Incorrect param");
//ADD THROWS AN ERROR IN USER OUTPUT
return "Incorrect param";
}
}

function charToParameter(emojiParam){ //🌝=1 🌚=0
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