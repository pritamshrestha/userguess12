// it create the random number between 1 to 100
var secretNumber=Math.floor(Math.random()*100 +1)
console.log(secretNumber)
// this is the variable declare the guess count
 var guessCount=0;

 // this is for the inclick function
 function myfunction(){
// storing the user guess value
var userGuess=document.getElementById('userGuess');
// storing the results 
var results=document.getElementById('results')
if(!userGuess.value||userGuess.value>100||userGuess.value<0){
	results.className="failure"
	// adding the test content to the result
	results.textContent="Its out of limit please try again!"
	// cleares the input field
	userGuess.value=""
	// stop the function to allow the user try again
	return

 }
 // this is for the another condition
 if(secretNumber==userGuess.value){
 	results.className="success"
 	results.textContent="Congratulation! you got it in :"+ (guessCount+1)+" guesses!"
 return
 }
 // this is for the another condition
 else if(secretNumber<userGuess.value){
 	results.className="failure"
 	results.textContent="Sorry the number is big try again"
 	userGuess.focus()
 }
 else{
 	results.className="failure"
 	results.textContent="The guess number is small try again!"
    userGuess.focus()
 }
// clears the input field
userGuess.value="";
guessCount=guessCount+1
// stop the guess if the limit is over
if(guessCount>=5){
	results.className="failure"
	results.textContent="Your limit is over! Please refresh to start over again!"
	// remove the onclick button if the limit is over
	document.getElementById('btn').onclick=null;
}

}//this is the end of the function
