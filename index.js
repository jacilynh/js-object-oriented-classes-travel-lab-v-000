// **Driver**
// - A driver can be initialized with a name, and a string representing the day
//   that he joined Scuber. 
// * `startDate` — returns a JavaScript Date object. 
// * `yearsExperienceFromBeginningOf` — takes an argument of a year and returns the
//   number of years since the driver's startDate. 
  
  class Driver {
    constructor(name, startDate) {
      this.name = name;
      this.startDate = new Date(startDate);
    }
    
    yearsExperienceFromBeginningOf(endDate) {
      let yr = new Date(endDate, 1, 1);
      let diff = (yr - this.startDate) / (1000*60*60*24*365);
      return parseInt(diff);
    }
  }