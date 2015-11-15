# EmojiCoder
Compiler for an esoteric language coded in emoji. 


Lines of code are formatted as [command][modifier][parameter][new-line]


Commands:

👇: push [param] on to the stack

👆: pop off the stack

✋: output top item on stack

👋:	output [param] 

📦: set accumulator [param]

➕ : add [param] to accumulator 

➖ : subtract [param] from accumulator 

➗ : divide accumulator by [param]

✖ : multiply accumulator by [param]

📫: output accumulator

📝: output newline

🔻: push accumulator on to the stack

🔺: set accumulator to the top of the stack

🎒: set x to [param]

🚥: push x on to stack

🚦: add x to the top of stack

🔹: set x to accumulator

🔸: set accumulator to x

➕✖: add x to accumulator 

➖✖: subtract x from accumulator 

➗✖: divide accumulator by x

✖✖: mulitply accumulator by x

📪: output x

🔛: compares x to a

	if param=0 in binary, <

	if param=1 in binary, =

	if param=2 in binary, >

	if statement is true, compile next line else skip

🔁: repeat next line [param] times

📧: set stringbuilder to [param]

📥: add [param] to stringbuilder

📤: remove last character from stringbuilder

📨: output stringbuilder

Modifers:

🔡: Ascii Character 0-255

🔢: Integer Number 0-255


Parameters:

As binary where 🌚=0 and 🌝=1

Ex: 🌚🌝🌚🌚🌚🌚🌚🌝

	=0100 0001

	=65

	="A"


Variable Reference:

Stack: An implementation of a stack

	Has operations push and pop

Accumulator: Used to store and do arithmetic on a number

X: Used to temporarily store a number

String builder: Used to store and build up a string


Comments:

Comments are in progress

On lines which take parameters putting //comment on the end is ok
