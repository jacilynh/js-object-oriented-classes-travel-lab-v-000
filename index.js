// initialized with a name, and a string representing the day that he joined Scuber

  class Driver {
    constructor(name, startDate) {
      this.name = name;
      this.startDate = new Date(startDate);
    }
    
// * `yearsExperienceFromBeginningOf` — takes an argument of a year and returns the number of years since the driver's startDate. 

    yearsExperienceFromBeginningOf(endDate) {
      let yr = new Date(endDate, 1, 1);
      let diff = (yr - this.startDate) / (1000*60*60*24*365);
      return parseInt(diff);
    }
  }


  
  class Route {
    constructor(beginningLocation, endingLocation) {
      this.beginningLocation = beginningLocation;
      this.endingLocation = endingLocation;
    }
    
    let eastWest = [
      '1st Avenue',
      '2nd Avenue',
      '3rd Avenue',
      'Lexington Avenue',
      'Park',
      'Madison Avenue',
      '5th Avenue'
    ];

// return an int # of blocks travelled
    blocksTravelled() {
      let begVert = this.beginningLocation['vertical'];
      let endVert = this.endingLocation['vertical'];
      let vertical = endVert - begVert;
      
      let begHorz = this.beginningLocation['horizontal'];
      let endHorz = this.endLocation['horizontal'];
      
      let begHorzIndex = eastWest.indexOf(begHorz);
      let endHorzIndex = eastWest.indexOf(endHorz);
      
      let horizontal = begHorzIndex - endHorzIndex;
      
      return (vertical + horizontal);
    }
    
    - `estimatedTime` — The method returns the number of minutes estimated for the
  trip. The estimated time depends on the distance in blocks and whether the trip
  is occurring during peak hours or off peak hours. During off peak hours, a
  driver travels three blocks in a minute, while during peak hours a driver
  travels an estimated two blocks in a minute.
    
  }