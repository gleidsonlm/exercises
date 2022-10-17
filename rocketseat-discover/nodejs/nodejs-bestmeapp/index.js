/*  Using stdout to write in the console
    process.stdout.write("Something \n")
 */

// Variable containing an array of questions for reflextion:
const questions = [
    "What have I learned today?",
    "What have upset me today? What can I do about it?",
    "What made me happy today?",
    "How many people I have helped today?",
]
//Variable containing an array of answers:
const answers = []

// Function "ask" to write a question from array to console:
const ask = function(index=0) {
    process.stdout.write("\n" + questions[index] + " - ")
}

// Run function "ask" with array position (defaul "0")
ask()

// Listening for input with process.stdin.on
process.stdin.on("data", data => {
    //Write back the input in the console as a String trimming empty line spaces, and add a break line
    // process.stdout.write(data.toString().trim() + '\n')
    
    //Add the input to the answers array as a trimmed string.
    answers.push(data.toString().trim())
    
    //If number of answers lesser than questions, get the next question.
    if(answers.length < questions.length){
        ask(answers.length)
    
    //If equal (or higher?), print answers.
    } else {
    
    //Loop answers out in the console, although console.log would be easier.
    for (let i of answers) {
        process.stdout.write(i + "\n")
    }
    
    // And ends the process
    process.exit()
    }
}
)