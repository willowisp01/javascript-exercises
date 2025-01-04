const convertToCelsius = function(degF) {
  // F to C 
  return parseFloat(((degF - 32) * 5 / 9).toFixed(1));
};

const convertToFahrenheit = function(degC) {
  // C to F 
  return parseFloat((degC * 9 / 5 + 32).toFixed(1)); 
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
