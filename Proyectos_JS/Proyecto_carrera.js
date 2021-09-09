let raceNumber = Math.floor(Math.random() * 1000);
let registeredEarly = true;
let runnerAge = 18;
if (runnerAge > 18 && registeredEarly === true) {
    raceNumber += 1000};
if (runnerAge > 18 && registeredEarly === true){
      console.log(`Tu número de carrera es ${raceNumber} y tu carrera empieza a las 9:30`)
    }
else if (runnerAge > 18 && !registeredEarly){
  console.log(`Tu número de carrera es ${raceNumber} y tu carrera empieza a las 11:00 am`)
}
else if(runnerAge < 18){
  console.log(`Tu número de carrera es ${raceNumber} y tu carrera empieza a las 12:30 am`)
} else { 
  console.log(`Visita la mesa de registro`)
}