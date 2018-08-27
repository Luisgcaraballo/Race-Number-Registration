let raceNumber = Math.floor(Math.random() * 1000);
const registeredEarly = false;
const runAge = 20;
if (runAge >= 18 && registeredEarly) {
  console.log(raceNumber += 1000)
} else if (runAge >= 18 && !registeredEarly) {
  console.log(raceNumber)
} else if (runAge < 18) {
  console.log(raceNumber)
} else {
  console.log(" See registration desk!")
}

if (runAge >= 18 && registeredEarly) {
  console.log(`You are number ${raceNumber}. Early adults run at 9:30 am.`)
} else if (runAge >= 18 && !registeredEarly) {
  console.log(`You are number ${raceNumber}. Late adults run at 11:00 am.`)
} else if (runAge < 18) {
  console.log(`You are number ${raceNumber}. Everyone below 18 runs at 12:30 pm.`)
} else {
  console.log("See regitration desk.")
}
