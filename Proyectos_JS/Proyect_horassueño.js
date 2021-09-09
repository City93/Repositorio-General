const getSleepHours = (day) =>{
    if (day === 'monday') {
      return 8;
    } else if (day ==='tuesday'){
      return 6;
    } else if (day === 'wednesday'){
      return 9;
    } else if (day === 'thursday'){
      return 5;
    } else if (day === 'friday'){
      return 10;
    } else if (day === 'saturday'){
      return 11;
    } else if (day === 'sunday'){
      return 6
    }
    };
  
  const getActualSleepHours = () => 
  getSleepHours('monday') + getSleepHours('tuesday') + getSleepHours('wednesday') + getSleepHours('thursday') + getSleepHours('friday') + getSleepHours('saturday') + getSleepHours('sunday');
  
  const getIdealSleepHours = () =>{
    const idealHours = 7.5;
    return idealHours * 7;
  };
  const calculateSleepDebt = () => {
    const actualSleepHours = getActualSleepHours();
    const idealSleepHours = getIdealSleepHours();
    if (actualSleepHours === idealSleepHours) {
      return 'Has tenido el horario de sueño perfecto';
    } else if (actualSleepHours > idealSleepHours){
      return 'Has dormido demasiado';
    } else {
      return 'Has dormido poco';
    }
  };
  console.log(calculateSleepDebt());
  console.log(getActualSleepHours());
  console.log(getIdealSleepHours());

  const objectives = ['Learn a new languages', 'Read 52 books', 'Run a marathon'];
console.log(objectives.length);
