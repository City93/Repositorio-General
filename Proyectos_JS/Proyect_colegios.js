class School {
    constructor (name, level, numberOfStudents){
      this._name = name;
      this._level = level;
      this._numberOfStudents = numberOfStudents;
    }
    get name () {
      return this._name;
    }
    get level () {
      return this._level;
    }
    get numberOfStudents () {
      return this._numberOfStudents
    }
    set numberOfStudents (newNumberOfStudents){
      if (newNumberOfStudents === number) {
        this.numberOfStudents = newNumberOfStudents;
      } else {
        return console.log('Invalid input: numberOfStudents must be set to a Number.')
      }
    }
    quickFacts () {
      return `${this.name} educates ${this.numberOfStudents} students at the ${this.level} school level.`
    }
    static pickSubstituteTeacher (substituteTeachers){
      let substituteTeachers = [];
      Math.floor(Math.random () * (substituteTeachers.lenght -= 1))
    }
  };
  class PrimarySchool extends School {
    constructor (name, level, numberOfStudents) {
      super(name);
      super(level);
      super(numberOfStudents);
      this._pickupPolicy;
    }
    get () {
      return this._pickupPolicy;
    }
  }
  