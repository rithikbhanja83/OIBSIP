function convertTemp() {
  const input = document.getElementById("tempInput").value;
  const unit = document.querySelector('input[name="unit"]:checked').value;
  const result = document.getElementById("result");

  if (input === "" || isNaN(input)) {
    result.innerText = "Please enter a valid number!";
    return;
  }

  const temp = parseFloat(input);
  let output = "";

  if (unit === "celsius") {
    const fahrenheit = (temp * 9) / 5 + 32;
    const kelvin = temp + 273.15;
    output = `${temp}°C = ${fahrenheit.toFixed(2)}°F = ${kelvin.toFixed(2)}K`;
  } else if (unit === "fahrenheit") {
    const celsius = ((temp - 32) * 5) / 9;
    const kelvin = celsius + 273.15;
    output = `${temp}°F = ${celsius.toFixed(2)}°C = ${kelvin.toFixed(2)}K`;
  } else if (unit === "kelvin") {
    const celsius = temp - 273.15;
    const fahrenheit = (celsius * 9) / 5 + 32;
    output = `${temp}K = ${celsius.toFixed(2)}°C = ${fahrenheit.toFixed(2)}°F`;
  }

  result.innerText = output;
}
