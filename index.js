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
    
    yearsExperienceFromBeginningOf(year) {
      let yr = new Date();
      let diff = (yr - startDate) / (1000*60*60*24*365);
      return diff;
    }
  }