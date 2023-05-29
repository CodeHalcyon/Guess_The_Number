let x = Math.round(100 * Math.random())
let chances =0
let score = 100
let ch
ch = parseInt(prompt("Enter choice:- "))
console.log(ch)
if(ch>x)
    console.log("Guess something lesser than ",ch)
  else
    console.log("Guess something greater than ", ch)
  chances++
  score = score-chances
while(ch!=x){
  if (score < 0 || score === 0){
    break
  }
  ch =parseInt(prompt("Enter choice:- "))
  if(ch>x)
    console.log("Guess something lesser than ",ch)
  else
    console.log("Guess something greater than ", ch)
  chances++
  score = score-chances
  console.log(score)
}
console.log("You took ", chances, " guesses")
console.log("Your score is ",score)
if(score<=0)
  console.log("Your score has reached less than ZERO! 😔")
else{
console.log("Wooo Hoo!! You win 🥳🥳")
}