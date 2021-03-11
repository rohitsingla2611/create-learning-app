export const convertTemperature = (temperature, convertMethod) => {
  const input = parseFloat(temperature);
  if (isNaN(input)) {
    return "";
  }
  const output = convertMethod(input);
  const roundedVal = Math.round(output * 1000) / 1000;
  return roundedVal;
};

export const toCelsius = (fahrenheit) => {
  return ((fahrenheit - 32) * 5) / 9;
};

export const toFarhenheit = (celsius) => {
  return (celsius * 9) / 5 + 32;
};
