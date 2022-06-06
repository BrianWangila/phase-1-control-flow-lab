let feet;
function scuberGreetingForFeet(feet){
  // Write your code here!
  if (feet <= 400){
    return "This one is on me!"
  }
  else if (feet > 2000 && feet <= 2500) {
    return "I will gladly take your thirty bucks."
  }
  else {
    return "No can do."
  }

}
scuberGreetingForFeet(200)


let city;
function ternaryCheckCity(city){
  // Write your code here!
  if (city === "NYC") {
    return "Ok, sounds good."
  }
  else if (city !== "NYC") {
    return "No go."
  }
}
ternaryCheckCity("NYC")


let tip;
function switchOnCharmFromTip(tip){
  // Write your code here!
  switch (tip){
    case "generous":
      return "Thank you so much."
      break;
    case "not as generous":
      return "Thank you."
      break;
    case "thanks for everything":
      return "Bye."
    
  }

}
console.log(switchOnCharmFromTip("Thank you."))