class makeClass {
    "use strict";
    /* Alter code below this line */
    constructor(fahrenheitTemp) {
      this.fahrenheitTemp = fahrenheitTemp;
    }
    /* Alter code above this line */
  
    set temperature(temp) {
      this.celsius = temp;
    }
  
    get temperature() {
      return (5 / 9) * (this.fahrenheitTemp - 32);
    }
  }
  const Thermostat = makeClass;
  const thermos = new Thermostat(76); // setting in Fahrenheit scale
  let temp = thermos.temperature; // 24.44 in C
  thermos.temperature = 26;
  temp = thermos.temperature; // 26 in C